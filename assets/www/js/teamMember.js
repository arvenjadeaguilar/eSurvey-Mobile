
eSurveyApp.controller('teamMemberController',function($scope,$routeParams,$rootScope,$http,$location){
	
	$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile/'; 
	$scope.id = $routeParams.id;
	$scope.username = $routeParams.username;
	console.log($scope.username);

	$http.get($scope.address+'getMembers',{params:{id:$scope.id}}).success(function(data){
		$scope.members = data;
	});
	
	$http.get($scope.address+'getTeam',{params:{id:$scope.id}}).success(function(data){
		$scope.team = data;
	});
	


});



eSurveyApp.controller('sendMemberController',function($scope,$routeParams,$rootScope,$http,$location){
	
	$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile/'; 
	$scope.id = $routeParams.id;
	$scope.username = $routeParams.username;
	$scope.number = $routeParams.number;

	console.log($scope.username);


});
