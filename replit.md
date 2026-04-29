# REPHNEWS

## Overview
A static news website (REPHNEWS - Philippine news site) built with plain HTML, Tailwind CSS (via CDN), and vanilla JavaScript.

## Project Structure
- `index.html` — main page
- `css/styles.css` — custom styles
- `js/main.js` — vanilla JavaScript
- `assets/images/` — article images
- `assets/ads/` — ad banner assets
- `favicon.ico` — site favicon

## Development
The site is served as static files via Python's built-in HTTP server on port 5000.

Workflow: `Start application` runs `python3 -m http.server 5000 --bind 0.0.0.0`.

## Deployment
Configured as a static deployment serving from the project root.
