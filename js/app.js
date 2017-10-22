angular.module('ElsaArtur', ['ngRoute', 'NavbarDirective', 'scrollToTop', 'FooterDirective', 'RouteControllers']);

angular.module('ElsaArtur').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'HomeController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'HomeController'
    })
    .when('/faq', {
        templateUrl: 'templates/faq.html',
        controller: 'HomeController'
    })
    .when('/aboutxt', {
        templateUrl: 'templates/aboutxt.html',
        controller: 'HomeController'
    })
    .when('/homext', {
        templateUrl: 'templates/homext.html',
        controller: 'HomeController'
    })
    .when('/fees', {
        templateUrl: 'templates/fees.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/',
        controller: 'HomeController'
        })
});
