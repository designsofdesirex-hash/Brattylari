$imgDir = "assets/img"
$vidDir = "assets/Vid"

$imgBackup = "assets/img_backup"
$vidBackup = "assets/Vid_backup"

# Create backup directories
if (-not (Test-Path $imgBackup)) { New-Item -ItemType Directory -Path $imgBackup | Out-Null }
if (-not (Test-Path $vidDir) -and (Test-Path "assets/vid")) { $vidDir = "assets/vid" }
if (Test-Path $vidDir) {
    if (-not (Test-Path $vidBackup)) { New-Item -ItemType Directory -Path $vidBackup | Out-Null }
}

Write-Host "Backing up and compressing images..."
$imageFiles = Get-ChildItem -Path $imgDir -Include *.jpg,*.jpeg,*.png,*.jfif,*.webp -Recurse
foreach ($file in $imageFiles) {
    # Skip backup directory
    if ($file.FullName -match "img_backup") { continue }
    
    $backupPath = Join-Path $imgBackup $file.Name
    if (-not (Test-Path $backupPath)) {
        Copy-Item -Path $file.FullName -Destination $backupPath
    }

    $tempPath = $file.FullName + ".temp" + $file.Extension
    # Use ffmpeg to scale and compress. q:v 5 is very compressed for jpeg
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList "-y", "-i", "`"$($file.FullName)`"", "-vf", "scale='min(1200,iw)':-1", "-q:v", "5", "`"$tempPath`"" -NoNewWindow -Wait -PassThru
    
    if ($process.ExitCode -eq 0 -and (Test-Path $tempPath)) {
        Move-Item -Path $tempPath -Destination $file.FullName -Force
        Write-Host "Compressed: $($file.Name)"
    } else {
        if (Test-Path $tempPath) { Remove-Item $tempPath }
        Write-Host "Failed to compress: $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "Backing up and compressing videos..."
# Get mp4s from both imgDir and vidDir
$videoFiles = Get-ChildItem -Path $imgDir,$vidDir -Include *.mp4 -Recurse -ErrorAction SilentlyContinue
foreach ($file in $videoFiles) {
    if ($file.FullName -match "Vid_backup" -or $file.FullName -match "img_backup") { continue }

    if ($file.FullName -match "\\img\\") {
        $backupPath = Join-Path $imgBackup $file.Name
    } else {
        $backupPath = Join-Path $vidBackup $file.Name
    }

    if (-not (Test-Path $backupPath)) {
        Copy-Item -Path $file.FullName -Destination $backupPath
    }

    $tempPath = $file.FullName + ".temp.mp4"
    # Hyper compress video: 720p max, crf 28, preset fast
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList "-y", "-i", "`"$($file.FullName)`"", "-vf", "scale='min(1280,iw)':-2", "-vcodec", "libx264", "-crf", "30", "-preset", "faster", "-c:a", "aac", "-b:a", "96k", "`"$tempPath`"" -NoNewWindow -Wait -PassThru
    
    if ($process.ExitCode -eq 0 -and (Test-Path $tempPath)) {
        Move-Item -Path $tempPath -Destination $file.FullName -Force
        Write-Host "Compressed: $($file.Name)"
    } else {
        if (Test-Path $tempPath) { Remove-Item $tempPath }
        Write-Host "Failed to compress: $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "Compression complete!"
