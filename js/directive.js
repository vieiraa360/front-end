angular.module('NavbarDirective', []).directive('myNavbar', function() {
   return {
     restrict: 'EA',
     templateUrl: 'templates/directives/my-navbar.html',
   };
})

angular.module('FooterDirective', []).directive('myFooter', function() {
	return {
	 restrict: 'EA',
	 templateUrl: 'templates/directives/my-footer.html',
   };
});
