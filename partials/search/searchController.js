angular

.module("myApp")

.controller("SearchCtrl", ["ahSearch", SearchCtrl])

function SearchCtrl(ahSearch){
	console.log("now");
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
			console.log(response);
			if(vm.info = response.data.Similar.Info[0].Type === "unknown"){
				alert("Sorry, the API had trouble finding what you were looking for. Please make sure the spelling is correct. Note that TasteKid's queries are very precise, and what you are looking for may be phrased differently. ex: 'Street Fighter IV' is recognized, but not 'Street Fighter 4'.");
			} else {
				vm.info = response.data.Similar.Info;
				vm.results = response.data.Similar.Results;
				console.log(vm.info);
				console.log(vm.results);
				vm.searchTerm = "";
			}

		})
		console.log(vm.category);
	}
}