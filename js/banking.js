

function getInputValue(inputId, depositId, balanceId, callStatus) {
    //get input value
    const inputValue = document.getElementById(inputId);
    let updateAmountValue = parseFloat(inputValue.value);

    //update value
    const amountValue = document.getElementById(depositId);
    let currentAmount = parseFloat(amountValue.innerText);

    //Update amount value
    amountValue.innerText = updateAmountValue + currentAmount;

    //clear field
    inputValue.value = '';
    
    const balanceStatus = document.getElementById(balanceId);

    if (callStatus == 1)
        balanceStatus.innerText = parseFloat(balanceStatus.innerText) + updateAmountValue;
    else
        balanceStatus.innerText = parseFloat(balanceStatus.innerText) - updateAmountValue;



}


//deposit Button
document.getElementById('deposit-btn').addEventListener('click', function () {
   
    //Get Deposit amount
     getInputValue('deposit-amount', 'deposit-status' , 'balance-status', 1);
    
});


//Withdraw Button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //Get Withdraw Status
    getInputValue('withdraw-amount', 'withdraw-status', 'balance-status', 2);

    
});