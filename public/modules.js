'use strict';

var pharmacyApp = angular.module("pharmacyApp", ["ngRoute"]);

pharmacyApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when("/test1", {
            templateUrl: "views/test1.html",
            controller: "UserController",
            message: "Test 1"

        })
        .when("/test2", {
            templateUrl: "views/test2.html",
            controller: "UserController",
            message: "Test 2"

        })
        .when("/test3", {
            templateUrl: "login.html"
        })
        .when("/drugs/all",{
            templateUrl: "views/drug_list.html",
            controller: "DrugController"
        })
        .when("/drugs/add",{
        templateUrl: "views/drug_add.html",
        controller: "DrugController"
    })


        .when("/", {

        })
        .otherwise({
            templateUrl: "404.html"
        });
});