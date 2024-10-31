
let markers = [
    [40.75009389761372, -74.02185029393092],
    [40.74003574621998, -74.02550161153796],
    [40.744353174093895, -74.02382634274453]
]

let center = markers.reduce((prev, curr) => [prev[0] + curr[0], prev[1] + curr[1]], [0, 0])
                    .map(x => x/(markers.length || 1))

const map = L.map('map').setView([40.75009389761372, -74.02185029393092], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,            
    attribution: '© OpenStreetMap'
}).addTo(map);





markers.forEach(
    marker => 
    L.marker(marker).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup()
);