
eSurveyApp.controller('questionController',function($scope,$routeParams,$rootScope,$http,$location){
		$scope.address = "http://" + $rootScope.serverAddress+'/eSurvey/mobile/'; 
		$scope.id = $routeParams.id;
		$scope.uid = $routeParams.uid;
		$scope.username = $routeParams.username;
		$scope.answer = [];
		$http.get($scope.address+'getQuestions',{params:{id:$scope.id}}).success(function(data){
			$scope.questionList = data;
		});
		
		$scope.submit = function(answer){
				$http.post($scope.address+'save',
				{
					id:$scope.id,
					answer:answer
				}).success(function(data){	
					$scope.answer=[];
					alert("Survey Successfully Saved");
				});
		}
});