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
})

angular.module('ModalDirective', []).directive('myModal', function() {
	return {
	 restrict: 'EA',
	 templateUrl: 'templates/directives/my-modal.html',
	 controller: function ($scope) {
          $scope.selected = {
            item: $scope.items[0]
          };
        }
      }
});
