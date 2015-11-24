$(function(){
	$('#search-term .btn').on('click', function(e){
		e.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);	
	});

});

var getRequest = function(searchTerm){
	var params = {
		q: searchTerm,
		k: "179625-Educatio-EE7ZUYWY",
		info: 1
		
	};
	url= "https://www.tastekid.com/api/similar?callback=?";
	console.log(params);
	console.log(url);
	$.getJSON(url, params, function(data){
			console.log(data);
			// listResults(data.items);
		});
	};