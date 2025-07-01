const map = L.map('map').setView([29.59012601341688, 52.585314720098346] , 10)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    zoom:12 ,
    minZoom : 5  ,
    maxZoom: 13,

}).addTo(map)


const shops = [
  {
      position: [29.6015588126909, 52.562343568182996],
      name: "فروشگاه مرکزی",
      description: "شعبه اصلی",
      img:'https://static.vecteezy.com/system/resources/previews/021/495/592/non_2x/3d-shop-icon-for-sale-and-decoration-png.png'
  },
  {
      position: [29.59782151068345, 52.56165988039249],
      name: "فروشگاه شمال",
      description: "شعبه شمال",
      img:'https://img.icons8.com/?size=50&id=343&format=png'
  }
];

const storeIcon = L.icon({
  iconUrl :'https://img.icons8.com/?size=48&id=8chNl15hy6jY&format=png',
  iconSize : [20 ,20]
})

const resutlOutput  = shops.forEach(shop => {
  L.marker(shop.position , {icon : storeIcon}).bindPopup(shop.description).addTo(map)
})