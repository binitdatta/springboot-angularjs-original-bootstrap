var app = angular.module('app', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/usersstatic',{
            templateUrl: '/views/usersstatic.html',
            controller: 'usersStaicController'
        })
        .when('/roles',{
            templateUrl: '/views/roles.html',
            controller: 'rolesController'
        })
         .when('/users',{
            templateUrl: '/views/users.html',
            controller: 'UserDBController'
        })
         .when('/task',{
            templateUrl: '/views/task.html',
            controller: 'taskManagerController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});

