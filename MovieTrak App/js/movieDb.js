    //calls the api site with the $resource feature in AngularJs	
	function MovieController($scope, $resource){
		$scope.movieTrak = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?',
				{   
					apikey:'ca98y5v5vx2awy5fegbn9ars', //key to the api
					callback:'JSON_CALLBACK', //JSON callback from the api
					limit: false, //lets the api know not to limit the search results
				},
					
				{get:{method:'JSONP'} //get method gets the callback info in the JSONP format.
		});
		
		//Function puts the call back into a varible to be used in the view page.
		$scope.searchMovie = function () {
			$scope.movieList = $scope.movieTrak.get({q:$scope.movieTitle});
		}
	}
	
	