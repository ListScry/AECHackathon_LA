// ---------- Marker
function Marker (id,latitude, longitude, notes, weather, picture, tagtype, timestamp) {
    this.id = id;
    this.notes = notes;
    this.weather = weather;
    this.picture = picture;
    this.tagtype = tagtype;
    this.timestamp = timestamp;
    this.latitude = latitude;
    this.longitude = longitude;

    var markerIcon;
    var image = '';

    switch(this.tagtype){
        case TAG_TYPE_NOTE:
            markerIcon = 'images/note.png';
            break;
        case TAG_TYPE_ISSUE:
            markerIcon = 'images/injury.png';
            break;
        case TAG_TYPE_INJURY:
            markerIcon = 'images/issue.png';
            break;
    }

    this.mapMarker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude,longitude),
        map: map,
        title: '',
        animation: google.maps.Animation.DROP,
        icon:markerIcon
    });
    this.mapMarker.obj = this;

    // Add click event
    google.maps.event.addListener(this.mapMarker, 'click', this.markerClicked);
}

Marker.prototype.markerClicked = function(){
    console.log('Clicked' + this.obj.id);
    updatePreview(this.obj);
};

Marker.prototype.show = function(){
    console.log('show');
    this.obj.mapMarker.setMap(null);
}

Marker.prototype.show = function(){
    console.log('hide');
    this.obj.mapMarker.setMap(map);
}