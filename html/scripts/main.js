// reference to Map
var map;
var JSON;
var allMarkers = [];

// -------- Map
function init(){
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var mapOptions = {
        zoom: 4,
        center: myLatlng
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Fill up the map

    var numMarkers = 1;
    var newMarker;
    for(var i = 0; i < numMarkers; i ++){
        id = i;
        latitude = 34.0500;
        longitude = 118.2500;
        tagtype = 1;
        weather = 'some weather';
        picture = 'picture here'
        timestamp = new Date()
        newMarker = new Marker(id,latitude,longitude,notes='note here' + i,
                                weather,tagtype,timestamp);
        allMarkers.push(newMarker)
    }

    loadJSON(function loadCallback(json){
        allMarkers = []
    });
};

function loadJSON(callback){
    $.ajax({
        type: "GET",
        url: "http://aeshackathon.herokuapp.com/endpoints/GetAllTagPackages/",
        dataType: "json",
        success: function(msg) {
                callback(msg);
            }
    })
}

google.maps.event.addDomListener(window, 'load', init());

