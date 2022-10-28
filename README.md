# HTML Colour App

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white">
<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=for-the-badge&logo=Yarn&logoColor=white">
</p>

<div align="center"><img src="./screenshots/html-color-app-screenshot.png" alt=""></div>

This is version 2.0 of a practice project from [Dave Gray's React Tutorials](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp).

## MVP

Users enter a HTML color name in the input field to see the colour in the box with the html colour name and hex code.

This project gave me an opportunity to practice React techniques learned from the previous 9 videos in the playlist sans-tutorial, including:

- Function Components
- CSS Styles
- useState
- Props
- Controlled Inputs

![screenshots from the tutorial showing initial load & html color entered](./screenshots/tutorial-screenshots.png)

## Version 2.0

I had fun coding the first version, so I played around an eventually broke it. 😆 I wanted to **display a gradient in the box when the page initially loaded**.

Over three weeks had passed when I began **initializing React apps with Vite and Yarn**, so I decided to give it another go! I rewatched video 10 and found I way to add the gradient!

## Obstacles I Overcame...

1. I noticed I could simply include a gradient image in the **ternary operator**. This paragraph checks if there is a `colorValue`, if there is it displays it's text, or else it will display the gradient image.

![<p>{colorValue ? colorValue : <img src={BaseImg} alt="colourful gradients" width={300} height={300} />}</p>](./screenshots/code-gradient.png)

2. When the app was displayed in `prefers-color-scheme: dark`, lighter colors were a bit _wonky_ when displayed. Like `yellow` became a muddy brown. After some playing around, I came to this solution:

![body {color-scheme:dark}](./screenshots/code-color-scheme.png)
