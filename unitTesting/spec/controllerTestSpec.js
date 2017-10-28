describe('Testing the Controller', function(){

angular.module('controllers',[])
  .controller('HomeController', function($scope) {
    $scope = $scope.title

		});

it('should say: Frequently Asked Questions!'), function() {
	expect($scope).toBe('Frequently Asked Questions!');
}
});