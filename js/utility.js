// get all input value from input field
function getInputFieldValue(InputId) {
    const inputFieldElement = document.getElementById(InputId);
    const inputValue = parseFloat(inputFieldElement.value);
    return inputValue;
}

// calculation
function getInputForCalculation(input1, input2, input3) {
    const total = input1 + input2 + input3;
    return total;
}