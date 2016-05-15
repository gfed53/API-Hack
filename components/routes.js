angular
.module("myApp")

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/")
	var myRoot = {
		name: "root",
		url: "/",
		views: {
			"header": {
				templateUrl: "./partials/header/header.html"
			},
			"content": {
				templateUrl: "./partials/search/search.html",
				controller: "SearchCtrl",
				controllerAs: "search"
			},
			"footer": {
				templateUrl: "./partials/footer/footer.html"
			},
			'menu@root': {
				templateUrl: "./partials/header/header-partials/menu.html",	
			}
		}
	},
	directions = {
		name: "directions",
		url: "directions",
		parent: "root",
		views: {
			'content@': {
				templateUrl: "./partials/directions/directions.html"
			}
		}
	};

	$stateProvider
	.state(myRoot)
	.state(directions);
}])