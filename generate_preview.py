import glob
import os

html_content = """
<!DOCTYPE html>
<html>
<head>
    <title>Photo Preview</title>
    <style>
        body { font-family: sans-serif; background: #111; color: white; }
        .gallery { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; }
        .item { text-align: center; background: #222; padding: 10px; border-radius: 8px; width: 300px; }
        .item img, .item video { max-width: 100%; max-height: 300px; object-fit: contain; }
        .name { margin-top: 10px; font-weight: bold; font-size: 1.2em; }
    </style>
</head>
<body>
    <h1>Photo Preview</h1>
    <p>Please look at the photos below and tell me the new names of the photos you want to use!</p>
    <div class="gallery">
"""

files = glob.glob("assets/img/*.*")
# sort them nicely
files.sort(key=lambda x: int(''.join(filter(str.isdigit, os.path.basename(x)))) if any(c.isdigit() for c in os.path.basename(x)) else 0)

for f in files:
    filename = os.path.basename(f)
    ext = filename.split('.')[-1].lower()
    html_content += f'        <div class="item">\n'
    if ext in ['mp4', 'webm']:
        html_content += f'            <video src="assets/img/{filename}" controls></video>\n'
    else:
        html_content += f'            <img src="assets/img/{filename}" alt="{filename}">\n'
    html_content += f'            <div class="name">{filename}</div>\n'
    html_content += f'        </div>\n'

html_content += """
    </div>
</body>
</html>
"""

with open("preview.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("preview.html created successfully.")
