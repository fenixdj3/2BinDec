// DOM Elements
const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('decimalOutput');
const convertBtn = document.getElementById('convertBtn');
const errorMessage = document.getElementById('errorMessage');
const charCount = document.getElementById('charCount');
const realTimePreview = document.getElementById('realTimePreview');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const modeToggle = document.getElementById('modeToggle');
const bitVisualization = document.getElementById('bitVisualization');
const explanationContent = document.getElementById('explanationContent');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const toggleReference = document.getElementById('toggleReference');
const referenceTable = document.getElementById('referenceTable');
const referenceBody = document.getElementById('referenceBody');

// Decimal to Binary elements
const decimalInput = document.getElementById('decimalInput');
const decimalErrorMessage = document.getElementById('decimalErrorMessage');
const convertDecimalBtn = document.getElementById('convertDecimalBtn');
const binaryOutput = document.getElementById('binaryOutput');
const clearDecimalBtn = document.getElementById('clearDecimalBtn');
const copyBinaryBtn = document.getElementById('copyBinaryBtn');

// Quiz elements
const quizInput = document.getElementById('quizInput');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const quizResult = document.getElementById('quizResult');
const quizQuestion = document.getElementById('quizQuestion');
const scoreValue = document.getElementById('scoreValue');
const totalQuestions = document.getElementById('totalQuestions');
const clearQuizBtn = document.getElementById('clearQuizBtn');

// Mode tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const conversionModes = document.querySelectorAll('.conversion-mode');

// State
let currentLang = 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let conversionHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];
let quizScore = 0;
let quizTotal = 0;
let currentQuizAnswer = '';
let quizModeType = 'binaryToDecimal'; // or 'decimalToBinary'

// Translations
const translations = {
    en: {
        title: 'Bin2Dec',
        subtitle: 'Binary to Decimal Converter',
        binaryToDecimal: 'Binary → Decimal',
        decimalToBinary: 'Decimal → Binary',
        quizMode: 'Quiz Mode',
        enterBinary: 'Enter binary number:',
        enterDecimal: 'Enter decimal number:',
        decimalEquivalent: 'Decimal equivalent:',
        binaryEquivalent: 'Binary equivalent:',
        convert: 'Convert',
        checkAnswer: 'Check Answer',
        nextQuestion: 'Next Question',
        history: 'Conversion History',
        clearHistory: 'Clear History',
        showReference: 'Show Reference Table',
        hideReference: 'Hide Reference Table',
        referenceTitle: 'Binary-Decimal Reference',
        binary: 'Binary',
        decimal: 'Decimal',
        stepByStep: 'Step-by-step explanation:',
        howItWorks: '<strong>How it works:</strong> Each binary digit represents a power of 2, starting from the rightmost digit (2⁰).',
        shortcuts: '<strong>Shortcuts:</strong> Ctrl+Enter to convert, Esc to clear',
        quizTitle: 'Test your knowledge!',
        score: 'Score:',
        correct: 'Correct! 🎉',
        incorrect: 'Incorrect. Try again!',
        emptyInput: 'Please enter a binary number',
        invalidBinary: 'Only 0s and 1s are allowed',
        emptyDecimal: 'Please enter a decimal number',
        invalidDecimal: 'Please enter a valid positive number',
        copied: 'Copied to clipboard!'
    },
    ru: {
        title: 'Bin2Dec',
        subtitle: 'Конвертер двоичных чисел',
        binaryToDecimal: 'Двоичное → Десятичное',
        decimalToBinary: 'Десятичное → Двоичное',
        quizMode: 'Режим викторины',
        enterBinary: 'Введите двоичное число:',
        enterDecimal: 'Введите десятичное число:',
        decimalEquivalent: 'Десятичный эквивалент:',
        binaryEquivalent: 'Двоичный эквивалент:',
        convert: 'Конвертировать',
        checkAnswer: 'Проверить',
        nextQuestion: 'Следующий вопрос',
        history: 'История конвертаций',
        clearHistory: 'Очистить историю',
        showReference: 'Показать таблицу',
        hideReference: 'Скрыть таблицу',
        referenceTitle: 'Справочная таблица',
        binary: 'Двоичное',
        decimal: 'Десятичное',
        stepByStep: 'Пошаговое объяснение:',
        howItWorks: '<strong>Как это работает:</strong> Каждая двоичная цифра представляет степень 2, начиная с правой цифры (2⁰).',
        shortcuts: '<strong>Горячие клавиши:</strong> Ctrl+Enter для конвертации, Esc для очистки',
        quizTitle: 'Проверьте свои знания!',
        score: 'Счёт:',
        correct: 'Правильно! 🎉',
        incorrect: 'Неправильно. Попробуйте снова!',
        emptyInput: 'Пожалуйста, введите двоичное число',
        invalidBinary: 'Разрешены только 0 и 1',
        emptyDecimal: 'Пожалуйста, введите десятичное число',
        invalidDecimal: 'Пожалуйста, введите положительное число',
        copied: 'Скопировано в буфер обмена!'
    }
};

// Initialize
function init() {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    renderHistory();
    populateReferenceTable();
    generateQuizQuestion();
}

