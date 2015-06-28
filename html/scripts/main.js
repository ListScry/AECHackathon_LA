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
        //console.log(json);
        console.log(json[0]);
        allMarkers = []
    });
};

function escapeSpecialChars(jsonString) {

    return jsonString.replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\f/g, "\\f");

}

function loadJSON(callback) {
    var url = "http://aeshackathon.herokuapp.com/endpoints/GetAllTagPackages/"

    //var url = "https://public.opencpu.org/ocpu/library/";
    $.ajax({
        type: "GET",
        url:url,
        /*success: function (msg) {
            callback(msg);
            console.log(msg);
            console.log("HI1");
        },*/
        error: function (msg){
            var data = JSON.stringify(msg.responseText);
            var parsedData = JSON.parse(escapeSpecialChars(data));
            callback(parsedData);
        }
    });


}

google.maps.event.addDomListener(window, 'load', init());

