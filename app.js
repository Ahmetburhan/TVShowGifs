var showTitle = ['The Americans', 'Orphan Black', 'Game of Thrones', 'Sherlock', 'Mr. Robot', 'The Walking Dead', 'Daredevil', 'Unbreakable Kimmy Schmidt', 'Silicon Valley', 'The Flash', 'Supergirl', 'Louie', 'iZombie', 'Homeland', 'Arrow', 'Veep', 'Parks and Recreation'];


//creates buttons
	for(var i = 0; i < showTitle.length; i++){
		var showBtn = $('<button>');
		showBtn.text(showTitle[i]);
		showBtn.attr('data-name', showTitle[i].replace(' ', '+'));
		$('#TVButtons').append(showBtn);
	}

//displays gifs on click
// var giphyURL = "http://api.giphy.com/v1/gifs/search?q=tv+show+" +  + "&limit=10&api_key=dc6zaTOxFJmzC"
// 	$.ajax({url: giphyURL, method: 'GET'}).done(function(giphy){
// 		var currentGif = giphy.data;
// 		$.each(currentGif, function(index,value){
// 		var embedGif = value.images.original.url;
// 		newGif = $('<img>');
// 		newGif.attr('src', embedGif);
// 		$('.display').html(newGif);
// 		});

//retrieves input from form - .replace ' ' to '+'

//stores input into array, changes into button