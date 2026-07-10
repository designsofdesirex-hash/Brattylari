import os
import subprocess
import glob
try:
    from PIL import Image, ImageFile
    ImageFile.LOAD_TRUNCATED_IMAGES = True
except ImportError:
    print("Pillow not installed.")
    exit(1)

def optimize_images():
    img_dir = r"c:\Users\Nasrallah\Documents\Antigravity\Projects\Websites project\Websites\Brattylari\assets\img"
    print("--- Optimizing Images ---")
    for file in glob.glob(os.path.join(img_dir, "*")):
        ext = file.split('.')[-1].lower()
        if ext in ['jpg', 'jpeg', 'png', 'jfif', 'webp']:
            try:
                img = Image.open(file)
                original_size = os.path.getsize(file)
                temp_file = file + ".temp." + ext
                
                if ext == 'png':
                    img.save(temp_file, optimize=True)
                elif ext in ['jpg', 'jpeg', 'jfif']:
                    if img.mode in ("RGBA", "P"): img = img.convert("RGB")
                    img.save(temp_file, "JPEG", optimize=True, quality=85)
                elif ext == 'webp':
                    img.save(temp_file, "WEBP", quality=85, method=6)
                
                if os.path.exists(temp_file):
                    new_size = os.path.getsize(temp_file)
                    if new_size < original_size:
                        os.replace(temp_file, file)
                        print(f"Optimized {os.path.basename(file)}: {original_size//1024}KB -> {new_size//1024}KB")
                    else:
                        os.remove(temp_file)
                        print(f"Skipped {os.path.basename(file)}: Already optimal.")
            except Exception as e:
                print(f"Error optimizing {os.path.basename(file)}: {e}")

def optimize_videos():
    vid_dir = r"c:\Users\Nasrallah\Documents\Antigravity\Projects\Websites project\Websites\Brattylari\assets\Vid"
    print("\n--- Optimizing Videos ---")
    for file in glob.glob(os.path.join(vid_dir, "*.mp4")):
        original_size = os.path.getsize(file)
        temp_file = file + ".temp.mp4"
        print(f"Processing {os.path.basename(file)} ({original_size//1024//1024}MB)...")
        # Use CRF 24 and slower preset for hyper optimization without visible quality loss
        cmd = [
            'ffmpeg', '-y', '-i', file, 
            '-vcodec', 'libx264', '-crf', '24', '-preset', 'slower', 
            '-acodec', 'aac', '-b:a', '128k', 
            temp_file
        ]
        try:
            subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
            if os.path.exists(temp_file):
                new_size = os.path.getsize(temp_file)
                if new_size < original_size:
                    os.replace(temp_file, file)
                    print(f"Optimized {os.path.basename(file)}: {original_size//1024//1024}MB -> {new_size//1024//1024}MB")
                else:
                    os.remove(temp_file)
                    print(f"Skipped {os.path.basename(file)}: Already optimal.")
        except Exception as e:
            if os.path.exists(temp_file): os.remove(temp_file)
            print(f"Error optimizing {os.path.basename(file)}: {e}")

if __name__ == "__main__":
    optimize_images()
    optimize_videos()
