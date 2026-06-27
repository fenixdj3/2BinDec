# Bin2Dec - Binary to Decimal Converter

A feature-rich web application for converting between binary and decimal number systems with educational features.

## 🚀 Live Demo

[View Live Demo](https://fenixdj3.github.io/2BinDec/)

## Features

### Core Functionality
- **Bidirectional Conversion**: Convert binary to decimal and decimal to binary
- **Variable Length Input**: Support for binary numbers of any length
- **Real-time Preview**: See decimal equivalent as you type
- **Input Validation**: Instant feedback for invalid input

### Educational Features
- **Bit Visualization**: Visual representation of each bit with its weight (2⁰, 2¹, 2²...)
- **Step-by-step Explanation**: Detailed breakdown of how conversion works
- **Reference Table**: Quick lookup for binary-decimal equivalents (0-15)
- **Quiz Mode**: Practice your skills with random conversion questions

### User Experience
- **Dark/Light Theme**: Toggle between themes with preference saved
- **Multi-language Support**: English and Russian (EN/RU)
- **Conversion History**: Last 10 conversions saved in localStorage
- **Copy to Clipboard**: One-click copy of results
- **Keyboard Shortcuts**: Ctrl+Enter to convert, Esc to clear
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations

### Technical Features
- **PWA Support**: Install as a progressive web app for offline use
- **Accessibility**: ARIA attributes for screen reader support
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## How to Use

### Binary to Decimal
1. Open `index.html` in your web browser
2. Enter a binary number (e.g., `10101010`) in the input field
3. Click the "Convert" button or press Ctrl+Enter
4. View the decimal equivalent with step-by-step explanation

### Decimal to Binary
1. Click the "Decimal → Binary" tab
2. Enter a decimal number (e.g., `42`)
3. Click "Convert" or press Ctrl+Enter
4. View the binary equivalent

### Quiz Mode
1. Click the "Quiz Mode" tab
2. Answer the conversion question
3. Click "Check Answer" to see if you're correct
4. Track your score across multiple questions

## Keyboard Shortcuts

- **Ctrl+Enter**: Convert current input
- **Esc**: Clear current input
- **Enter**: Convert (in input fields)

## Constraints Implemented

- ✅ No arrays used to contain binary digits in conversion logic
- ✅ Single mathematical function (`parseInt`) for binary-to-decimal conversion
- ✅ Input validation for 0s and 1s only
- ✅ Variable length input support (bonus feature)

## Project Structure

```
2BinDec/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Conversion logic and interactivity
├── manifest.json       # PWA manifest
├── service-worker.js   # Service worker for offline support
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Technical Details

- **Pure HTML, CSS, and JavaScript** - No frameworks or dependencies
- **Responsive Design** - Mobile-first approach with CSS variables for theming
- **Input Validation** - Regex-based validation for binary digits
- **Conversion Algorithm** - Uses `parseInt(binaryString, 2)` and `number.toString(2)`
- **Local Storage** - Persists theme, language, and conversion history
- **Service Worker** - Caches assets for offline use

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## PWA Installation

To install as a Progressive Web App:
1. Open the application in a supported browser
2. Click the install icon in the address bar
3. Follow the browser's prompts to install

## License

This project is open source and available for educational purposes.
