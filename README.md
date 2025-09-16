# Ticki Tomato

A simple Pomodoro timer desktop app built with React and Electron.

![screenshot]([./assets/screenshot.png](https://github.com/TevyTrial/ticki-tomato/issues/1#issue-3422713682)) 
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


