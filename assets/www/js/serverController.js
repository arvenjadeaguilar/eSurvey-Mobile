
eSurveyApp.controller('serverController',function($scope,$rootScope,$routeParams,$http,$location){
	
	$scope.setServer = function(){

		$rootScope.serverAddress = $scope.serverAddress;
		$location.path('/login');
	}


});

