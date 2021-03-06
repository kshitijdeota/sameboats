var years      = ["1890-01", "1890-02", "1890-03", "1890-04", "1890-05", "1890-06", "1890-07", "1890-08", "1890-09", "1890-10", "1890-11", "1890-12",
                  "1891-01", "1891-02", "1891-03", "1891-04", "1891-05", "1891-06", "1891-07", "1891-08", "1891-09", "1891-10", "1891-11", "1891-12",
                  "1892-01", "1892-02", "1892-03", "1892-04", "1892-05", "1892-06", "1892-07", "1892-08", "1892-09", "1892-10", "1892-11", "1892-12",
                  "1893-01", "1893-02", "1893-03", "1893-04", "1893-05", "1893-06", "1893-07", "1893-08", "1893-09", "1893-10", "1893-11", "1893-12",
                  "1894-01", "1894-02", "1894-03", "1894-04", "1894-05", "1894-06", "1894-07", "1894-08", "1894-09", "1894-10", "1894-11", "1894-12",
                  "1895-01", "1895-02", "1895-03", "1895-04", "1895-05", "1895-06", "1895-07", "1895-08", "1895-09", "1895-10", "1895-11", "1895-12",
                  "1896-01", "1896-02", "1896-03", "1896-04", "1896-05", "1896-06", "1896-07", "1896-08", "1896-09", "1896-10", "1896-11", "1896-12",
                  "1897-01", "1897-02", "1897-03", "1897-04", "1897-05", "1897-06", "1897-07", "1897-08", "1897-09", "1897-10", "1897-11", "1897-12",
                  "1898-01", "1898-02", "1898-03", "1898-04", "1898-05", "1898-06", "1898-07", "1898-08", "1898-09", "1898-10", "1898-11", "1898-12",
                  "1899-01", "1899-02", "1899-03", "1899-04", "1899-05", "1899-06", "1899-07", "1899-08", "1899-09", "1899-10", "1899-11", "1899-12",
                  "1900-01", "1900-02", "1900-03", "1900-04", "1900-05", "1900-06", "1900-07", "1900-08", "1900-09", "1900-10", "1900-11", "1900-12",
                  "1901-01", "1901-02", "1901-03", "1901-04", "1901-05", "1901-06", "1901-07", "1901-08", "1901-09", "1901-10", "1901-11", "1901-12",
                  "1902-01", "1902-02", "1902-03", "1902-04", "1902-05", "1902-06", "1902-07", "1902-08", "1902-09", "1902-10", "1902-11", "1902-12",
                  "1903-01", "1903-02", "1903-03", "1903-04", "1903-05", "1903-06", "1903-07", "1903-08", "1903-09", "1903-10", "1903-11", "1903-12",
                  "1904-01", "1904-02", "1904-03", "1904-04", "1904-05", "1904-06", "1904-07", "1904-08", "1904-09", "1904-10", "1904-11", "1904-12",
                  "1905-01", "1905-02", "1905-03", "1905-04", "1905-05", "1905-06", "1905-07", "1905-08", "1905-09", "1905-10", "1905-11", "1905-12",
                  "1906-01", "1906-02", "1906-03", "1906-04", "1906-05", "1906-06", "1906-07", "1906-08", "1906-09", "1906-10", "1906-11", "1906-12",
                  "1907-01", "1907-02", "1907-03", "1907-04", "1907-05", "1907-06", "1907-07", "1907-08", "1907-09", "1907-10", "1907-11", "1907-12",
                  "1908-01", "1908-02", "1908-03", "1908-04", "1908-05", "1908-06", "1908-07", "1908-08", "1908-09", "1908-10", "1908-11", "1908-12",
                  "1909-01", "1909-02", "1909-03", "1909-04", "1909-05", "1909-06", "1909-07", "1909-08", "1909-09", "1909-10", "1909-11", "1909-12",
                  "1910-01", "1910-02", "1910-03", "1910-04", "1910-05", "1910-06", "1910-07", "1910-08", "1910-09", "1910-10", "1910-11", "1910-12"]
var months     = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var dateSlider = document.getElementById('slider-date');

// Create a string representation of the date.
var d = "1910-03";
function formatDate(d) {
    date = new Date(d)
    return months[date.getMonth()] + " " + date.getFullYear();
}

function timestamp(str) {
    return new Date(str).getTime();
}

var range_all_sliders = {
    'min': [ 0 ],
    'max': [ 251 ]
};

var pips_values = [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240];

