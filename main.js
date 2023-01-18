const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_EYz298U2kTd89vDHrucmMGpGjknX2M4i9G5fnNusvBTppz1Bkubngk9SSF6ly6H9';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=100&api_key=live_EYz298U2kTd89vDHrucmMGpGjknX2M4i9G5fnNusvBTppz1Bkubngk9SSF6ly6H9';


const sError = document.getElementById('nooooo');

async function loadRandomMichis() {
const res = await fetch(API_URL_RANDOM);
const data = await res.json();
console.log('Random')
console.log(data)

if (res.status !== 200) {
sError.innerHTML = "hubo un error "  +  res.status;
} else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    

    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () =>saveFavouriteMichi(data[0].id);
    btn2.onclick = () => saveFavouriteMichi(data[1].id);
};
};


async function loadFavouriteMichis() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log("favoritos")
    console.log(data)

    if (res.status !==200) {
        sError.innerHTML = "Hubo un error: " + res.status + data.message;
    } else {
        data.forEach(michi => {
    const section = document.getElementById('favoritesMichis')
    const article = document.createElement('article');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    const btnText = document.createTextNode('sacar al michi de fvoritos');
    

    btn.appendChild(btnText);
    img.src = michi.image.url

    article.appendChild(img);
    article.appendChild(btn);
    section.appendChild(article);

        });
    }
    }

async function saveFavouriteMichi(id) {
const res = await fetch(API_URL_FAVORITES, {
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    },
    body: JSON.stringify({
    image_id: id,
    })
});

const data = res.json;
console.log('save');
console.log(res);
if (res.status !== 200) {
    sError.innerHTML = "Hubo un error: " + res.status + data.message;
} 
}



loadRandomMichis();
loadFavouriteMichis();

