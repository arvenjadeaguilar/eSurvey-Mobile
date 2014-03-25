//Define an angular module for our app
var eSurveyApp = angular.module('eSurveyApp', ['ngMobile','ajoslin.mobile-navigate']);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
eSurveyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
	templateUrl: 'templates/login.html',
	controller: 'loginController'
      }).
      when('/server', {
	templateUrl: 'templates/server.html',
	controller: 'serverController'
      }).
      when('/home/:username', {
  templateUrl: 'templates/home.html',
  controller: 'homeController'
      }).
      when('/message/:username/:id', {
  templateUrl: 'templates/message.html',
  controller: 'messageController'
      }).
       when('/survey/:username/:id', {
  templateUrl: 'templates/survey.html',
  controller: 'surveyController'
      }).
       when('/question/:username/:uid/:id', {
  templateUrl: 'templates/question.html',
  controller: 'questionController'
      }).
       when('/team/:username/:id', {
  templateUrl: 'templates/teamMember.html',
  controller: 'teamMemberController'
      }).
       when('/send/:username/:id/:number', {
  templateUrl: 'templates/send.html',
  controller: 'sendMemberController'
      }).
      otherwise({
	redirectTo: '/login'
      });
}]);


