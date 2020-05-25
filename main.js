$( document ).ready(function() {
    console.log( "ready!" );
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);




var pointList=[[48.8543,2.3527],[48.8047,2.28939],[48.8047,2.28939],[48.8047,2.28939],[48.8047,2.28939],[48.8566,2.35222],[37.4851,-122.147],[37.4851,-122.147],[48.8566,2.35222],[48.8566,2.35222],[48.8566,2.35222]];
var marker = L.marker([48.8543,2.3527]).addTo(mymap);
marker.bindPopup("109.221.137.225<br>France Telecom Orange<br>AS3215 Orange S.A.");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cb08:a004:202:193:253:77:11<br>Orange S.A.<br>AS3215 Orange S.A.");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cfc4:0:400::b<br>Orange S.A.<br>");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cfc4:0:500::b<br>Orange S.A.<br>");

var marker = L.marker([48.8047,2.28939]).addTo(mymap);
marker.bindPopup("2a01:cfc4:0:500::7<br>Orange S.A.<br>");

var marker = L.marker([48.8566,2.35222]).addTo(mymap);
marker.bindPopup("2001:688:0:3:3::6f<br>Orange S.A.<br>AS5511 Orange S.A.");

var marker = L.marker([37.4851,-122.147]).addTo(mymap);
marker.bindPopup("2620:0:1cff:dead:beef::78<br>Facebook, Inc.<br>AS32934 Facebook, Inc.");

var marker = L.marker([37.4851,-122.147]).addTo(mymap);
marker.bindPopup("2620:0:1cff:dead:beef::af7<br>Facebook, Inc.<br>AS32934 Facebook, Inc.");

var marker = L.marker([48.8566,2.35222]).addTo(mymap);
marker.bindPopup("2a03:2880:f01f:ffff::3b<br>Facebook, Inc.<br>AS32934 Facebook, Inc.");

var marker = L.marker([48.8566,2.35222]).addTo(mymap);
marker.bindPopup("2a03:2880:f11f:83:face:b00c:0:25de<br>Facebook, Inc.<br>AS32934 Facebook, Inc.");

var marker = L.marker([48.8566,2.35222]).addTo(mymap);
marker.bindPopup("2a03:2880:f11f:83:face:b00c:0:25de<br>Facebook, Inc.<br>AS32934 Facebook, Inc.");

var firstpolyline = new L.Polyline(pointList, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(mymap);
mymap.fitBounds(firstpolyline.getBounds());
});