// SERVICES

budgetApp.service('financialService', ['budgetService', function(budgetService) {
    
    this.totalMoney = 0;
    this.profit = 0;
    this.income = 0;
    this.expense = 0;
    
//    this.incomeList = budgetService.incomeList;
    
    // (Re)calculate Total Money
    this.calculateTotalMoney = function() {
        this.totalMoney = this.totalMoney + this.profit;
    }
    // (Re)calculate Profit
    this.calculateProfit = function() {
        this.profit = this.income + this.expense;
    }
    // (Re)calcute Income
    // Add all the "values" in the incomeList
    this.calculateIncome = function() {
        for(var incomeIndex = 0; incomeIndex<budgetService.incomeList.length; incomeIndex++) {
            this.income += budgetService.incomeList[incomeIndex].value;
        }
//        for each (var item in this.incomeList) {
//            this.income += item.value;
//        }
    }
    // (Re)calculate Expense
    // Add all the "values" in the expenseList
    this.calculateExpense = function() {
        for(var expenseIndex = 0; expenseIndex<budgetService.expenseList.length; expenseIndex++) {
            this.expense += budgetService.expenseList[expenseIndex].value;
        }
//        for each (var item in budgetService.expenseList) {
//            this.expense += item.value;
//        }
    }
    
}]);

budgetApp.service('budgetService', function() {
    
    this.incomeList = [];
    this.expenseList = [];
    
    this.initIncomeList = function() {
        if(localStorage.getItem("incomeList")) {
            this.incomeList = localStorage.getItem("incomeList");
        }
        else {
            this.incomeList = [];
        }
    }
    this.initExpenseList = function() {
        if(localStorage.getItem("expenseList")) {
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