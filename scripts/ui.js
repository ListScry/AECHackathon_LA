

var updatePreview = function(marker){
    //var displayTime = Globalize.format(marker.timestamp, "HH:mm p");
    var displayTime = marker.timestamp;

    $('#timeLabel').text(displayTime);
    $('#latLong').text('' + marker.latitude + ', ' + marker.longitude);
    $('#notes').text(marker.notes);
    $('#picture').attr('src','data:image/png;base64,' + marker.picture);

     $('#weather').text('...');
    getWeatherData(marker.latitude,marker.longitude,marker.timestamp,function(val){
      $('#weather').text(val);
    })


};

var updateSidebar = function(){
    console.log("len" + allMarkers.length);
    // View All
    $('#numLabel1').text('' + allMarkers.length);

    // Notes
    $('#numLabel2').text('' + noteMarkers.length);

    // Issues
    $('#numLabel3').text('' + issueMarkers.length);

    // Injuries
    $('#numLabel4').text('' + injuryMarkers.length);

    var hiddenStr = 'hidden';
    var visibleStr = 'visible';

    var noteVisiblity = visibleStr;
    var issueVisibility = visibleStr;
    var injuryVisibility = visibleStr;

    if( showNoteMarkers ){
        noteVisiblity = hiddenStr;
    }

    if( showIssueMarkers ){
        issueVisibility = hiddenStr;
    }

    if( showInjurymarkers ){
        injuryVisibility = hiddenStr;
    }

    console.log(noteVisiblity);
    $('#switchOffNotes').css("visibility", noteVisiblity);
    $('#switchOffIssues').css("visibility", issueVisibility);
    $('#switchOffInjuries').css("visibility", injuryVisibility);
};

var updateMapWithFilters = function(){
    var marker;

    for(var x = 0; x < allMarkers.length; x ++){
        marker = allMarkers[x];
        marker.hide()
    }

    if( showNoteMarkers ){
        for(var x = 0; x < noteMarkers.length; x ++){
            marker = noteMarkers[x];
            marker.show();
        }
    }

    if( showInjurymarkers ) {
        for (var x = 0; x < injuryMarkers.length; x++) {
            marker = injuryMarkers[x];
            marker.show();
        }
    }

    if( showIssueMarkers ) {
        for (var x = 0; x < issueMarkers.length; x++) {
            marker = issueMarkers[x];
            marker.show();
        }
    }

    updateSidebar();
};

