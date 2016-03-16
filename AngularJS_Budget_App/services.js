// SERVICES

budgetApp.service('financialService', function() {
    
    this.totalMoney = 0;
    this.profit = 0;
    this.income = 0;
    this.expenses = 0;
});
budgetApp.service('budgetService', function() {
    
    this.initIncomeList = function() {
        if(localStorage.getItem("incomeList")){
            this.incomeList = localStorage.getItem("incomeList");
        }
        else {
            this.incomeList = [];
        }
    }
    this.initExpenseList = function() {
        if(localStorage.getItem("expenseList")){
            this.expenseList = localStorage.getItem("expenseList");
        }
        else {
            this.expenseList = [];
        }
    }
    
    this.getIncomeList = function() {
        return this.incomeList;
    }
    this.getExpenseList = function() {
        return this.expenseList;
    }
});