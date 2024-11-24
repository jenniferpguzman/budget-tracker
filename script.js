//budgettracker class
class BudgetTracker{
    constructor(){
        this.totalIncome = 0;
        this.totalExpenses = 0;
    }
    //method to add income
    addIncome(description,amount) {
        if (amount > 0){
            this.totalIncome += amount;
            this.updateSummary();
// adding income to a list
            const incomeList = document.getElementById("income-list");
            const incomeItem = document.createElement("div");
            incomeItem.textContent = `${description}: $${amount}`;
            incomeList.appendChild(incomeItem);
        }
    }
    //method to add expenses
    addExpenses(description, amount){
        if (amount > 0){
            this.totalExpenses += amount;
            this.updateSummary();
// adding expenses to a list
            const expensesList = document.getElementById("expenses-list");
            const expensesItem = document.createElement("div");
            expensesItem.textContent = `${description}: $${amount}`;
            expensesList.appendChild(expensesItem);
        }
    }
    //method to add up summary with balance
    updateSummary(){
        const balance = this.totalIncome - this.totalExpenses;
        document.getElementById("total-income").textContent = this.totalIncome;
        document.getElementById("total-expenses").textContent = this.totalExpenses;
        document.getElementById("balance").textContent = balance;
    }
    //method clearing values
    clearAll(){
        this.totalIncome = 0;
        this.totalExpenses = 0;
        this.updateSummary();
//clearing income & expenses list
        document.getElementById("income-list").innerHTML = "";
        document.getElementById("expenses-list").innerHTML = "";
    }
}
//initializing an instance of budget tracker
const budgetTracker = new BudgetTracker();
//event listener adding income
document.getElementById("add-income-btn").addEventListener("click", () =>{
    const incomeDescription = document.getElementById("income-description").value;
    const incomeAmount = parseFloat(document.getElementById("income-amount").value);
//income method being called
    if(incomeDescription && !isNaN(incomeAmount)){
        budgetTracker.addIncome(incomeDescription, incomeAmount);

        document.getElementById("income-description").value = "";
        document.getElementById("income-amount").value = "";
    }
});
//event listener adding expenses
document.getElementById("add-expenses-btn").addEventListener("click", () =>{
    const expensesDescription = document.getElementById("expenses-description").value;
    const expensesAmount = parseFloat(document.getElementById("expenses-amount").value);
//expenses method being called
    if (expensesDescription && !isNaN(expensesAmount)){
        budgetTracker.addExpenses(expensesDescription, expensesAmount);

        document.getElementById("expenses-description").value = "";
        document.getElementById("expenses-amount").value = "";
    }
});
//event listener clearing values
document.getElementById("clear-button").addEventListener("click", () =>{
    budgetTracker.clearAll();
});