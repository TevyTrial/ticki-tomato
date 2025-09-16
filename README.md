# Ticki Tomato

A simple Pomodoro timer desktop app built with React and Electron.

![screenshot]([./assets/screenshot.png]([https://github.com/TevyTrial/ticki-tomato/issues/1#issue-3422713682](https://private-user-images.githubusercontent.com/188253644/490117916-d86e19c9-429a-47ac-bac1-1ca854601cf0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgwMzU5MTIsIm5iZiI6MTc1ODAzNTYxMiwicGF0aCI6Ii8xODgyNTM2NDQvNDkwMTE3OTE2LWQ4NmUxOWM5LTQyOWEtNDdhYy1iYWMxLTFjYTg1NDYwMWNmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxNlQxNTEzMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03Mzk5YmNjOWE0Nzg3NmFlNTNkMTlkMzgzYjdlYTJlYTUzY2Y0Yjg3YTI5NzFmZWYzNGFmNzM5MWQzYzhmODc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ffziB-1eJ0XDzfwY--y_o9XLXRvTNa3Ym8mgHhe70xE))) 
## Features

- Pomodoro timer with work and break modes
- Animated encouragement messages
- Play, reset, minimize, and close controls
- Fun GIFs and sound effects
- Cross-platform (Windows, macOS, Linux)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ticki-tomato.git
   cd ticki-tomato
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode (browser):**
   ```bash
   npm start
   ```

4. **Run as an Electron app (development):**
   ```bash
   npm run build
   # Copy electron.js and preload.js to build/ if needed
   npx electron .
   ```

5. **Build the desktop app (Windows):**
   ```bash
   npm run build
   # Copy electron.js and preload.js to build/ if needed
   npx electron-builder --win
   ```
   The packaged app will be in the `dist/win-unpacked` folder.



