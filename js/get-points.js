const map = L.map('map', {
    attributionControl: false  
  }).setView([29.59012601341688, 52.585314720098346], 12);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''  
  }).addTo(map);


const point1= [35.74154620688604, 51.35841508231554]
console.log(point1);

const point2= [35.71527952556794, 51.35320948870766]
const marker1 = L.marker(point1).addTo(map)
const marker2 = L.marker(point2).addTo(map)
const url = `http://router.project-osrm.org/route/v1/driving/${point1[1]},${point1[0]};${point2[1]},${point2[0]}?overview=full&geometries=geojson`


fetch(url).then(res =>res.json()).then(data =>{
    console.log(data)
    const coordinates = data.routes[0].geometry.coordinates
    console.log(coordinates)
    const latLang = coordinates.map(coor => [coor[1],coor[0]])
    console.log(latLang)
    L.polyline(latLang,{
        color: 'blue',
        weight: 4,
        opacity: 0.7
    }).addTo(map)
   })
