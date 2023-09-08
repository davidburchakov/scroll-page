# scroll-page
Playing video on scroll

gsap ScrollTrigger version of developedbyed tutorial
https://www.youtube.com/watch?v=wLUJ9VNzZXo&t=12s

As __@anormalking__ pointed out in the comments, it is recommended to change the framerate of videos.

> For anyone having trouble with freezing playback with your own videos: make sure that you divide 1000/the framerate of the video AND have the video with a proper codec, here's a script that may help, you have to have FFmpeg installed, and open your terminal/powershell:

~~~~
ffmpeg -i yourInputVideo.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p theOutputNameOfTheVideo.mp4
~~~~

Install ffmpeg:
~~~~
sudo apt install ffmpeg
~~~~
