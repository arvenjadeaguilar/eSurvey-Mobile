
eSurveyApp.controller('messageController',function($scope,$routeParams,$rootScope,$http,$location){
	$scope.username = $routeParams.username;	
	$scope.id = $routeParams.id;

});


eSurveyApp.controller('signatureController',function($scope,$routeParams,$rootScope,$http,$location){
	$scope.username = $routeParams.username;	
	$scope.uid = $routeParams.uid;
	$scope.id = $routeParams.id;

	$scope.nextAddress = '/question/' + $scope.username + '/'+$scope.uid + '/'+$scope.id;
	$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile/saveSignature'; 
	
	$scope.next = function(){
					$location.path($scope.nextAddress);


	}

});

