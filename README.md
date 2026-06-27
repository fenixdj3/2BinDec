# Bin2Dec - Binary to Decimal Converter

A simple and elegant web application that converts binary numbers to their decimal equivalents.

## Features

- **Binary Input**: Enter up to 8 binary digits (0s and 1s)
- **Real-time Validation**: Instant feedback for invalid input
- **Decimal Output**: Displays the converted decimal value
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations

## How to Use

1. Open `index.html` in your web browser
2. Enter a binary number (e.g., `10101010`) in the input field
3. Click the "Convert" button or press Enter
4. View the decimal equivalent in the output field

## Constraints Implemented

- ✅ No arrays used to contain binary digits
- ✅ Single mathematical function (`parseInt`) for conversion
- ✅ Input validation for 0s and 1s only
- ✅ Maximum 8 binary digits

## Project Structure

```
2BinDec/
├── index.html    # Main HTML structure
├── style.css     # Styling and responsive design
├── script.js     # Conversion logic and interactivity
└── README.md     # Project documentation
```

## Technical Details

- **Pure HTML, CSS, and JavaScript** - No frameworks or dependencies
- **Responsive Design** - Mobile-first approach with media queries
- **Input Validation** - Regex-based validation for binary digits
- **Conversion Algorithm** - Uses `parseInt(binaryString, 2)` for efficient conversion

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Future Enhancements

- Variable length binary input (bonus feature)
- History of conversions
- Dark mode toggle
- Copy to clipboard functionality

## License

This project is open source and available for educational purposes.
