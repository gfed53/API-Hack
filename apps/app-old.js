$(function(){
	$('.accordion').accordion({collapsible: true});
	$('.dropdown-menu').on('click', 'a', function(e){
		e.preventDefault();
		yourChoice = $(this).html();
		$('.dropdown-toggle').html(yourChoice);
	});

	$('#search-term .btn-search').on('click', function(e){
		e.preventDefault();
		if($("input[name='autoClear']:checked").val() === "on"){
			$('.output h3').hide();
			$('.searched, .results').empty();			
		}
		var searchTerm = $('#query').val();
		if($('.dropdown-toggle').html()==="Everything"){
			$('.output h3').show();
			getRequest(searchTerm);
		} else if(yourChoice === undefined){
			alert("Please select type");
		} else{
			$('.output h3').show();
			var searchTermWithCat = yourChoice+":"+searchTerm;
			getRequest(searchTermWithCat);
		}
	});

	$('.btn-directions').on('click', function(){
		$('.directions').toggleClass('hidden');
	});

	$('.btn-clear').on('click', function(){
		$('.output h3').hide();
		$('.searched, .results').empty();
		console.log($("input[name='autoClear']:checked").val());
	});
	var yourChoice;

	var showResponse = function(response) {

	// clone our result-pt1 template code
	var result1 = $('.templates h4').clone();
	
	// Set the title/name of response
	var name = result1.find('.result-name');
	name.html(response.Name);

	// Set the type 
	var type = result1.find('.result-type');
	type.html(response.Type);

	// clone our result-pt2 template code
	var result2 = $('.templates .acc-content').clone();

	// set the blurb
	var blurb = result2.find('.result-blurb');
	blurb.html(response.wTeaser);

	// set the add-to-searchbar button
	var add = result2.find('.btn-add');
	$(add).on('click', function(){
		$('#query').val($('#query').val()+response.Name+", ");
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
		$.getJSON(url, params, function(data){
			$.each(data.Similar.Info, function(i, item) {
				var response = showResponse(item);
				$('.searched').append(response);
				$('.accordion').accordion("refresh");
			})
			$.each(data.Similar.Results, function(i, item) {
				var response = showResponse(item);
				$('.results').append(response);
				$('.accordion').accordion("refresh");
			});
		});
		$('#query').val('');
	};
});















