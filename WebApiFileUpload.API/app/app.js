'use strict';

angular.module('angularUploadApp', [
    'ngRoute',
    'angularFileUpload'
])

.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/templates/fileUpload.html',
        controller: 'fileUploadCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});