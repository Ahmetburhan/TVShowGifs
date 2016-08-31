var showTitle = ['The Americans', 'Orphan Black', 'Game of Thrones', 'Sherlock', 'Mr. Robot', 'The Walking Dead', 'Daredevil', 'Unbreakable Kimmy Schmidt', 'Silicon Valley', 'The Flash', 'Supergirl', 'Louie', 'iZombie', 'Homeland', 'Arrow', 'Veep', 'Parks and Recreation'];
var buttonClicked = false;
//creates buttons
	for(var i = 0; i < showTitle.length; i++){
		var showBtn = $('<button>');
		showBtn.text(showTitle[i]);
		showBtn.addClass('showBtn');
		showBtn.attr({'data-name': showTitle[i]});
		$('#TVButtons').append(showBtn);
	}

//displays gifs on click
$('.showBtn').on('click', function(){
	buttonClicked = true;
	
	if (buttonClicked = true){
		$('.display').empty();
	}

	var thisShow = $(this).data('name').replace(/\s/g, '+');
	var giphyURL = "http://api.giphy.com/v1/gifs/search?q=tv+show+" + thisShow + "&limit=10&api_key=dc6zaTOxFJmzC";
	$.ajax({url: giphyURL, method: 'GET'}).done(function(giphy){
	var currentGif = giphy.data;
		$.each(currentGif, function(index,value){
		var embedGif = value.images.original.url;
		var newGif = $('<img>');
		newGif.attr('src', embedGif);
		$('.display').append(newGif);
		});
	});
});


//stores input into array, changes into button

//resize images and add rating