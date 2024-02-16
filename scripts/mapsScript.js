// let map;

// async function initMap() {
//     // The location of Uluru
//     const position = { lat: -25.344, lng: 131.031 };
//     // Request needed libraries.
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps");
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//     // The map, centered at Uluru
//     map = new Map(document.getElementById("map"), {
//         zoom: 4,
//         center: position,
//         mapId: "DEMO_MAP_ID",
//     });

//     // The marker, positioned at Uluru
//     const marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Uluru",
//     });
// }

// initMap();

const getLongitude = async () => {
    try {
        const response = await axios.get("http://api.open-notify.org/iss-now.json");
        // console.log(response.data.iss_position.longitude);
        // console.log(response.data.iss_position.latitude);

        return response.data.iss_position.longitude
    }
    catch(e) {
        console.log(e);
    }
    
}

async function getLatitude() {
    try {
        const response = await axios.get("http://api.open-notify.org/iss-now.json");
        // console.log(response.data.iss_position.longitude);
        // console.log(response.data.iss_position.latitude);

        return response.data.iss_position.latitude
    }
    catch(e) {
        console.log(e);
    }
    
}

const lat = async () => {
    await getLatitude()
}
console.log(lat);
getLongitude();




// getLocaton();

// var map = L.map('map', {
//     center: [getLongitude(), getLatitude()],
//     zoom: 13
// });

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var map = L.map('map').setView([51.505, -0.09], 13);

// console.log("map",map)
