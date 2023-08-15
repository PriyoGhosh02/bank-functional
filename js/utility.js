function getValueInputField(inputValue) {
    const depositField = document.getElementById(inputValue);
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    depositField.value = '';
    return newDepositAmmount;
}

function getInnerTextField(innerText) {
    const blanceTotlaElement = document.getElementById(innerText);
    const BlanceTotalString = blanceTotlaElement.innerText;
    const BlanceTotal = parseFloat(BlanceTotalString);
    return BlanceTotal;
}

function setTextElement(elementId, elementValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = elementValue;
}