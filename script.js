let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
        currentInput = value;
    } else {
        display.innerText += value;
        currentInput += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerText = 'خطأ';
        currentInput = '';
    }
}
