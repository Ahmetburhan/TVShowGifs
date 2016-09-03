var showTitle = ['The Americans', 'Orphan Black', 'Game of Thrones', 'Sherlock', 'Mr. Robot', 'The Walking Dead', 'Daredevil', 'Unbreakable Kimmy Schmidt', 'Silicon Valley', 'The Flash', 'Supergirl', 'Louie', 'iZombie', 'Homeland', 'Arrow', 'Veep', 'Parks and Recreation'];

//creates buttons
function createButtons(){
	$('#TVButtons').empty();
	var embedGif; var paused;
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
				embedGif= value.images.original.url;
				paused = value.images.original_still.url;
				var rating = $('<h5>').html('Rating: '+value.rating);
				var stillGif = $('<img>').attr('src', paused).addClass('playOnHover, btn-warning');
				var thing = $('<button>').append(rating, stillGif);
				$('.display').append(thing);
			});
		});
	}); 

	//plays gif on hover *WIP
	// $(".playOnHover").hover(
	// 	function(){
	//        	$(this).attr('src', embedGif);
	//     },
	//     function() {
	//         $(this).attr('src', paused);
	//     }                       
	// );  
	$(".playOnHover").hover(
		function(){
	       	$(this).css('border', 'green');
	    },
	    function() {
	        $(this).attr('border', 'red');
	    }                       
	);    	
}   	 

//sets a button from input
$('#addShow').on('click', function(){
	var newShow = $('#newShowInput').val().trim();
	showTitle.push(newShow);
	createButtons();
	return false;
});

createButtons();