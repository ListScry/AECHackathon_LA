var updatePreview = function(marker){
    $('#timeLabel').text(marker.timestamp);
    $('#latLong').text('' + marker.latitude + ', ' + marker.longitude);
    $('#notes').text(marker.notes);
    $('#picture').attr('src','data:image/png;base64,' + marker.picture);
}