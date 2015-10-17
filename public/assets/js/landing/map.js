// 30.2500° N, 97.7500°

var global_geo = [30.25, 97.75];

var map = null;
var geocoder = null;

function initialize() {
    geocoder = new google.maps.Geocoder();

    var mapOptions = {
        center: new google.maps.LatLng(global_geo[0], global_geo[1]),
        zoom: 13
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var input = /** @type {HTMLInputElement} */ (
        document.getElementById('pac-input'));

    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(global_geo[0], global_geo[1]),
        draggable: true
    });

    var position = marker.getPosition();
    getCode(position, geocoder);

    google.maps.event.addListener(autocomplete, 'place_changed', function(event) {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Why 17? Because it looks good.
        }
        marker.setIcon( /** @type {google.maps.Icon} */ ({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''), (place.address_components[1] && place.address_components[1].short_name || ''), (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);

        var position = marker.getPosition();
        var latLngString = position.lat() + "," + position.lng();

        $("#geocoded-location").val(latLngString);
    });

    google.maps.event.addListener(marker, 'dragend', function(event) {
        var position = this.getPosition();
        getCode(position, geocoder);
        map.setCenter(position);
    });

    function getCode(position, geocoder) {
        var resString = "";
        geocoder.geocode({
            'latLng': position
        }, function(res, stat) {
            if (res[0] !== undefined)
                var reversed_address = res[0].formatted_address;
            $("input[name=place]").val(reversed_address);
            resString += reversed_address;

            //var latLngString = position.lat() + "," + position.lng();

            //var $map_addr = $('#pac-input');
            //if (!$map_addr.val().trim().length)
            $("#pac-input").val(resString);
            //console.log('latitude: ' +  position.lat() + ' | longitude: ' +  position.lng());
            //console.log(resString);
            //console.log(latLngString);
            //$("#geocoded-location").val(latLngString);
        });
    }

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
        var radioButton = document.getElementById(id);
        google.maps.event.addDomListener(radioButton, 'click', function() {
            autocomplete.setTypes(types);
        });
    }

    // largely from http://stackoverflow.com/questions/26787022/google-maps-api-double-click-spot-on-map-to-move-marker-there

    // if you don't do this, the map will zoom in on double click. this may or may not be desirable.
    map.set("disableDoubleClickZoom", true);

    google.maps.event.addListener(map, 'dblclick', function(e) {
        //console.log("Double Click");
        var positionDoubleclick = e.latLng;
        //console.log("positionDoubleclick = " + positionDoubleclick);
        marker.setPosition(positionDoubleclick);
        map.panTo(positionDoubleclick);

        getCode(positionDoubleclick, geocoder);
    });
}