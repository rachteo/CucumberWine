var bgarray;
var currbg = 0;

$(document).ready(function() {	
	
	$('#soundtrack').css("width", $(window).width() - 425);	
	
	bgarray = [ "01", "02" ];
	
	setInterval( function(){changeBackground()}, 5000 );

});

function changeBackground() {
	
	currbg++;
	
	if( currbg >= bgarray.length ) {
		currbg = 0;
	}
	
	$('#flickr').html( '<img class="flickrbg" src="./img/' + bgarray[ currbg ]  + '.jpg">' );
	console.log( "background changing" );
	
}

function addSong() {
	$('#playlistform').css( "visibility", "visible" );
}
function submitForm() {
	$('#playlistform').css( "visibility", "hidden" );	
}