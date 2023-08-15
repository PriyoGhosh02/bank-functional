document.getElementById('btn_withdraw').addEventListener('click', function () {

    const inputWithdrawAmmount = getValueInputField('withdraw_field');
    if (isNaN(inputWithdrawAmmount)) {
        alert('Input Valid Number!!!!');
    } else {

        // update balance window
        const previousBlanceTotal = getInnerTextField('blance_total');
        if (previousBlanceTotal < inputWithdrawAmmount) {
            alert('You have not Sufficient Balance!!!!!');
        } else {
            const totalBalance = previousBlanceTotal - inputWithdrawAmmount;
            setTextElement('blance_total', totalBalance);
            // update withdraw window
            const previousWithdrawAmmount = getInnerTextField('withdraw_total');
            const totalWithdraw = inputWithdrawAmmount + previousWithdrawAmmount;
            setTextElement('withdraw_total', totalWithdraw);
        }
    }
})