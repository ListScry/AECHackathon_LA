// reference to Map
var MAP;

// ---------- Marker
function Marker(nameVal) {
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    this.name = nameVal;

    this.mapMarker = new google.maps.Marker({
        position: myLatlng,
        map: MAP.canvas,
        title: 'Hello World!'
    });
    google.maps.event.addListener(this.mapMarker, 'click', this.markerClicked);

    console.log('New Marker instantiated - ' + this.name);
};

Marker.prototype.markerClicked = function(){
    console.log('Clicked - ' + this.name);
};


// -------- Map
function Map(){
    MAP = this;
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var mapOptions = {
        zoom: 4,
        center: myLatlng
    };

    this.canvas = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Fill up the map
    var allMarkers = [];
    var numMarkers = 20;

    var newMarker;
    for(var i = 0; i < numMarkers; i ++){
        newMarker = new Marker(i.toString());
        allMarkers.push(newMarker)
    }
};

google.maps.event.addDomListener(window, 'load', Map());