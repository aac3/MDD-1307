	
	function MovieController($scope, $resource){
		$scope.movieTrak = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?',
				{   
					apikey:'ca98y5v5vx2awy5fegbn9ars', 
					callback:'JSON_CALLBACK',
					limit: false, 
				},
					
				{get:{method:'JSONP'}
		});
		
		$scope.searchMovie = function () {
			$scope.movieList = $scope.movieTrak.get({q:$scope.movieTitle});
		}
	}
	
  