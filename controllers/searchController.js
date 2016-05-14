angular

.module("myApp")

.controller("SearchCtrl", ["ahSearch", SearchCtrl])

function SearchCtrl(ahSearch){
	console.log("Hi");
}