// Theme Toggle
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
});

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('.icon').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.querySelector('.icon').textContent = '🌙';
    }
}

// Language Toggle
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Mode Tabs
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        conversionModes.forEach(m => m.classList.add('hidden'));
        document.getElementById(`${mode}Mode`).classList.remove('hidden');
    });
});

// Mode Toggle (cycles through modes)
modeToggle.addEventListener('click', () => {
    const activeTab = document.querySelector('.tab-btn.active');
    const modes = ['binary', 'decimal', 'quiz'];
    const currentIndex = modes.indexOf(activeTab.getAttribute('data-mode'));
    const nextIndex = (currentIndex + 1) % modes.length;
    tabBtns[nextIndex].click();
});

// Binary to Decimal Conversion
function isValidBinary(str) {
    return /^[01]+$/.test(str);
}

function binaryToDecimal(binaryStr) {
    return parseInt(binaryStr, 2);
}

function decimalToBinary(decimalNum) {
    return decimalNum.toString(2);
}

binaryInput.addEventListener('input', function() {
    const length = this.value.length;
    charCount.textContent = length;
    
    // Real-time preview
    if (isValidBinary(this.value) && this.value !== '') {
        const decimal = binaryToDecimal(this.value);
        realTimePreview.textContent = `= ${decimal}`;
    } else {
        realTimePreview.textContent = '';
    }
    
    // Clear error
    if (errorMessage.textContent) {
        errorMessage.textContent = '';
        this.classList.remove('error');
    }
    
    // Update bit visualization
    updateBitVisualization(this.value);
});

function updateBitVisualization(binaryStr) {
    if (!binaryStr || !isValidBinary(binaryStr)) {
        bitVisualization.innerHTML = '';
        return;
    }
    
    bitVisualization.innerHTML = '';
    const reversed = binaryStr.split('').reverse();
    
    reversed.forEach((bit, index) => {
        const bitDiv = document.createElement('div');
        bitDiv.className = `bit ${bit === '1' ? 'one' : 'zero'}`;
        bitDiv.innerHTML = `
            <span>${bit}</span>
            <span class="bit-weight">2${toSuperscript(index)}</span>
        `;
        bitVisualization.appendChild(bitDiv);
    });
}

function toSuperscript(num) {
    const superscripts = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
    return num.toString().split('').map(d => superscripts[parseInt(d)]).join('');
}

function showExplanation(binaryStr, decimalValue) {
    if (!binaryStr) {
        explanationContent.innerHTML = '';
        return;
    }
    
    const reversed = binaryStr.split('').reverse();
    let html = '';
    
    reversed.forEach((bit, index) => {
        const power = Math.pow(2, index);
        const contribution = bit === '1' ? power : 0;
        html += `
            <div class="explanation-step">
                ${bit} × 2${toSuperscript(index)} = ${bit} × ${power} = ${contribution}
            </div>
        `;
    });
    
    html += `<div class="explanation-step"><strong>Total: ${decimalValue}</strong></div>`;
    explanationContent.innerHTML = html;
}

convertBtn.addEventListener('click', () => {
    const binaryValue = binaryInput.value.trim();
    
    if (binaryValue === '') {
        showError(translations[currentLang].emptyInput);
        return;
    }
    
    if (!isValidBinary(binaryValue)) {
        showError(translations[currentLang].invalidBinary);
        return;
    }
    
    const decimalValue = binaryToDecimal(binaryValue);
    decimalOutput.textContent = decimalValue;
    
    // Update visualization and explanation
    updateBitVisualization(binaryValue);
    showExplanation(binaryValue, decimalValue);
    
    // Add to history
    addToHistory(binaryValue, decimalValue, 'binaryToDecimal');
    
    // Animation
    decimalOutput.style.animation = 'none';
    decimalOutput.offsetHeight;
    decimalOutput.style.animation = 'fadeIn 0.3s ease-in';
});

function showError(message) {
    errorMessage.textContent = message;
    binaryInput.classList.add('error');
    decimalOutput.textContent = '0';
    
    setTimeout(() => {
        binaryInput.classList.remove('error');
    }, 500);
}

// Clear button
clearBtn.addEventListener('click', () => {
    binaryInput.value = '';
    charCount.textContent = '0';
    realTimePreview.textContent = '';
    decimalOutput.textContent = '0';
    errorMessage.textContent = '';
    bitVisualization.innerHTML = '';
    explanationContent.innerHTML = '';
    binaryInput.focus();
});

// Copy to clipboard
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(decimalOutput.textContent).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 1000);
    });
});

// Decimal to Binary Conversion
decimalInput.addEventListener('input', function() {
    if (decimalErrorMessage.textContent) {
        decimalErrorMessage.textContent = '';
        this.classList.remove('error');
    }
});

