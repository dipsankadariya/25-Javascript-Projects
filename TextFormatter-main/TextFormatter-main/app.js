const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const buttons = document.querySelectorAll('.btn'); 
const clearButton = document.getElementById('clear-btn');

console.log(inputField);
console.log(outputField);
console.log(buttons);

inputField.addEventListener('input', () => {
    outputField.textContent = inputField.value;
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('uppercase')) {
            outputField.textContent = outputField.textContent.toUpperCase();
        } else if (btn.classList.contains('lowercase')) {
            outputField.textContent = outputField.textContent.toLowerCase();
        } else if (btn.classList.contains('capitalize')) {
            outputField.textContent = capitalizeFirstLetter(outputField.textContent);
        } else if (btn.classList.contains('bold')) {
            outputField.style.fontWeight = outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
        } else if (btn.classList.contains('italic')) {
            outputField.style.fontStyle = outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
        } else if (btn.classList.contains('underline')) {
            outputField.style.textDecoration = outputField.style.textDecoration === 'underline' ? 'none' : 'underline';
        }
    });
});

clearButton.addEventListener('click', () => {
    inputField.value = '';
    outputField.textContent = '';
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
