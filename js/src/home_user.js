// Obtener datos
const urlParams = new URLSearchParams(window.location.search);
const encodedResult = urlParams.get('result');
const result = JSON.parse(decodeURIComponent(encodedResult));

let nombre = result.usunombre;
let apellido = result.usuapellido;
const landscape = document.querySelector('.landscape');


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
    pElement.textContent = nombre+" ";

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
putNames();
