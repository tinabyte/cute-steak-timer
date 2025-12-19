# Cute Steak Timer

A charming desktop application to help you cook steaks to perfection. Never over or undercook your steak again!

## Features

- **Steak Doneness Selection** - Choose from four levels:
  - Rare (2 minutes)
  - Medium Rare (4 minutes)
  - Medium (6 minutes)
  - Well Done (3+ minutes)
- **Visual Countdown Timer** - Large, easy-to-read timer display
- **Flip Reminder** - Automatic pause at the halfway point to remind you to flip
- **Animated Frying Pan** - Rotating pan animation while cooking
- **Compact Design** - Small window that stays out of your way

## Tech Stack

| Component | Technology |
|-----------|------------|
| Desktop Framework | Electron |
| Build Tool | Vite |
| Language | JavaScript (ES6+) |
| Styling | CSS3 with animations |

## Project Structure

```
src/
├── index.js       # Electron main process
├── index.html     # UI and application logic
├── index.css      # Styling and animations
├── preload.js     # Electron IPC bridge
└── assets/        # Images and fonts
    ├── *.png      # Steak images, buttons, frying pan
    └── *.ttf      # Custom fonts (VCR OSD Mono, Montserrat)
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cute-steak-timer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

This runs both Vite and Electron concurrently with hot reload enabled.

### Building

Build the project:
```bash
npm run build
```

## How to Use

1. Launch the app and click to start
2. Select your desired steak doneness
3. Place your steak on the pan and let the timer run
4. When prompted, flip your steak
5. Wait for the "Done" notification
6. Enjoy your perfectly cooked steak!

## License

ISC
