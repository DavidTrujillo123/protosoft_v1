// Obtener datos
const loading_container = document.querySelector('.loading_container');
const nombre = result.usunombre;
const apellido = result.usuapellido;
const landscape = document.querySelector('.landscape');
const div_ejem_cards = document.querySelector('.ejem_cards');
const rutaPagina = window.location.pathname;
let url = 'https://protosoft-api.azurewebsites.net';
// let url = 'http://localhost:8080';

//#region Landscape

function putNames() {
    // Crear el elemento <h1>
    const h1Element = document.createElement('h1');

    // Asignar las clases 'title' y 'title_bienvenida'
    h1Element.classList.add('title', 'title_bienvenida');

    // Crear el elemento <span> para 'Proto'
    const spanElement1 = document.createElement('span');
    spanElement1.textContent = 'Proto';

    // Crear el elemento <span> para 'soft'
    const spanElement2 = document.createElement('span');
    spanElement2.textContent = 'soft';

    // Crear el elemento <p> para 'Susana Oria'
    const pElement = document.createElement('p');
    pElement.id = 'nombre_usuario';
    pElement.textContent = nombre + " ";

    // Crear el elemento <span> para 'Oria'
    const spanElement3 = document.createElement('span');
    spanElement3.textContent = apellido;

    // Agregar los elementos <span> al elemento <p>
    pElement.appendChild(spanElement3);

    // Agregar los elementos <span> y <p> al elemento <h1>
    h1Element.appendChild(document.createTextNode('Bienvenido a '));
    h1Element.appendChild(spanElement1);
    h1Element.appendChild(document.createTextNode('soft '));
    h1Element.appendChild(pElement);

    // Agregar el elemento <h1> al documento (por ejemplo, al <body>)
    landscape.appendChild(h1Element);
}

//#endregion


//#region Protistas descatados
//Funcion que pone la infomacion cuando se da click
function llenarInformacion(nombreComun, imgSrc, reino, filo, clase, sobrenombre, orden, familia, genero, autor, descripcion, ubicacionHabitat) {
    // Llenar información del div "ver_prot_inicio"
    let nombreComunElement = document.getElementById("nombre_comun");
    nombreComunElement.textContent = nombreComun;

    // Llenar información de la imagen
    let imgProtistaElement = document.getElementById("img_protista");
    imgProtistaElement.src = imgSrc;

    // Llenar información de los divs "container_pricipal_info"
    document.getElementById("ver_prot_reino").textContent = reino;
    document.getElementById("ver_prot_filo").textContent = filo;
    document.getElementById("ver_prot_clase").textContent = clase;
    document.getElementById("ver_prot_sobrenombre").textContent = sobrenombre;
    document.getElementById("ver_prot_orden").textContent = orden;
    document.getElementById("ver_prot_familia").textContent = familia;
    document.getElementById("ver_prot_genero").textContent = genero;
    document.getElementById("nombre_autor").textContent = autor;

    // Llenar información de los divs "container_secondary_info"
    document.getElementById("ver_prot_descripcion").textContent = descripcion;
    document.getElementById("ver_prot_habitat").textContent = ubicacionHabitat;
}

//Funcion creadora de imagenes al inicio
function createCardsEjem(element) {

    let nombre_cientifico = element.nombre_cientifico;
    let src_img = element.ruta_imagen;

    let ejemCardsInfo = document.createElement("div");
    ejemCardsInfo.className = "ejem_cards_info";

    let p = document.createElement("p");
    p.textContent = `${nombre_cientifico}`;

    let img = document.createElement("img");
    img.src = `${src_img}`;
    img.alt = `ejemplo de una ${nombre_cientifico}`;

    ejemCardsInfo.appendChild(p);
    ejemCardsInfo.appendChild(img);

    ejemCardsInfo.addEventListener('click', () => {
        llenarInformacion(element.nombre_cientifico,
            element.ruta_imagen,
            element.reino,
            element.filo,
            element.clase,
            element.nombre_vulgar,
            element.orden,
            element.familia,
            element.genero,
            element.usunombre,
            element.descripcion,
            element.habitat);
    });

    div_ejem_cards.appendChild(ejemCardsInfo);


    putActionBtnVermas(ejemCardsInfo);
}


//funcion para obtener datos
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

async function getRegistes(url) {
    try {
        const response = await getDataRegisters(`${url}/registers/users/ten`);
        loading_container.classList.add('inactive');
        response.forEach(element => {
            createCardsEjem(element);
        });

    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

async function getAllRegistes(url) {
    try {
        const response = await getDataRegisters(`${url}/registers/users`);
        response.forEach(element => {
            createCardsEjem(element);
        });
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

//#endregion

// if (rutaPagina === "/C:/Users/david/OneDrive/Escritorio/U/SEMESTRES/DISE%C3%91O/Prototipo/html/login/home_user.html") {
if (rutaPagina === "/protosoft_v1/html/login/home_user.html" || rutaPagina === "/C:/Users/david/OneDrive/Escritorio/U/SEMESTRES/DISE%C3%91O/Prototipo/html/login/home_user.html") {
    getRegistes(url);
    putNames();
} else {
    getAllRegistes(url);
}

