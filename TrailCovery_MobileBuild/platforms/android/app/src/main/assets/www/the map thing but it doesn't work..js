(function () {
    "use strict";

var templatecontent = document.querySelector('template').content;
var mapid = templatecontent.querySelector('#map');
var textcontent = mapid.textContent;
  console.log(mapid);
    //PUSHERAPI

    // Enable pusher logging - don't include this in production
    //PUSHER API IS USED AS WEBSOCKET TO STREAM DATA IN REAL TIME
    Pusher.logToConsole = true;



    var pusher = new Pusher('c3a0841c4cedc127e358', {
      cluster: 'ap1',
      forceTLS: true
    });

    var channel = pusher.subscribe('map-channel');
    channel.bind('my-event', function(data) {


      alert(JSON.stringify(data));
    });


        mapboxgl.accessToken = 'pk.eyJ1Ijoic2RjMjAxOCIsImEiOiJjam9pOTZhYTUwNnF5M3FtaWJ4c244Y3F4In0.AfOL4xqBBTijfsMMxMys9A';
        var map = new mapboxgl.Map({
        //https://www.mapbox.com/mapbox-gl-js/api/
        container: mapid,
        //container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        interactive: true,
        dragRotate: true,
        doubleClick: true
        });


        // THIS TRACK'S USER LOCATION IN REAL-TIME USING USER'G GroupSchool
        map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));
        //IF I CHANGE THIS URL TO PHP THAT CONTAINS THE GEOJSON FORMAT
        var url = 'https://wanderdrone.appspot.com/';
        //var url='https://mp18.projectsbit.org/sdc/realtimemap.php';


        map.on('load', function () {
            window.setInterval(function() {
                map.getSource('drone').setData(url);
            }, 2000);

            map.addSource('drone',
            {
              type: 'geojson',
              data: url
            });

            map.addLayer({
                "id": "drone",
                "type": "symbol",
                "source": "drone",
                "layout": {
                    "icon-image": "rocket-15"
                }
            });
        });


})();
