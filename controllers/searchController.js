angular

.module("myApp")

.controller("SearchCtrl", ["ahSearch", SearchCtrl])

function SearchCtrl(ahSearch){
	var vm = this;
	vm.submit = submit;

	function submit(){
		$(".output h3").show();
		vm.category = document.getElementById("select-cat").value;
		if(vm.category !== "everything"){
			vm.searchTermNew = vm.category+":"+vm.searchTerm;
		} else {
			vm.searchTermNew = vm.searchTerm;
		}

		ahSearch(vm.searchTermNew).getResults()
		.then(function(response){
			// console.log(response);
			vm.info = response.data.Similar.Info;
			vm.results = response.data.Similar.Results;
			console.log(vm.info);
			console.log(vm.results);
		})
		console.log(vm.category);
	}
}