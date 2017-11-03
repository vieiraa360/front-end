angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Frequestly Asked Questions";
    })

    .controller('AccordionController', function ($scope) {
 		 $scope.oneAtATime = true;

		   $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

		  $scope.addItem = function() {
		    var newItemNo = $scope.items.length + 1;
		    $scope.items.push('Item ' + newItemNo);
		  };

		  $scope.status = {
		    isCustomHeaderOpen: false,
		    isFirstOpen: false,
		    isFirstDisabled: false
		  };
})

.controller('FormController', ['$scope', function($scope) {
      $scope.email = {
        text: ''
      };
}]);


angular.module('btford.modal', []).
factory('btfModal', function ($compile, $rootScope, $controller, $q, $http, $templateCache) {
  return function modalFactory (config) {

    if ((+!!config.template) + (+!!config.templateUrl) !== 1) {
      throw new Error('Expected modal to have exacly one of either `template` or `templateUrl`');
    }

    var template      = config.template,
        controller    = config.controller || angular.noop,
        controllerAs  = config.controllerAs,
        container     = angular.element(config.container || document.body),
        element       = null,
        html;

    if (config.template) {
      var deferred = $q.defer();
      deferred.resolve(config.template);
      html = deferred.promise;
    } else {
      html = $http.get(config.templateUrl, {
        cache: $templateCache
      }).
      then(function (response) {
        return response.data;
      });
    }

    function activate (locals) {
      html.then(function (html) {
        if (!element) {
          attach(html, locals);
        }
      });
    }

    function attach (html, locals) {
      element = angular.element(html);
      container.prepend(element);
      var scope = $rootScope.$new();
      if (locals) {
        for (var prop in locals) {
          scope[prop] = locals[prop];
        }
      }
      var ctrl = $controller(controller, { $scope: scope });
      if (controllerAs) {
        scope[controllerAs] = ctrl;
      }
      $compile(element)(scope);
    }

    function deactivate () {
      if (element) {
        element.remove();
        element = null;
      }
    }

    return {
      activate: activate,
      deactivate: deactivate
    };
  };
});