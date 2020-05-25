$( document ).ready(function() {
    console.log( "ready!" );
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var pointList=[[48.9109,2.54615],[43.6047,1.44421],[43.6047,1.44421],[49.3646,6.1717],[48.8566,2.35222],[51.5074,-0.127758],[43.7102,7.26195],[51.5074,-0.127758],[33.6647,-117.1743],[33.6647,-117.1743]];
var marker = L.marker([48.9109,2.54615]).addTo(mymap);
marker.bindPopup("37.170.203.249<br>Free Mobile SAS<br>AS51207 Free Mobile SAS");

var marker = L.marker([43.6047,1.44421]).addTo(mymap);
marker.bindPopup("194.149.164.102<br>Free<br>");

var marker = L.marker([43.6047,1.44421]).addTo(mymap);
marker.bindPopup("194.149.166.13<br>Free<br>");

var marker = L.marker([49.3646,6.1717]).addTo(mymap);
marker.bindPopup("149.11.115.13<br>Cogent Communications<br>AS174 Cogent Communications");

var marker = L.marker([48.8566,2.35222]).addTo(mymap);
marker.bindPopup("154.54.61.21<br>Cogent Communications<br>AS174 Cogent Communications");

var marker = L.marker([51.5074,-0.127758]).addTo(mymap);
marker.bindPopup("154.54.60.174<br>Cogent Communications<br>AS174 Cogent Communications");

var marker = L.marker([43.7102,7.26195]).addTo(mymap);
marker.bindPopup("130.117.48.146<br>Cogent Communications<br>AS174 Cogent Communications");

var marker = L.marker([51.5074,-0.127758]).addTo(mymap);
marker.bindPopup("149.6.9.250<br>Cogent Communications<br>AS174 Cogent Communications");

var marker = L.marker([33.6647,-117.1743]).addTo(mymap);
marker.bindPopup("192.124.249.11<br>Sucuri<br>AS30148 Sucuri");

var marker = L.marker([33.6647,-117.1743]).addTo(mymap);
marker.bindPopup("192.124.249.11<br>Sucuri<br>AS30148 Sucuri");

var firstpolyline = new L.Polyline(pointList, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(mymap);
mymap.fitBounds(firstpolyline.getBounds());
});