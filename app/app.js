(function() {

    var app = angular.module('rightmoveApp', []);

    var MainController = function($scope, $http, searchProperties, $location, $anchorScroll, $timeout, smoothScroll, $window) {

    	var onSearchComplete = function(results){
    		$scope.showResults = true; //ng-show listens for this to be true
    		$scope.results = results;

            $timeout(function() {
                var element = document.getElementById('results');
                smoothScroll(element);
            });
    	};

    	var getProperties = function(searchTerm){

            propertyFilters(); //check window size to decide whether to display property filters

    		searchProperties.searchForSale(searchTerm, onSearchComplete);
    	}; 

        var propertyFilters = function() {

            var windowSize = $window.innerWidth;

            if (windowSize > 900) {
                $scope.propertyFilters = true;
            } else {
                $scope.propertyFilters = false;
            };
            
        };


        $scope.propertyFilters = propertyFilters;
    	$scope.submitSearch = getProperties;
    	$scope.results = [];
        $scope.showResults = false; //attach ng-show to this because leaving $scope.results as FALSY throws errors in filters
    	$scope.minpriceValues = [{
    			'value': 0, 'text':'No min'
    		},
    		{
    			'value': 500000, 'text':'500,000'
    		},
    		{
    			'value': 600000, 'text':'600,000'
    		},
    		{
    			'value': 700000, 'text':'700,000'
    		},
    		{
    			'value': 800000, 'text':'800,000'
    		},
    		{
    			'value': 900000, 'text':'900,000'
    		}];
    	$scope.minprice = {value: $scope.minpriceValues[0].value};
    	$scope.maxpriceValues = [{
    			'value': 99999999, 'text':'No max'
    		},
    		{
    			'value': 500000, 'text':'500,000'
    		},
    		{
    			'value': 600000, 'text':'600,000'
    		},
    		{
    			'value': 700000, 'text':'700,000'
    		},
    		{
    			'value': 800000, 'text':'800,000'
    		},
    		{
    			'value': 900000, 'text':'900,000'
    		}];
    	$scope.maxprice = {value: $scope.maxpriceValues[0].value};
        //bedroom filter values
        $scope.minbedroomsValues = [{
                'value': -1, 'text':'No min'
            },
            {
                'value': 0, 'text':'studio'
            },
            {
                'value': 1, 'text':'1 bedroom'
            },
            {
                'value': 2, 'text':'2 bedroom'
            },
            {
                'value': 3, 'text':'3 bedroom'
            },
            {
                'value': 4, 'text':'4 bedroom'
            },
            {
                'value': 5, 'text':'5 bedroom'
            }];
        $scope.minbedrooms = {value: $scope.minbedroomsValues[0].value};
        $scope.maxbedroomsValues = [{
                'value': 10, 'text':'No max'
            },
            {
                'value': 0, 'text':'studio'
            },
            {
                'value': 1, 'text':'1 bedroom'
            },
            {
                'value': 2, 'text':'2 bedroom'
            },
            {
                'value': 3, 'text':'3 bedroom'
            },
            {
                'value': 4, 'text':'4 bedroom'
            },
            {
                'value': 5, 'text':'5 bedroom'
            }];
        $scope.maxbedrooms = {value: $scope.maxbedroomsValues[0].value}
        $scope.propertyTypeValues = [{
                'value': 0, 'text':'Any'
            },
            {
                'value': 1, 'text':'House'
            },
            {
                'value': 2, 'text':'Flat/ Apartment'
            },
            {
                'value': 3, 'text':'Bungalow'
            }]
        $scope.propertyType = {value: $scope.propertyTypeValues[0].value}


    };

    app.controller('MainController', MainController);

}());
