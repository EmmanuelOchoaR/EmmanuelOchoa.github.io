
    $(document).ready(function(){
      $('h1, p').hide().show(4000);
    });
    function initialize() {
        var myOptions = {
  center: new google.maps.LatLng(35,35),
  zoom: 5,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);
 
var icon_monument = 'icons/monument.png';

var egiptoGuiMarker = new google.maps.Marker({
      position: new google.maps.LatLng(30.016788, 31.208869),
      map: map,
      icon: icon_monument,
      title: "La Gran Pirámide de Guiza",
      info: "Terminada alrededor del año 2570 a. C., fue construida para el faraón Keops. Ubicada en Guiza, Egipto, la más antigua, la más grande y la más duradera, pero cuya finalidad última aún es discutida.",
});

  google.maps.event.addListener(egiptoGuiMarker, 'click', procesaClick);

var irakMarker = new google.maps.Marker({
      position: new google.maps.LatLng(33.299013, 44.407110),
      map: map,
      icon: icon_monument,
      title: "Los Jardines Colgantes de Babilonia",
      info: "Construidos en 605 a. C.-562 a. C. Ubicados en la ciudad de Babilonia, actual Irak. Perduraron hasta no más allá de 126 a. C., cuando la ciudad fue destruida definitivamente por los persas. Es la maravilla que más dudas plantea sobre su existencia real."
});

  google.maps.event.addListener(irakMarker, 'click', procesaClick);
 
var turquiaArteMarker = new google.maps.Marker({
      position: new google.maps.LatLng(37.950000, 27.364849),
      map: map,
      icon: icon_monument,
      title: "El Templo de Artemisa en Éfeso",
      info: "Comenzado a levantar por el rey Creso. Levantado hacia 550 a. C. y destruido por un incendio intencionado en el 356 a. C., Alejandro Magno ordenó su reconstrucción, culminada tras su muerte en el año 323 a. C. Antípatro de Sidón la consideraba la obra más impresionante de su lista con diferencia."
});

  google.maps.event.addListener(turquiaArteMarker, 'click', procesaClick);

var greciaOliMarker = new google.maps.Marker({
      position: new google.maps.LatLng(37.638571, 21.629898),
      map: map,
      icon: icon_monument,
      title: "La Estatua de Zeus en Olimpia",
      info: "Esculpida hacia el 430 a. C. por Fidias. Ubicada en el interior del templo dedicado al propio Zeus en la ciudad anfitriona de los famosos juegos."
});
 
   google.maps.event.addListener(greciaOliMarker, 'click', procesaClick);

var turquiaMauMarker = new google.maps.Marker({
      position: new google.maps.LatLng(37.0216, 27.2527),
      map: map,
      icon: icon_monument,
      title: "El Mausoleo de Halicarnaso",
      info: " Empezado por el sátrapa Mausolo y continuado por su mujer Artemisa hacia el 353 a. C. en la ciudad persa de Halicarnaso. Se supone que sobresalía sobre los demás edificios por altura y por el color blanco de los materiales utilizados."
});

   google.maps.event.addListener(turquiaMauMarker, 'click', procesaClick);

var greciaRodMarker = new google.maps.Marker({
      position: new google.maps.LatLng(36.2704, 28.1340),
      map: map,
      icon: icon_monument,
      title: "El Coloso de Rodas",
      info: "Forjado entre 294 a. C. y 282 a. C. Ubicado en un lugar desconocido de la ciudad de Rodas en la isla homónima, Grecia, tras derrotar los rodios a Demetrio Poliorcetes."
});

    google.maps.event.addListener(greciaRodMarker, 'click', procesaClick);

var egiptoFaroMarker = new google.maps.Marker({
      position: new google.maps.LatLng(31.1250, 29.5308),
      map: map,
      icon: icon_monument,
      title: "El Faro de Alejandría",
      info: "Construido entre 285 a. C. y 247 a. C. en la isla de Pharos, a la entrada de Alejandría (Egipto), para guiar a los navíos que se dirigían a los dos puertos con que contaba la ciudad. Al igual que la tumba de Mausolo que daría nombre genérico a todos los grandes monumentos funerarios posteriores, la torre de Faros (Pharos) hizo lo propio con los edificios construidos para ayudar a la navegación."
});

    google.maps.event.addListener(egiptoFaroMarker, 'click', procesaClick);

function procesaClick() {
    alert("Marcador: " + this.title + ",\nInformación: " + this.info);
  } 

//google.maps.event.addListener(marker, 'click', function() {
  //  infowindow.setContent(place.name);
    //infowindow.open(map, this);
  //});


}