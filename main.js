$( document ).ready(function() {
    console.log( "ready!" );
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
    L.tileLayer('https://api.maptiler.com/tiles/satellite-mediumres/{z}/{x}/{y}.jpg?key=iS9gs1LsLOJfuF3dQvLd', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


var pointList=[[48.8543,2.3527],[48.8047,2.28939],[48.8047,2.28939],[48.8047,2.28939],[48.8543,2.3527],[37.3382,-121.886]];
var marker = L.marker([48.8543,2.3527]).addTo(mymap);
marker.bindPopup("109.221.137.225<br>France Telecom Orange<br>AS3215 Orange S.A.");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cb08:a004:202:193:253:77:11<br>Orange S.A.<br>AS3215 Orange S.A.");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cfc4:0:400::b<br>Orange S.A.<br>");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cfc4:0:500::b<br>Orange S.A.<br>");

var marker = L.marker([48.8543,2.3527]).addTo(mymap);
marker.bindPopup("<br>France Telecom Orange<br>AS3215 Orange S.A.");

var marker = L.marker([37.3382,-121.886]).addTo(mymap);
marker.bindPopup("2604:ed40:1000:1711:ac0d:44ff:fed3:4160<br>UpCloud USA Inc<br>AS25697 UpCloud USA Inc");

var firstpolyline = new L.Polyline(pointList, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(mymap);
mymap.fitBounds(firstpolyline.getBounds());
});