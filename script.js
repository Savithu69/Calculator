function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    const display = document.getElementById('display');
    if (display.value !== 'Error') {
        display.value += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
        display.classList.add('animate-border');
        setTimeout(() => {
            display.classList.remove('animate-border');
        }, 1000);
    }
    catch (error) {
        display.value = 'Error';
        display.disabled = true;
    }
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clearError() {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
        display.disabled = false;
    }
}

