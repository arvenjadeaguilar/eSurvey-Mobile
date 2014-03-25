
eSurveyApp.controller('homeController',function($scope,$routeParams,$rootScope,$http,$location){
	
	$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile/'; 
	
	$scope.username = $routeParams.username
	console.log($scope.username);
	$http.get($scope.address+'getUser',{params:{username:$scope.username}}).success(function(data){
		$scope.userProfile = data;
	});

});

