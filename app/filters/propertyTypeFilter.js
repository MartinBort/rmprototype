(function() {

    var app = angular.module('rightmoveApp');

    app.filter('propertyTypeFilter', function() {
        return function(items, propertyType) {

            var filteredResults = [];       

            for (var i = 0; i < items.length; i++) {

                var item = items[i];

                if (propertyType.value === 0) {
                    filteredResults.push(item);
                } else if (item.propertyType === propertyType.value) {
                    filteredResults.push(item);
                };
            };

            return filteredResults
        };

    });

}());
