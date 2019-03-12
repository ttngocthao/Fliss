function initMap(){
    var location = {lat: 51.5203696, lng: -0.1928743};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position:location,
        map:map,
        title:'Fliss Fame Academy',
        icon: '../images/Fliss_logo_icon.png',
        url:'https://www.google.com/maps/search/stowe+centre,+258+harrow+rd,+london+w2+5es/@51.5203696,-0.1928743,17z'
        });
    
    
}

