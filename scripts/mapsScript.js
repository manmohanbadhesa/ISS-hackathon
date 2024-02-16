let long = 0;
let lat = 0;
let time=0;


const mapComponent = () => {
    return `
    <div id="map">
    </div>
    `
}

const dataComponent = (lat, long, time) => {
    return `
    <div class="data">
        <div class="location">
            <p class="location__latitude">
            ${lat}
            </p>
            <p class="location__longitude">
            ${long}
            </p>
        </div>
        <div class="time">
            <p class="time__value>
            ${time}
            </p>
        </div>
    </div>
    `
}


const getTime = async () => {
    try {
        const response = await axios.get("http://api.open-notify.org/iss-now.json");
        // console.log(response);
        // console.log(response.data.iss_position.latitude);
        time = response.data.timestamp

        return time
    }
    catch (e) {
        console.log(e);
    }

}

const getLongitude = async () => {
    try {
        const response = await axios.get("http://api.open-notify.org/iss-now.json");
        // console.log(response.data.iss_position.longitude);
        // console.log(response.data.iss_position.latitude);
        long = response.data.iss_position.longitude

        return long
    }
    catch (e) {
        console.log(e);
    }

}

async function getLatitude() {
    try {
        const response = await axios.get("http://api.open-notify.org/iss-now.json");
        // console.log(response.data.iss_position.longitude);
        // console.log(response.data.iss_position.latitude);
        const lat = response.data.iss_position.latitude
        return lat
    }
    catch (e) {
        console.log(e);
    }

}


const data = async () => {
    try {
        long = await getLongitude();
        lat = await getLatitude();
        time = await getTime();

        return dataComponent(lat,long, time);

    }
    catch (e) {

    }
}



const Main = async () => {
    return `
        <div>
        ${mapComponent()}
        ${await data()}
        </div>
    `
}

let root = document.querySelector('main');
root.innerHTML = Main();



var map = L.map('map').setView([49.285080, -123.114770], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var pulsingIcon = L.icon.pulse({ iconSize: [5, 5], color: 'red' });
var marker = L.marker([49.285080, -123.114770], { icon: pulsingIcon }).addTo(map);

const mapping = async () => {
    try {
        long = await getLongitude();
        lat = await getLatitude();

        marker.setLatLng([lat, long]).update();
        map.setView([lat, long]);


    }
    catch (e) {
        console.log(e)
    }
}

setInterval(mapping, 3000);


