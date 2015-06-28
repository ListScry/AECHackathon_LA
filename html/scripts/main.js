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
            timestamp = new Date(jsonObj['timestamp']);
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

        setInterval(timedJSONReload, 5000);
    });
};

function loadSidebarClickEvents(){
    $('#viewAllButton').click(function(){
        showNoteMarkers = true;
        showIssueMarkers = true;
        showInjurymarkers = true;

        updateMapWithFilters();
        return false;
    });

    $('#viewNotesButton').click(function(){
        showNoteMarkers = !showNoteMarkers;
        updateMapWithFilters();
        return false;
    });

    $('#viewIssuesButton').click(function(){
        showIssueMarkers = !showIssueMarkers;
        updateMapWithFilters();
        return false;
    });

    $('#viewInjuriesButton').click(function(){
        showInjurymarkers = !showInjurymarkers;
        updateMapWithFilters();
        return false;
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


function timedJSONReload(){
    loadJSON(function(){
        
    });
}

google.maps.event.addDomListener(window, 'load', init());

