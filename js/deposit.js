
document.getElementById('btn_deposit').addEventListener('click', function () {
    // deposit field
    const depositAmmount = getValueInputField('deposit_field');
    if(isNaN(depositAmmount)){
        alert('Input Valid Number!!!!');
    }else{
        const previousDepositAmmount = getInnerTextField('deposit_total');
        // calculate new deposit total
        const totalDeposit = previousDepositAmmount + depositAmmount;
        setTextElement('deposit_total', totalDeposit);
        // balance field
        const previousBlanceTotal=getInnerTextField('blance_total');
        const totalBalance=previousBlanceTotal+depositAmmount;
        setTextElement('blance_total',totalBalance);
    }
   


})