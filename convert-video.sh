ffmpeg -i src/images/sterch.mp4 -c:v libvpx -b:v 1M -c:a libvorbis static/sterch-vp8.webm
ffmpeg -i src/images/sterch.mp4 -c:v libx264 -preset veryslow -crf 22 -c:a aac -b:a 128k static/sterch-h264.mp4
ffmpeg -i src/images/sterch.mp4 -c:v libx265 -preset veryslow -crf 28 -c:a aac -b:a 128k static/sterch-h265.mp4
