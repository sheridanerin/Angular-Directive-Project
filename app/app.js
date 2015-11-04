angular.module('directivePractice', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/js/home/homeTmpl.html',
			controller: 'homeCtrl'
		});

	$urlRouterProvider
		.otherwise('/');

});
