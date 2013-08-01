var movieDb = angular.module('MovieDb', ['ngResource']);

//configures the routing of the controller to the view page
movieDb.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', 
			{
				controller: MovieController,
				templateUrl: "Partials/View1.html"	
			})
			.otherwise({redirectTo: '/'});
	}]);
