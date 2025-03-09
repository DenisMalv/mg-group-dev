import { Loader } from "@googlemaps/js-api-loader"
console.log(process.env.GOOGLE_MAPS_API_KEY)
console.log(process.env['GOOGLE_MAPS_API_KEY'])
const loader = new Loader({
    apiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
    version: "weekly",
    // ...additionalOptions,
  });
  

loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const dneprLocation = {lat: 48.4624, lng: 35.0538}; // coodr c.Dnepr

    const mapOptions = {
        center: dneprLocation,
        zoom: 8,
        styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
            {"invert_lightness": true},
            {"saturation": 20},
            {"lightness": 50},
            {"gamma": 0.4},
            {"weight": "1.00"},
            {"hue": "#ffa300"}
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{"visibility": "simplified"}]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
            {"visibility": "on"},
            {"weight": "2.26"},
            {"hue": "#ffce00"}
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
            {"color": "#ffffff"},
            {"visibility": "simplified"},
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
            {"weight": "0.01"},
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
            {"visibility": "on"},
            {"color": "#f9a207"},
            {"weight": "5.00"},
            {"gamma": "1.00"},
            {"invert_lightness": "true"},
            {"lightness": "0"},
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "geometry.stroke",
            "stylers": [
            {"visibility": "on"},
            {"gamma": "6.71"},
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
            {"visibility": "simplified"},
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
            {"color": "#283935"},
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {"color": "#232f3a"},
            ]
        },
        // other styles
        ]
    };
  
    const map = new Map(document.getElementById("map"), mapOptions);
  });


