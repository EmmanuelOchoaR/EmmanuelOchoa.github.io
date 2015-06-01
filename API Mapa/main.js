$(document).ready(function(){
	$('h1').hide().show(4500);
	cargaMapa("México")
	$("#buscar").click(function() {

		cargaMapa($("#direccion").val());
		
		var dir = $("#direccion").val();
		
		
		var GoogleAPI = "http://maps.google.com/maps/api/geocode/json?address=" + dir + "&sensor=false";//se usa la API de goecode en formato json
		$.getJSON(GoogleAPI, function(resultadoJSON) { //Metodo AJAX para pasar parametros (callback)
			for(i=0;i<resultadoJSON.results.length;i++){
				respuesta = resultadoJSON.results[i];

				$("#direccion-completa").html(respuesta.formatted_address);

				$("#latitud").html(respuesta.geometry.location.lat);
				$("#longitud").html(respuesta.geometry.location.lng);
			}

		});
	});

				function cargaMapa(direccion) {

				var geoCoder = new google.maps.Geocoder(direccion)
	 			var request = {address:direccion};
	 
    			geoCoder.geocode(request, function(result, status){
		  			var latlng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
		  			
		  			var opciones = {
		    			zoom: 5,
		    			center: latlng,
		    			mapTypeId: google.maps.MapTypeId.HYBRID     
		  			};
        			var map = new google.maps.Map(document.getElementById("mapa"), opciones);
		    		
	 			})
			}

});