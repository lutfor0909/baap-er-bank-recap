//step 01:
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 02:
        const depositField = document.getElementById('diposit-field');
        const newDepositAmountString = depositField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);
    //step 03:
        depositField.value ='';
    //step 04:
        const depositTotalElement = document.getElementById('deposit-total');
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step 05:
        const newDepositTotal = previousDepositTotal + newDepositAmount;
        depositTotalElement.innerText = newDepositTotal;
    
    // step 06:
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // step 07:
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    
    balanceTotalElement.innerText = newBalanceTotal;
    
    })