
// step 01:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step 02:
        const withdrawField = document.getElementById('withdraw-field');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount  = parseFloat(newWithdrawAmountString);
    // step 03:
        withdrawField.value = '';
    // step 04:
        const withdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotalString = withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //step 05:
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = newWithdrawAmount;
    
    // step 06:
        const balanceElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 07:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
    
    })