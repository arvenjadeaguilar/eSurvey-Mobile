
eSurveyApp.controller('loginController',function($scope,$routeParams,$rootScope,$http,$location){
	
	$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile'; 
	console.log($scope.address);
	
	$scope.login = function(){

		$http.post($scope.address + "/login",
			{
				username:$scope.username,
				password:$scope.password

			}).success(function(data,status){
				if(data!=0){
				$location.path('/home/'+$scope.username);
				}
				else{
				$location.path('/login');
				$scope.message = "Incorrect Username or Password";
				}


		});
	}




});

