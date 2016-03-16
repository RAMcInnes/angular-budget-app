// ROUTES 

budgetApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/overview.html',
        controller: 'overviewController'
    })
    
    .when('/overview', {
        templateUrl: 'pages/overview.html',
        controller: 'overviewController'
    })
    
    .when('/transactions', {
        templateUrl: 'pages/transactions.html'
        //controller: 'transactionsController'
    })
    .when('/analysis', {
        templateUrl: 'pages/analysis.html'
        //controller: 'analysisController'
    })
    .when('/settings', {
        templateUrl: 'pages/settings.html'
        //controller: 'settingsController'
    })
});