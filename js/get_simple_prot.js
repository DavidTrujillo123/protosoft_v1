const div_ejem_cards = document.querySelector('.ejem_cards');
const bouncing_loader = document.querySelector('.bouncing-loader');
let url = 'https://protosoft-api.azurewebsites.net';
// let url = 'http://localhost:8080';

const goLogin = () => {
    let respuesta = confirm('Necesitas una cuenta para ver más. Inicia sesión o crea una');
    if (respuesta)
        window.location.href = '../html/login.html';
}

function createCardsEjem(element) {

    let nombre_cientifico = element.regnombre_cientifico;
    let src_img = element.imgruta;

    let ejemCardsInfo = document.createElement("div");
    ejemCardsInfo.className = "ejem_cards_info";

    let p = document.createElement("p");
    p.textContent = `${nombre_cientifico}`;

    let img = document.createElement("img");
    img.src = `${src_img}`;
    img.alt = `ejemplo de una ${nombre_cientifico}`;

    let cont_vermas = document.createElement('div');
    cont_vermas.className = 'vermas';

    let btn_vermas = document.createElement('button');
    btn_vermas.className = 'primary_btn btn_vermas';
    btn_vermas.textContent = 'Ver más'
    btn_vermas.addEventListener('click', goLogin);

    cont_vermas.appendChild(btn_vermas);

    ejemCardsInfo.appendChild(p);
    ejemCardsInfo.appendChild(img);
    ejemCardsInfo.appendChild(cont_vermas);
   
    div_ejem_cards.appendChild(ejemCardsInfo);    
}

const getDataRegisters = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return result;
};