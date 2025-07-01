const map = L.map('map').setView([29.59012601341688, 52.585314720098346] , 10)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    zoom:12 ,
    minZoom : 5  ,
    maxZoom: 13,

}).addTo(map)
let marker = L.marker([29.594902646072292, 52.56883522873247] , ).addTo(map);
marker.bindPopup(`
    <h1  style="color : green ; ">این یک بیمه میباشد </h1>
    `)