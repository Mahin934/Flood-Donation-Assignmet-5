
// For Input Values to Number Convert
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

// for Texts to Number Convert
function getInnerText(id) {
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;
}