var navGeoLoc = navigator.geolocation;
if ( navGeoLoc )
{
    navGeoLoc.getCurrentPosition(
        function successCallback( position )
        {
            console.log( 'Position at ' + new Date( position.timestamp ) );
            console.log( ' Latitude: ' + position.coords.latitude + '°' );
            console.log( ' Longitude: ' + position.coords.longitude + '°' );
            console.log( ' Accuracy: ' + position.coords.accuracy + 'm' );
        },
        function errorCallback( error )
        {
            var message;
            switch ( error.code )
            {
            case error.PERMISSION_DENIED:
                message = "Geolocation permission denied.";
                break;
            case error.POSITION_UNAVAILABLE:
                message = "Geolocation position unavailable.";
                break;
            case error.TIMEOUT:
                message = "Geolocation timed out.";
                break;
            }
            message += '\n' + error.message;
            console.log( message );
        },
        {
            enableHighAccuracy: false,
            maximumAge: 86400000, //1 day
            timeout: 60000 //1 min
        } );
}
<script type="text/javascript">
		var lati =0;
		var longi =0;
		function getPosition(position) 
		{
			lati = position.coords.latitude;
			longi = position.coords.longitude;
		}

		function writeLati(form)
		{
			if (navigator.geolocation) { 
				navigator.geolocation.getCurrentPosition(getPosition);
				lati = position.coords.latitude;
				longi = position.coords.longitude;
				form.latitude.value = lati;
				form.longitude.value = longi;
			} else {
				form.latitude.value = "3";
				form.longitude.value = "5";
				document.write("Your shitty browser can't do geolocation. Get Firefox 3.5.");
			}

		}



	</script>
else
{
    console.log( 'No geolocation support' );
}