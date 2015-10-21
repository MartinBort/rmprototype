(function() {

    var appValues = function() {

        var minpriceValues = [{
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

        var maxpriceValues = [{
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

        var minbedroomsValues = [{
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

        var maxbedroomsValues = [{
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

        var propertyTypeValues = [{
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

        return {
            minpriceValues: minpriceValues,
            maxpriceValues: maxpriceValues,
            minbedroomsValues: minbedroomsValues,
            maxbedroomsValues: maxbedroomsValues,
            propertyTypeValues: propertyTypeValues
        };
    };

    var module = angular.module('rightmoveApp');
    module.factory('appValues', appValues); //register service with angular

}());
