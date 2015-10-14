(function() {

    var searchProperties = function($http, $location) {

        var searchForSale = function(searchTerm, callback) { 

            $http.get('app/data4.json')
                .then(function(response) {

                    var data 	= response.data;
                    var results = [];

                    angular.forEach(data.properties, function(value, key) {
                        //pType:  0='Any', 1='House', 2='Flat/ Apartment', 3='bunglow'
						results.push({
							title: value.pTitle,
                            propertyType: value.pType,
							location: value.address.pLocation,
							address: value.address.street,
							postcode: value.address.postcode,
							price: value.price,
							img: value.img,
                            bedrooms: value.bedrooms
						});
					});

					callback(results);
                });//end .then

        };

        return {
            searchForSale: searchForSale
        };
    };

    var module = angular.module('rightmoveApp');
    module.factory('searchProperties', searchProperties); //register service with angular

}());
