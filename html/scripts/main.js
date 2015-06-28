// reference to Map
var map;
var JSON;
var allMarkers = [];
var noteMarkers = [];
var issueMarkers = [];
var injuryMarkers = [];

var TAG_TYPE_NOTE = 3;
var TAG_TYPE_ISSUE = 2;
var TAG_TYPE_INJURY = 1;

var showNoteMarkers = true;
var showIssueMarkers = true;
var showInjurymarkers = true;

// -------- Map
function init(){
    var myLatlng = new google.maps.LatLng(34.0722,-118.4441);
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Fill up the map
    loadJSON(function loadCallback(json){
        //console.log(json);
        allMarkers = [];
        injuryMarkers = [];
        noteMarkers = [];
        issueMarkers = [];

        // Fill the map
        var newMarker,jsonObj;
        for(var i = 0; i < json.length; i ++){
            jsonObj = json[i];
            id = i;
            latitude = jsonObj['latitude'];
            longitude = jsonObj['longitude'];
            tagtype = jsonObj['type'];
            notes = jsonObj['notes'];
            weather = 'INSERT WEATHER HERE';
            picture = jsonObj['picture'];
            timestamp = new Date();
            newMarker = new Marker(id,latitude,longitude,notes,
                                    weather,picture,tagtype,timestamp);
            allMarkers.push(newMarker);

            if( tagtype == TAG_TYPE_NOTE ){
                noteMarkers.push(newMarker);
            }else if( tagtype == TAG_TYPE_ISSUE ){
                issueMarkers.push(newMarker);
            }else if( tagtype == TAG_TYPE_INJURY ){
                injuryMarkers.push(newMarker);
            }
        }

        loadSidebarClickEvents();

        updatePreview(allMarkers[0]);
        updateSidebar();
    });
};

function loadSidebarClickEvents(){
    $('#viewAllButton').click(function(){
        console.log('clicked');
    });

    $('#viewNotesButton').click(function(){
        console.log('clicked');
    });

    $('#viewIssuesButton').click(function(){
        console.log('clicked');
    });

    $('#viewInjuriesButton').click(function(){
        console.log('clicked');
    });
}

function loadJSON(callback) {
    var url = "http://aeshackathon.herokuapp.com/endpoints/GetAllTagPackages/"

    $.ajax({
        type: "GET",
        url:url,
        success: function (msg) {
            callback(msg);
        },
        dataType: 'json'
    });
}

google.maps.event.addDomListener(window, 'load', init());

