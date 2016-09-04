var showTitle = ['The Americans', 'Orphan Black', 'Game of Thrones', 'Sherlock', 'Mr. Robot', 'The Walking Dead', 'Daredevil', 'Unbreakable Kimmy Schmidt', 'Silicon Valley', 'The Flash', 'Supergirl', 'Louie', 'iZombie', 'Homeland', 'Arrow', 'Veep', 'Parks and Recreation', 'Bobs Burger'];
//creates buttons
function createButtons(){
	$('#TVButtons').empty();
	for(var i = 0; i < showTitle.length; i++){
		var showBtn = $('<button>').text(showTitle[i]).addClass('showBtn').attr({'data-name': showTitle[i]});
		$('#TVButtons').append(showBtn);
	}
	
	//displays gifs on click
	$('.showBtn').on('click', function(){
		$('.display').empty();
		
		var thisShow = $(this).data('name');
		var giphyURL = "http://api.giphy.com/v1/gifs/search?q=tv+show+" + thisShow + "&limit=10&api_key=dc6zaTOxFJmzC";
		$.ajax({url: giphyURL, method: 'GET'}).done(function(giphy){
			var currentGif = giphy.data;
			$.each(currentGif, function(index,value){
				var embedGif= value.images.original.url;
				var paused = value.images.original_still.url;
				var thisRating = value.rating;
				if(thisRating == ''){
					thisRating = 'unrated';
				}
				var rating = $('<h5>').html('Rated: '+thisRating).addClass('ratingStyle');
				var stillGif = $('<img>').attr('src', paused).addClass('playOnHover');
				var fullGifDisplay = $('<button>').append(rating, stillGif);
				$('.display').append(fullGifDisplay);
			});
		});	 
	});    	
}  

// animates gif on hover *WIP
$(".playOnHover").hover(
	function(){
	   	$(this).attr('src', embedGif);
	},
	function() {
	    $(this).attr('src', paused);
	}                       
); 
 	 

//sets a button from input
$('#addShow').on('click', function(){
	var newShow = $('#newShowInput').val().trim();
	showTitle.push(newShow);
	createButtons();
	return false;
});

createButtons();