noUiSlider.create(dateSlider, {

    range: range_all_sliders,
    step: 0.2,
    start: [12, 96],
    orientation: "vertical",
    connect: true,
    pips: {
        mode: 'values',
        values: pips_values,
        density: 4.5,
        stepped: true,
        format: wNumb({
            decimals: 0,
            edit: function( value ) {
                value = years[Math.round(value)];
                date = new Date( value );
                return date.getFullYear(); }
        })
    },
    format: wNumb({
        decimals: 0
    }),
    tooltips: [
        wNumb({
            decimals: 0,
            edit: function( value ) {
                value = formatDate(new Date(years[Math.round(value)]));
                return value; }
        }),
        wNumb({
            decimals: 0,
            edit: function( value ) {
                value = formatDate(new Date(years[Math.round(value)]));
                return value; }
        })
    ]
});

var dateValues = [
    document.getElementById('date-start'),
    document.getElementById('date-end')
];


dateSlider.noUiSlider.on('update', function (values, handle) {

    dateValues[handle].innerHTML = formatDate(new Date(years[values[handle]]));
});






function removeEmpty(obj) {
  Object.keys(obj).forEach(function(key) {
    (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
    (obj[key] === '' || obj[key] === null) && delete obj[key]
  });
  return obj;
};
;


$(document).ready(function(){
    $.getJSON("../data/itineraries.json", function (data) {

        var arrItems = [];

        $.each(data, function (index, value) {
            
            arrItems.push(value);
        });

        function stripUndefined (arr) {

            return arr.reduce(function (result, item) {

                result.push( Array.isArray(item) && !item.length ? stripUndefined(item) : item );
                return result;
            }, []);
        }

        console.log(data);

    }).fail(function(){

        console.log("An error has occurred.");
    });
});

// AUTHOR IDs

$.getJSON("../data/author_ids.json", function(data) {

    var i=0;
    for( var key in data ) {

        var AuthorName = (data[key]);
        var AuthorKey = (Object.keys(data)[i]);

        $("#authors-list").append("<a data-key='" + AuthorKey + "' class='author a-" + i + "'>" + AuthorName + "</a>");

        i++;
    }
}).fail(function() {
    console.log("An error has occurred.");
});












// DRAW THE MAP

$(function() {

    var breakpoint = 800;
    var allTags = [];

    setupMap();

    function setupMap() {

        var map = L.map('map', {
            center: [34.05, -118.25],
            zoom: 7,
            scrollWheelZoom: false,
            tap: false,
            attributionControl: false,
            zoomControl: false
        });

        var tileLayer = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        var attribution = "attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'";
        L.tileLayer(tileLayer, {attribution}).addTo(map);

        var routes, coords;
        $.getJSON('../assets/places.sample.json', function(data) {
            routes = data.routes;
            coords = data.coords;

            routes.forEach(function(route){
                setupRoute(route);
            });

            var bounds = [];
            for (var coord in coords) {
                bounds.push(coords[coord]);
            }
            map.fitBounds(bounds);
            $(window).resize(function() { map.fitBounds(bounds) });
        });


        function setupRoute(route) {

            var places = route.places;
            var latlngs = [];
            for (var i = 0; i < places.length; i++) {

                if (i+1 < places.length) {

                    var pname1 = places[i],
                        latlng1 = coords[pname1],
                        pname2 = places[i+1],
                        latlng2 = coords[pname2];

                    var offsetX = latlng2[1] - latlng1[1],
                        offsetY = latlng2[0] - latlng1[0];

                    var r = Math.sqrt( Math.pow(offsetX, 2) + Math.pow(offsetY, 2) ),
                        theta = Math.atan2(offsetY, offsetX);

                    var thetaMin = (3.14/12),
                        thetaMax = (3.14/8),
                        thetaOffset = Math.random() * (thetaMax - thetaMin) + thetaMin;

                    var r2 = (r/2)/(Math.cos(thetaOffset)),
                        theta2 = theta + thetaOffset;

                    var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
                        midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

                    var midpointLatLng = [midpointY, midpointX];

                    latlngs.push(latlng1, midpointLatLng, latlng2);

                    var pathOptions = {
                        color: 'rgba(80,80,80,0.5)',
                        weight: 2
                    }

                    // if (typeof document.getElementById('map').animate === "function") {
                    //     var durationBase = 2000;
                    //     var duration = Math.sqrt(Math.log(r)) * durationBase;
                    //     pathOptions.animate = {
                    //         duration: duration,
                    //         iterations: Infinity,
                    //         easing: 'ease-in-out',
                    //         direction: 'alternate'
                    //     }
                    // }

                    var curvedPath = L.curve(
                        [
                            'M', latlng1,
                            'Q', midpointLatLng,
                                 latlng2
                        ], pathOptions).addTo(map);

                }
            };

        }

    }
});