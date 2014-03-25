
eSurveyApp.controller('surveyController',function($scope,$routeParams,$rootScope,$http,$location){
	
	$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile/'; 
	$scope.id = $routeParams.id;
	$scope.username = $routeParams.username;
	console.log($scope.username);
	
	$http.get($scope.address+'getAllSurvey').success(function(data){
		$scope.surveyList = data;
	});
	
});

