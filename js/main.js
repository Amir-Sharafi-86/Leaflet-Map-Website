const map = L.map('map').setView([29.59012601341688, 52.585314720098346] , 10)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    maxZoom: 19,

}).addTo(map)