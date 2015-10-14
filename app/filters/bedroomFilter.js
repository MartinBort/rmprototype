(function() {

    var app = angular.module('rightmoveApp');

    app.filter('bedroomFilter', function() {
        return function(items, minbedrooms, maxbedrooms) {

            var filteredResults = [];

            for (var i = 0; i < items.length; i++) {

                var item = items[i];

                if (minbedrooms.value === -1  && maxbedrooms.value === 10) {
                    filteredResults.push(item);

                } else if(item.bedrooms >= minbedrooms.value && item.bedrooms <= maxbedrooms.value) {
                    filteredResults.push(item);
                };

            };

            return filteredResults
        };

    });

    app.filter('removeMinBedroomValues', function() {
        return function(items, maxbedrooms) {

            var filteredResults = [];
            for (var i = 0; i < items.length; i++) {

                var item = items[i];

                if (item.value < maxbedrooms.value) {
                    filteredResults.push(item);
                }
            };
            return filteredResults;

        };

    });

    app.filter('removeMaxBedroomeValues', function() {
        return function(items, minbedrooms) {

            var filteredResults = [];
            for (var i = 0; i < items.length; i++) {

                var item = items[i];

                if (item.value > minbedrooms.value) {
                    filteredResults.push(item);
                }
            };
            return filteredResults;

        };

    });

}());
