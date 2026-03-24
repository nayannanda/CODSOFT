const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Update display
function updateDisplay() {
    display.innerText = currentInput || "";
}

// Check operator
function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

// Button Click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            currentInput = "";
        }
        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
        }
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        }
        else {
            const lastChar = currentInput.slice(-1);

            // Prevent double operators
            if (isOperator(value) && isOperator(lastChar)) return;

            currentInput += value;
        }

        updateDisplay();
    });
});
