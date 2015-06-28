// ---------- Marker
function Marker (id,latitude, longitude, notes, weather, picture, tagtype, timestamp) {
    this.id = id;
    this.notes = notes;
    this.weather = weather;
    this.picture = picture;
    this.tagtype = tagtype;
    this.timestamp = timestamp;

    var image = 'images/note.png';

    this.mapMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-25.363882,131.044922),
        // position: new google.maps.LatLng(latitude,longitude),
        map: map,
        title: 'Hello World!',
        animation: google.maps.Animation.DROP,
        icon:image
    });
    this.mapMarker.obj = this;

    // Add click event
    google.maps.event.addListener(this.mapMarker, 'click', this.markerClicked);
}

Marker.prototype.markerClicked = function(){
    console.log('Clicked' + this.obj.id);
    updatePreview(this.obj);
};