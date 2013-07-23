var movieDb = angular.module('MovieDb', ['ngResource']);

movieDb.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', 
			{
				controller: MovieController,
				templateUrl: "Partials/View1.html"	
			})
			.otherwise({redirectTo: '/'});
	}]);
