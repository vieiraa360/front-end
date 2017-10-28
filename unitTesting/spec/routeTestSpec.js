describe('Testing Routes', function(){

	beforeEach(function($locationProvider, $route, $routeProvider){

	$routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
});

		it('should bind root with home and HomeController'), function() {

		    expect($route.routes['/'].controller).toBe('HomeController');
		    expect($route.routes['/'].templateUrl).
		      toEqual('templates/home.html');
  		};

  			it('should bind FAQs with /faq and HomeController'), function() {

		    expect($route.routes['/faq'].controller).toBe('HomeController');
		    expect($route.routes['/faq'].templateUrl).
		    toEqual('templates/faq.html');
  		};	
	  		it('should bind About Me with /about and HomeController'), function() {

		    expect($route.routes['/about'].controller).toBe('HomeController');
		    expect($route.routes['/about'].templateUrl).
		    toEqual('templates/about.html');
  		};
	  		it('should bind Contact Me with /contact and HomeController'), function() {

		    expect($route.routes['/contact'].controller).toBe('HomeController');
		    expect($route.routes['/contact'].templateUrl).
		    toEqual('templates/contact.html');
  		};	
	});

