angular

.module("myApp")

.controller("SearchCtrl", ["$scope", "ahSearch", "ahResultHistory", "ahSearchTerm", SearchCtrl]);

function SearchCtrl($scope, ahSearch, ahResultHistory, ahSearchTerm){
	var vm = this;
	vm.submit = submit;
	vm.add = add;
	vm.pastSearches = ahResultHistory.getSearched();
	vm.pastResults = ahResultHistory.getResults();
	vm.searchTerm = ahSearchTerm.get();

	$scope.$watch("search.searchTerm", function(newVal){
		//Watches for changes in the search bar, so if the user switches over to a different tab and then return to it, they won't lose what they inputed.
		ahSearchTerm.set(newVal);
	});


	function submit(cat){
		vm.searchTermNew = ahSearch(vm.searchTerm).assignSearch(cat);

		ahSearch(vm.searchTermNew).getResults()
		.then(function(response){
			var obj = ahSearch().checkValid(response);
			vm.info = obj.info;
			vm.results = obj.results;
			vm.searchTerm = obj.searchTerm;
			ahSearchTerm.set(vm.searchTerm);
		});
	}

	function add(name){
		vm.searchTerm += (name+", ");
		ahSearchTerm.set(vm.searchTerm);
		alert("Artist added to search bar!");
	}
}



