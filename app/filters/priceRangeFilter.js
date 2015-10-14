(function() {

    var app = angular.module('rightmoveApp');

    app.filter('priceRangeFilter', function() {
        return function(items, minprice, maxprice) {

            var filteredResults = [];

            for (var i = 0; i < items.length; i++) {

                var item = items[i];

                if (minprice.value === 0 && maxprice.value === 99999999) {
                    filteredResults.push(item);

                } else if (item.price >= minprice.value && item.price <= maxprice.value) {
                	filteredResults.push(item);
                };

            };

            return filteredResults
        };

    });

    app.filter('removeMinPriceValues', function() {
    	return function(items, maxprice) {

    		var filteredResults = [];
    		for (var i = 0; i < items.length; i++) {

    			var item = items[i];

    			if (item.value < maxprice.value) {
    				filteredResults.push(item);
    			}
    		};
    		return filteredResults;

    	};

    });

    app.filter('removeMaxPriceValues', function() {
    	return function(items, minprice) {

    		var filteredResults = [];
    		for (var i = 0; i < items.length; i++) {

    			var item = items[i];

    			if (item.value > minprice.value) {
    				filteredResults.push(item);
    			}
    		};
    		return filteredResults;

    	};

    });

}());
