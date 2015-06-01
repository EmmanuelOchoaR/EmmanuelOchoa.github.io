function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(39.1730652, -91.887271)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
  panoramioLayer.setMap(map);

  var photoPanel = document.getElementById('photo-panel');
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(photoPanel);

  google.maps.event.addListener(panoramioLayer, 'click', function(photo) {
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.innerHTML = photo.featureDetails.title + ': ' +
        photo.featureDetails.author;
    link.setAttribute('href', photo.featureDetails.url);
    li.appendChild(link);
    photoPanel.appendChild(li);
    photoPanel.style.display = 'block';
  });
}

google.maps.event.addDomListener(window, 'load', initialize);