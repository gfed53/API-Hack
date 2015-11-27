$(function(){
	$('.dropdown-menu').on('click', 'a', function(e){
		e.preventDefault();
		console.log("Clicked on");
		yourChoice = $(this).html();
		$('.dropdown-toggle').html(yourChoice);
	});
	$('#search-term .btn-search').on('click', function(e){
		e.preventDefault();
		var searchTerm = $('#query').val();
		var searchTermWithCat = yourChoice+":"+searchTerm;
		console.log(searchTermWithCat);
		getRequest(searchTermWithCat);	
	});

});

var yourChoice;

var showResponse = function(response) {
	
	// clone our result-pt1 template code
	var result1 = $('.templates .result-pt1').clone();
	
	// Set the title/name of response
	var name = result1.find('.result-name');
	name.html(response.Name);

	// Set the type 
	var type = result1.find('.result-type');
	type.html(response.Type);

	// clone our result-pt2 template code
	var result2 = $('.templates .result-pt2').clone();

	// set the blurb
	var blurb = result2.find('.result-blurb');
	blurb.html(response.wTeaser);

	// set the add-to-searchbar button
	var add = result2.find('.btn-add');
	$(add).on('click', function(){
		$('#query').val($('#query').val()+response.Type+":"+response.Name+", ");
	});

	return [result1, result2];
};

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
		
		$.each(data.Similar.Results, function(i, item) {
			console.log(item.Name);
			var response = showResponse(item);
			$('.table-result').append(response);
		});
	});
	// console.log(sampObject);
	// var response = showResponse(sampObject);
	// $('.table-result').append(response);
	$('#query').val('');
};

var sampObject = {
	Name: "Scarface",
	Type: "movie",
	wTeaser: "Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone, a remake of the 1932 film of the same name. The film tells the story of Cuban refugee Tony Montana (Al Pacino) who arrives in 1980s Miami with nothing and rises to become a powerful drug kingpin. The cast also features Mary Elizabeth Mastrantonio, Steven Bauer, and Michelle Pfeiffer.Scarface was released on December 9, 1983 and was a box office success, grossing $44 million. Initial critical reception was mixed, with criticism over excessive violence and profanity and graphic drug usage. Some Cuban expatriates in Miami objected to the film's portrayal of Cubans as criminals and drug traffickers. In the years that followed, the film has received reappraisal from critics and is considered by some to be one of the best within the mob film genre. Screenwriters and directors such as Martin Scorsese have praised the film, and it has since resulted in many cultural references, such as in rap music, comic books, and video games.",
	wUrl: "http://en.wikipedia.org/wiki/Scarface_(1983_movie)",
	yID: "7pQQHnqBa2E",
	yUrl: "https://www.youtube-nocookie.com/embed/7pQQHnqBa2E"

};













