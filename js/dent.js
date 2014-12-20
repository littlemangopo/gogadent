$(function() {
    var initialize = function() {
        var myLatlng = new google.maps.LatLng(44.424440, 26.119975);
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: myLatlng,
          zoom: 15,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Cabinet Stomatologic GogaDent'
        });
    };
    google.maps.event.addDomListener(window, 'load', initialize);
});
