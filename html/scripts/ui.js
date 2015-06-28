

var updatePreview = function(marker){
    $('#timeLabel').text(marker.timestamp);
    $('#latLong').text('' + marker.latitude + ', ' + marker.longitude);
    $('#notes').text(marker.notes);
    $('#picture').attr('src','data:image/png;base64,' + marker.picture);
};

var updateSidebar = function(){
    // View All
    $('#numLabel1').text('' + allMarkers.length);

    // Notes
    $('#numLabel2').text('' + noteMarkers.length);

    // Issues
    $('#numLabel3').text('' + issueMarkers.length);

    // Injuries
    $('#numLabel4').text('' + injuryMarkers.length);
};

var updateMapWithFilters = function(){
    var marker;

    for(var x = 0; x < allMarkers; x ++){
        marker = allMarkers[x];
        marker.setMap(null);
    }

    if( showInjurymarkers ){
        for(var x = 0; x < injuryMarkers.length; x ++){
            marker = injuryMarkers[x];
            marker.setMap(map);
        }
    }
    if( showNoteMarkers ){
        for(var x = 0; x < issueMarkers.length; x ++){
            marker = issueMarkers[x];
            marker.setMap(map);
        }
    }
    if( showIssueMarkers ){
        for(var x = 0; x < noteMarkers.length; x ++){
            marker = noteMarkers[x];
            marker.setMap(map);
        }
    }
};

