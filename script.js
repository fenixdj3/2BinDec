const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('decimalOutput');
const convertBtn = document.getElementById('convertBtn');
const errorMessage = document.getElementById('errorMessage');
const charCount = document.querySelector('.char-count');

// Validate binary input - only 0s and 1s allowed
function isValidBinary(str) {
    return /^[01]+$/.test(str);
}

// Convert binary string to decimal using parseInt (single mathematical function)
function binaryToDecimal(binaryStr) {
    return parseInt(binaryStr, 2);
}

// Update character count
binaryInput.addEventListener('input', function() {
    const length = this.value.length;
    charCount.textContent = `${length}/8`;
    
    // Clear error when user starts typing
    if (errorMessage.textContent) {
        errorMessage.textContent = '';
        this.classList.remove('error');
    }
});

// Convert button click handler
convertBtn.addEventListener('click', function() {
    const binaryValue = binaryInput.value.trim();
    
    // Check if input is empty
    if (binaryValue === '') {
        showError('Please enter a binary number');
        return;
    }
    
    // Check if input exceeds 8 digits
    if (binaryValue.length > 8) {
        showError('Binary number cannot exceed 8 digits');
        return;
    }
    
    // Check if input contains only 0s and 1s
    if (!isValidBinary(binaryValue)) {
        showError('Only 0s and 1s are allowed');
        return;
    }
    
    // Convert and display result
    const decimalValue = binaryToDecimal(binaryValue);
    decimalOutput.textContent = decimalValue;
    
    // Add animation to output
    decimalOutput.style.animation = 'none';
    decimalOutput.offsetHeight; // Trigger reflow
    decimalOutput.style.animation = 'fadeIn 0.3s ease-in';
});

// Allow Enter key to trigger conversion
binaryInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertBtn.click();
    }
});

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    binaryInput.classList.add('error');
    decimalOutput.textContent = '0';
    
    // Remove error class after animation
    setTimeout(() => {
        binaryInput.classList.remove('error');
    }, 500);
}
