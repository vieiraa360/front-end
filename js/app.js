angular.module('ElsaArtur', ['ngRoute', 'NavbarDirective', 'ModalDirective', 'ui.bootstrap.modal', 'ui.bootstrap', 'angAccordion', 'scrollToTop', 'FooterDirective', 'RouteControllers']);

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
    .when('/aboutxt/#tq', {
        templateUrl: 'templates/aboutxt.html/#tq',
        controller: 'HomeController'
    })
    .when('/homext/#ww', {
        templateUrl: 'templates/homext.html/#ww',
        controller: 'HomeController'
    })
    .when('/aboutxt/#ds', {
        templateUrl: 'templates/aboutxt.html/#ds',
        controller: 'HomeController'
    })
    .when('/homext/#up', {
        templateUrl: 'templates/homext.html/#up',
        controller: 'HomeController'
    })
    .when('/homext/#br', {
        templateUrl: 'templates/homext.html/#br',
        controller: 'HomeController'
    })
    .when('/homext', {
        templateUrl: 'templates/homext.html',
        controller: 'HomeController'
    })
    .when('/myFees', {
        templateUrl: 'templates/directives/my-modal.html',
        controller: 'ModalCtrl'
    })
    .otherwise({
        redirectTo: '/',
        controller: 'HomeController'
        })
});