convertDecimalBtn.addEventListener('click', () => {
    const decimalValue = decimalInput.value.trim();
    
    if (decimalValue === '') {
        showDecimalError(translations[currentLang].emptyDecimal);
        return;
    }
    
    const num = parseInt(decimalValue);
    if (isNaN(num) || num < 0) {
        showDecimalError(translations[currentLang].invalidDecimal);
        return;
    }
    
    const binaryValue = decimalToBinary(num);
    binaryOutput.textContent = binaryValue;
    
    // Add to history
    addToHistory(decimalValue, binaryValue, 'decimalToBinary');
    
    // Animation
    binaryOutput.style.animation = 'none';
    binaryOutput.offsetHeight;
    binaryOutput.style.animation = 'fadeIn 0.3s ease-in';
});

function showDecimalError(message) {
    decimalErrorMessage.textContent = message;
    decimalInput.classList.add('error');
    binaryOutput.textContent = '0';
    
    setTimeout(() => {
        decimalInput.classList.remove('error');
    }, 500);
}

clearDecimalBtn.addEventListener('click', () => {
    decimalInput.value = '';
    binaryOutput.textContent = '0';
    decimalErrorMessage.textContent = '';
    decimalInput.focus();
});

copyBinaryBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(binaryOutput.textContent).then(() => {
        const originalText = copyBinaryBtn.textContent;
        copyBinaryBtn.textContent = '✓';
        setTimeout(() => {
            copyBinaryBtn.textContent = originalText;
        }, 1000);
    });
});

// History
function addToHistory(input, output, type) {
    const entry = {
        input,
        output,
        type,
        timestamp: Date.now()
    };
    
    conversionHistory.unshift(entry);
    if (conversionHistory.length > 10) {
        conversionHistory.pop();
    }
    
    localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    
    conversionHistory.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'history-item';
        
        if (entry.type === 'binaryToDecimal') {
            div.innerHTML = `
                <span>${entry.input}</span>
                <span>→</span>
                <span>${entry.output}</span>
            `;
        } else {
            div.innerHTML = `
                <span>${entry.input}</span>
                <span>→</span>
                <span>${entry.output}</span>
            `;
        }
        
        historyList.appendChild(div);
    });
}

clearHistoryBtn.addEventListener('click', () => {
    conversionHistory = [];
    localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
    renderHistory();
});

// Reference Table
toggleReference.addEventListener('click', () => {
    referenceTable.classList.toggle('hidden');
    const isHidden = referenceTable.classList.contains('hidden');
    toggleReference.textContent = isHidden ? 
        translations[currentLang].showReference : 
        translations[currentLang].hideReference;
});

function populateReferenceTable() {
    referenceBody.innerHTML = '';
    
    for (let i = 0; i <= 15; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i.toString(2).padStart(4, '0')}</td>
            <td>${i}</td>
        `;
        referenceBody.appendChild(row);
    }
}

// Quiz Mode
function generateQuizQuestion() {
    quizModeType = Math.random() > 0.5 ? 'binaryToDecimal' : 'decimalToBinary';
    
    if (quizModeType === 'binaryToDecimal') {
        const decimal = Math.floor(Math.random() * 256);
        currentQuizAnswer = decimal.toString();
        quizQuestion.textContent = `${decimal.toString(2)} = ?`;
    } else {
        const decimal = Math.floor(Math.random() * 256);
        currentQuizAnswer = decimal.toString(2);
        quizQuestion.textContent = `${decimal} = ? (binary)`;
    }
    
    quizInput.value = '';
    quizResult.textContent = '';
    quizResult.className = 'quiz-result';
}

checkAnswerBtn.addEventListener('click', () => {
    const userAnswer = quizInput.value.trim();
    
    if (userAnswer === '') {
        return;
    }
    
    quizTotal++;
    
    if (userAnswer === currentQuizAnswer) {
        quizScore++;
        quizResult.textContent = translations[currentLang].correct;
        quizResult.classList.add('correct');
    } else {
        quizResult.textContent = `${translations[currentLang].incorrect} ${currentQuizAnswer}`;
        quizResult.classList.add('incorrect');
    }
    
    scoreValue.textContent = quizScore;
    totalQuestions.textContent = quizTotal;
});

nextQuestionBtn.addEventListener('click', generateQuizQuestion);

clearQuizBtn.addEventListener('click', () => {
    quizInput.value = '';
    quizInput.focus();
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+Enter to convert
    if (e.ctrlKey && e.key === 'Enter') {
        const activeMode = document.querySelector('.tab-btn.active').getAttribute('data-mode');
        if (activeMode === 'binary') {
            convertBtn.click();
        } else if (activeMode === 'decimal') {
            convertDecimalBtn.click();
        } else if (activeMode === 'quiz') {
            checkAnswerBtn.click();
        }
    }
    
    // Esc to clear
    if (e.key === 'Escape') {
        const activeMode = document.querySelector('.tab-btn.active').getAttribute('data-mode');
        if (activeMode === 'binary') {
            clearBtn.click();
        } else if (activeMode === 'decimal') {
            clearDecimalBtn.click();
        } else if (activeMode === 'quiz') {
            clearQuizBtn.click();
        }
    }
});

// Enter key for inputs
binaryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertBtn.click();
    }
});

decimalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertDecimalBtn.click();
    }
});

quizInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswerBtn.click();
    }
});

// Initialize on load
init();
