angular

.module("myApp")

.controller("SearchCtrl", ["ahSearch", SearchCtrl])

function SearchCtrl(ahSearch){
	var vm = this;
	vm.submit = submit;

	function submit(){
		vm.category = document.getElementById("select-cat").value;
		if(vm.category !== "everything"){
			ahSearch(vm.category+":"+vm.searchTerm).getResults()
			.then(function(response){
				console.log(response);
			})
		} else {
			ahSearch(vm.searchTerm).getResults()
			.then(function(response){
				console.log(response);
			})
		}
		console.log(vm.category);
	}
}