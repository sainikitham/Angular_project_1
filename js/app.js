var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app.html"
    })
    .when("/services", {
      templateUrl : "services.html"
    })
    .when("/about", {
      templateUrl : "about.html"
    })
    .when("/contact", {
      templateUrl : "contact.html"
    });
});
