var bgurl = new Array(), 
	bgtitle = new Array(),
	bgowner = new Array(), 
	bguserid = new Array(), 
	bgphotoid = new Array();
var currbg = 0;

$(document).ready(function() {	
	
	$('#soundtrack').css("width", $(window).width() - 425);	
	
	backgroundList();
	
	setInterval( function(){changeBackground()}, 15000 );

});

function backgroundList() {
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.open("GET","http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ca67930cac5beb26a884237fd9772402&text=first+kiss&media=photos&extras=url_o%2C+owner_name&format=rest",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	var flURL, flTitle, flOwner, flUserid, flPhotoid, tmp;

	tmp = 0;
	
	for( var i = 0; i < 10; i++ ) {
		console.log( xmlDoc.getElementsByTagName("photo")[i].getAttribute("title") );
		flURL = xmlDoc.getElementsByTagName("photo")[i].getAttribute("url_o");
		if( flURL ) {
			console.log( "flURL is not null" );
			flTitle = xmlDoc.getElementsByTagName("photo")[i].getAttribute("title");
			flOwner = xmlDoc.getElementsByTagName("photo")[i].getAttribute("ownername");
			flUserid = xmlDoc.getElementsByTagName("photo")[i].getAttribute("owner");
			flPhotoid = xmlDoc.getElementsByTagName("photo")[i].getAttribute("id");
			
			bgurl[ tmp ] = flURL;
			bgtitle[ tmp ] = flTitle;
			bgowner[ tmp ] = flOwner;
			bguserid[ tmp ] = flUserid;
			bgphotoid[ tmp ] = flPhotoid;
			tmp++;
		}			
	}


}

function changeBackground() {
	
	currbg++;
	
	if( currbg >= bgurl.length ) {
		currbg = 0;
	}
	
	$('#flickr').html( '<img class="flickrbg" src="' + bgurl[ currbg ]  + '">' );
	$('#flickrinfo').html( '<a href="http://www.flickr.com/photos/' + bguserid[ currbg ] + '/' + bgphotoid[ currbg ] + '">' + bgtitle[ currbg ] + '</a> BY <a href="http://www.flickr.com/people/' + bguserid[ currbg ] + '/">' + bgowner[ currbg ] + '</a>' );

	
}

function addSong() {
	$('#playlistform').css( "visibility", "visible" );
}
function submitForm() {
	$('#playlistform').css( "visibility", "hidden" );	
}