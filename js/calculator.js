document.getElementById('btn-calculator').addEventListener('click', function () {
    const income = getInputFieldValue('income-field');
    const food = getInputFieldValue('food-field');
    const rent = getInputFieldValue('rent-field');
    const clothes = getInputFieldValue('clothes-field');

    // validation
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert('please provide valid numbers');
        return;
    }
    // calculation expense
    const totalExpense = getInputForCalculation(food, rent, clothes);

    // get expense and set
    const expenseElement = document.getElementById('expense-element');
    expenseElement.innerText = totalExpense;

    // get balance calculate and set
    const balance = document.getElementById('balance-element');
    const newBalance = income - totalExpense;
    balance.innerText = newBalance;

    // percentage calculation and eventlistener 
    document.getElementById('btn-save').addEventListener('click', function () {
        const save = getInputFieldValue('save-field');

        // validation
        if (isNaN(save)) {
            alert('Please provide valid number');
            return;
        }

        // calculation save and remaining balance
        const saveAmount = (totalExpense / 100) * save;
        const remainingBalance = totalExpense - saveAmount;

        // get and set save and remaining balance
        const saveAmountFinal = document.getElementById('saveAmountElement');
        const remainingBalanceFinal = document.getElementById('remainingBalanceElement');

        saveAmountFinal.innerText = saveAmount.toFixed(2);
        remainingBalanceFinal.innerText = remainingBalance.toFixed(2);

    })
})
