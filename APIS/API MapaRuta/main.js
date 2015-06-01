
   $(document).ready(function(){
    $("h1,p").hide().show(4000);
   });
   function initialize() {
        var myOptions = {
  center: new google.maps.LatLng(20,-100),
  zoom: 4,
  mapTypeId: google.maps.MapTypeId.TERRAIN
};
var map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);

var icon_train = "icons/train.png"
 
var flightPlanCoordinates = [
  new google.maps.LatLng(28.632881, -106.072292),
  new google.maps.LatLng(28.410993, -106.866618),
  new google.maps.LatLng(27.971295, -107.599774),
  new google.maps.LatLng(27.750501, -107.637396),
  new google.maps.LatLng(27.633194, -107.770962),
  new google.maps.LatLng(27.535696, -107.823203),
  new google.maps.LatLng(27.410960, -108.068254),
  new google.maps.LatLng(27.252538, -108.260162),
  new google.maps.LatLng(26.388058, -108.560539),
  new google.maps.LatLng(25.761638, -108.967778),
  new google.maps.LatLng(25.590968, -109.059788),
];
var flightPath = new google.maps.Polyline({
  path: flightPlanCoordinates,
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2
});

flightPath.setMap(map);

}