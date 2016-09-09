angular.module('netflix-example', ['ngRoute'])
    .config(function ($routeProvider) {

        'use strict';

        $routeProvider.when('/', {
            templateUrl: 'src/app/templates/dashboard.html',
            controller: 'DashboardController'
        });

    });