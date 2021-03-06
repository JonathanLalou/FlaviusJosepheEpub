var map;
var src = 'https://www.google.com/maps/d/u/0/kml?mid=16mu9H7kKbwlTc0mQv4bKHt5wvArZ2ws0&hl=fr&nl=1&lid=f88qKYSNsT8&forcekml=1&cid=mp&cv=varD7GHsxQU.fr.'

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(-19.257753, 146.823688),
        zoom: 2,
        mapTypeId: 'terrain',
        styles:
            [
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]


    });

    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: false,
        preserveViewport: false,
        map: map
    });
    kmlLayer.addListener('mouseover', function (event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
    });
    kmlLayer.addEventListener(placemark, 'mouseover', function (event) {
        placemark.setName('My Placemark Label');
    });
    kmlLayer.addListener('maptypeid_changed', function () {
        var typeToColor, type, color, k, label;

        typeToColor = {
            'terrain': 'black',
            'roadmap': 'black',
            'hybrid': 'white',
            'satellite': 'white',
        };

        type = map.getMapTypeId();
        color = typeToColor[type];

        for (k in markers) {
            if (markers.hasOwnProperty(k)) {
                label = markers[k].getLabel();
                label.color = color;
                markers[k].setLabel(label);
            }
        }
    });
}


