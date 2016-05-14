angular
.module("myApp")

.factory("ahSearch", ["$http", "$q", ahSearch])

function ahSearch($http, $q){
	return function(searchTerm){
		    var url = "https://www.tastekid.com/api/similar?callback=?";
		    var request = {
				q: searchTerm,
				k: "179625-Educatio-EE7ZUYWY",
				info: 1
		    };
		    var services = {
		    	getResults: getResults
		    };
		    return services;

		    function getResults(){
		    	return $http({
		    		method: 'GET',
		    		url: url,
		    		params: request
		    	})
		    	.then(function(response){
		    		var results = response;
		    		return $q.when(response);
		    	},
		    	function(response){
		    		alert('error');
		    	});
		    }
	}
}