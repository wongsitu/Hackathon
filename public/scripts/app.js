var book_endpoint = "http://localhost:3000/api/users/"

let signedIn;

$(document).ready( function () {
///////////

$('nav div  a')
		.not('.blog')
		.on('click', function(e) {
	  e.preventDefault();
	  var thisTarget = $(this).attr('href');
		// get that section's top offset
		var targetOffset = $(thisTarget).offset().top;
	  // use jQuery.animate() to animate the body's
	  // scrollTop to the targetOffest
	  $('html, body').animate({
	    scrollTop: targetOffset
	  }, 600);
	});

$('#postForm').on('submit', function(event){
  event.preventDefault();
  console.log('add-post clicked!');
  var formData = $(this).serialize();
  console.log(formData);//user id//
    $.post(`/api/posts`, formData, function(post) {
      $('#results').html('');
      initMap();
    })
    // reset form input values after formData has been captured
    $(this).trigger("reset");
});

/////////////MAP////////
initMap();

var map, infoWindow;
function initMap(json) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 10
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent("Location found");
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}



//end of doc ready
})