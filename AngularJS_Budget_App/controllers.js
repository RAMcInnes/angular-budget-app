// CONTROLLERS

budgetApp.controller('overviewController', ['$scope',"financialService","budgetService", function($scope,financialService,budgetService) {
    // Header
    $scope.username = "Robert McInnes";
    $scope.currentDate = new Date();
    $scope.currentDate = $scope.currentDate.toDateString();
    $scope.currentMonth = new Date();
    $scope.currentMonth = getMonth($scope.currentMonth.getMonth());
    
    // Either "Income" or "Expense"
    $scope.budgetBeingViewed = "";
    
    // The current Budget List being shown
    // Either "incomeList" or "expenseList"
    $scope.shownList = [];
    // Initalize incomeList and expenseList
    budgetService.initIncomeList();
    budgetService.initExpenseList();
    
    // Ensures only 1 item can be added at a time
    $scope.addingItem = false;
    // The Item's Name and Value
    $scope.budgetInputName = "";
    $scope.budgetInputValue = "";
    
    // Calculated Values
    $scope.totalMoney = financialService.totalMoney;   
    $scope.profit = financialService.profit;
    $scope.income = financialService.income;
    $scope.expenses = financialService.expenses;
    

    /* Shows the Input Item Row that allows users to add a new item
     * to either the "Income" or "Expense" list
     */
    $scope.showBudgetRow = function(type) {
        if($scope.addingItem) {
            return;
        }
        // Hides the Input Div
        // I don't like using jQuery here. There is probably a better way
        $("#budgetInputDiv").removeClass("hidden");
        
        // Ensures only 1 item can be added at a time
        $scope.addingItem = true;
        
        // Resets which list is being shown each time the Button is clicked
        $scope.shownList = [];
        // Resets the Input Boxes each time the Button is clicked
        $scope.budgetInputName = "";
        $scope.budgetInputValue = "";
        
        // Depending on which button is pressed ("Income" or "Expense),
        // sets the current "shownList" to the appropriate list
        if(type === "income"){
            $scope.showIncome();
        }
        else if(type === "expense"){
            $scope.showExpense();
        }
        
        /* 
         *  Recalculate profit and totalMoney
         */
    }
    
    /* Displays "incomeList" within the display area (well) */
    $scope.showIncome = function() {
        $scope.budgetBeingViewed = "Income";
        
        $scope.shownList = budgetService.getIncomeList();;          
    }
    
    /* Displays "expenseList" within the display area (well) */
    $scope.showExpense = function() {
        $scope.budgetBeingViewed = "Expense";
        
        $scope.shownList = budgetService.getExpenseList();
    }
    
    /* Adds the contents of the Input Row to the appropriate list */
    $scope.addItem = function(){
        $("#budgetInputDiv").addClass("hidden");
//        $(".shownListDiv").empty();
        $scope.addingItem = false;
        
        // Don't allow for empty Item Name
        if($scope.budgetInputName === "") {
            // Animate input bar to wiggle
            return;
        }
        // Don't allow for empty Item Value
        if($scope.budgetInputValue === "") {
            // Animate input bar to wiggle
            return;
        }
        
        // Create a new Object with the Item Name and Item Value
        var newItem = {
            name: $scope.budgetInputName,
            value: $scope.budgetInputValue,
            date: (new Date).toDateString()
        };
        
        // Add Object to appropriate list
        if($scope.budgetBeingViewed === "Income") {
            budgetService.incomeList.push(newItem);
        }
        else if($scope.budgetBeingViewed === "Expense") {
            budgetService.expenseList.push(newItem); 
        }
        
        localStorage.setItem("incomeList", budgetService.incomeList);
        localStorage.setItem("expenseList", budgetService.expenseList);
        
        // Resets the Input Boxes after Item is added
        $scope.budgetInputName = "";
        $scope.budgetInputValue = "";
    }
    
    /* Removes the Input Row */
    $scope.cancelItem = function(){
        $("#budgetInputDiv").addClass("hidden");
//        $(".shownListDiv").empty();
        $scope.addingItem = false;
        
        $scope.budgetInputName = "";
        $scope.budgetInputValue = "";
    }
    
}]);

var getMonth = function(month){
    switch(month){
        case 0: return "Jan";
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 7: return "Aug";
        case 8: return "Sep";
        case 9: return "Oct";
        case 10: return "Nov";
        case 11: return "Dec";
    }    
}


/* 
 * Commenting these out until I get "overviewController" done

budgetApp.controller('transactionsController', ['$scope',"budgetService", function($scope,budgetService) {
                                         
 
}]);
budgetApp.controller('analysisController', ['$scope',"financialService","budgetService", function($scope,financialService,budgetService) {
                                         

}]);
budgetApp.controller('settingsController', ['$scope',"financialService", function($scope,financialService) {
                                         

}]);

*/
