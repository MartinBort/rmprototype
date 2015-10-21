(function() {

    var app = angular.module('rightmoveApp', []);

    var MainController = function($scope, $http, searchProperties, $location, $anchorScroll, $timeout, smoothScroll, $window, appValues) {

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

        var openMenu = function() {
            console.log($scope.showMobileMenu);
            $scope.showMobileMenu = true;
            console.log($scope.showMobileMenu);
            /*var menu = document.getElementById("mobileMenu");
            menu.className = "show-mobile-menu";*/
        };

        /*var closeMobileMenu = function() {
            console.log('hide');
            var menu = document.getElementById("mobileMenu");
            menu.className = "hide";
        };*/

        //$scope.closeMobileMenu = closeMobileMenu;
        //$scope.showMobileMenu = showMobileMenu;
        $scope.showMobileMenu = false;
        $scope.openMenu = openMenu;
        $scope.propertyFilters = propertyFilters;
    	$scope.submitSearch = getProperties;
    	$scope.results = [];
        $scope.showResults = false; //attach ng-show to this because leaving $scope.results as FALSY throws errors in filters
        //filter values
    	$scope.minpriceValues = appValues.minpriceValues;
    	$scope.maxpriceValues = appValues.maxpriceValues;
        $scope.minbedroomsValues = appValues.minbedroomsValues;
        $scope.maxbedroomsValues = appValues.maxbedroomsValues;
        $scope.propertyTypeValues = appValues.propertyTypeValues;
        //initialise filter values
        $scope.minprice = {value: $scope.minpriceValues[0].value};
        $scope.maxprice = {value: $scope.maxpriceValues[0].value};
        $scope.minbedrooms = {value: $scope.minbedroomsValues[0].value};
        $scope.maxbedrooms = {value: $scope.maxbedroomsValues[0].value};
        $scope.propertyType = {value: $scope.propertyTypeValues[0].value};

    };

    app.controller('MainController', MainController);

}());
