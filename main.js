const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_EYz298U2kTd89vDHrucmMGpGjknX2M4i9G5fnNusvBTppz1Bkubngk9SSF6ly6H9';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_EYz298U2kTd89vDHrucmMGpGjknX2M4i9G5fnNusvBTppz1Bkubngk9SSF6ly6H9';


const sError = document.getElementById('nooooo');

async function loadRandomMichis() {
const res = await fetch(API_URL_RANDOM);
const data = await res.json();
console.log('Random')
console.log(data)

if (res.status !== 200) {
sError.innerHTML = "hubo un error"  +  res.status;
} else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    img1.src = data[0].url;
    img2.src = data[1].url;
};
};


async function loadFavoritesMichis() {
    const response = await fetch(API_URL_FAVORITES);
    const data = await response.json();
    console.log("favoritos")
    console.log(data)
    }

loadRandomMichis();
loadFavoritesMichis();
