# HTML Colour App

This is version 2.0 of a practice project from [Dave Gray's React Tutorials](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp).

## MVP

The purpose was to practice React techniques learned from the previous 9 videos in the playlist, including:

- Function Components
- CSS Styles
- useState
- Pros
- Controlled Inputs

Users would be able to enter a HTML color name in the input field, then the color would display in the box with the color name.

![screenshots from the tutorial showing initial load & html color entered](./screenshots/tutorial-screenshots.png)

## Version 2.0

I had fun coding the first version, so I played around an eventually broke it. 😆 I wanted to display a gradient in the box when the page initially loaded.

Over three weeks had passed when I began initializing React apps with Vite and Yarn, so I decided to give it another go! I rewatched video 10 and found I way to add the gradient!

## Obstacles I Overcame...

1. I noticed I could simply include a gradient image in the **ternary operation**. This paragraph checks if there is a `colorValue`, if there is it displays it's text, or else it will display the image.

![<p>{colorValue ? colorValue : <img src={BaseImg} alt="colourful gradients" width={300} height={300} />}</p>](./screenshots/code-gradient.png)

2. When the app was displayed in `prefers-color-scheme: dark`, lighter colors were a bit _wonky_ when displayed. Like `yellow` became a muddy brown. After some playing around, I came to this solution:

![body {color-scheme:dark}](./screenshots/code-color-scheme.png)
