# Ticki Tomato

A simple Pomodoro timer desktop app built with React and Electron.

![Image](https://github.com/user-attachments/assets/44d44e35-d40e-455c-871c-9cc987445e24)
![Image](https://github.com/user-attachments/assets/431c192e-0bd3-41d7-b057-9fca446f7116)
![Image](https://github.com/user-attachments/assets/5f1c24ba-fbb2-4412-99da-0df6e151ebfb)
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




