angular

.module("myApp")

.controller("HistoryCtrl", ["ahSearch", "ahResultHistory", "ahSearchTerm", HistoryCtrl]);

function HistoryCtrl(ahSearch, ahResultHistory, ahSearchTerm){
	var vm = this;
	vm.pastSearches = ahResultHistory.getSearched();
	vm.pastResults = ahResultHistory.getResults();
	vm.searchTerm = ahSearchTerm.get();
	vm.add = add;

	function add(name){
		vm.searchTerm += (name+", ");
		ahSearchTerm.set(vm.searchTerm);
		alert("Artist added to search bar!");
	}
}