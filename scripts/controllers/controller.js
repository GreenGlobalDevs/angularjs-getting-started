var myapp = angular.module('myapp', []);

myapp.controller('DataBindingController', function($scope, $timeout) {
	$scope.email = "binhqd@greenglobal.com";
	$scope.number = 15;
	$scope.checkme = true;

	$timeout(function() {
		$scope.$watch("number", function() {
			var pattern =/^[\d]+$/;
			if (!pattern.test($scope.number)) {
				console.log($scope.number);
				alert('Invalid number');
				$scope.number = 0;
			} else {
				console.log($scope.number);
			}
		});
	}, 500);

});