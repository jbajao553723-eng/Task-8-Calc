const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    // Prevent double operators
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    display.value += value;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 1200);
    }
}


