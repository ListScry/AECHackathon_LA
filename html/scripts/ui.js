var updatePreview = function(marker){
    $('#id').text(marker.id);
    $('#notes').text(marker.notes);
    $('#weather').text(marker.weather);
    $('#picture').text(marker.picture);
    $('#tagtype').text(marker.tagtype);
    $('#timestamp').text(marker.timestamp);
}