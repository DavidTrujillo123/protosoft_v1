const user_info = JSON.parse(localStorage.getItem('user'));

const bouncing_loader = document.querySelector('.bouncing-loader');
const sin_resultados = document.querySelector('.sin_resultados');
const mis_registros = document.querySelector('.mis_registros');
let url = 'https://protosoft-api.azurewebsites.net';
// let url = 'http://localhost:8080';

console.log(mis_registros);

// Función para crear información
function createInfo(titleClass, labelId, labelText, infoClass, inputId, inputText) {
    const divRegistrosInfo = document.createElement('div');
    divRegistrosInfo.setAttribute('class', 'registros_info');

    const h4 = document.createElement('h4');
    h4.setAttribute('class', titleClass);
    h4.setAttribute('id', labelId);
    h4.textContent = labelText;

    const p = document.createElement('p');
    p.setAttribute('class', infoClass);
    p.setAttribute('id', inputId);
    p.textContent = inputText;

    divRegistrosInfo.appendChild(h4);
    divRegistrosInfo.appendChild(p);

    return divRegistrosInfo;
}

// Función para crear detalles
function createDetalles(labelText, contentText) {
    const divDetalles = document.createElement('div');
    divDetalles.setAttribute('class', 'detalles_mis_reg');

    const h4 = document.createElement('h4');
    h4.setAttribute('class', 'title_info_prot');
    h4.textContent = labelText;

    const p = document.createElement('p');
    p.textContent = contentText;

    divDetalles.appendChild(h4);
    divDetalles.appendChild(p);

    return divDetalles;
}

// Función para crear columnas
function createColumn(columnClass) {
    const divColumn = document.createElement('div');
    divColumn.setAttribute('class', columnClass);

    return divColumn;
}


const crearRegistros = (estado, reino, filo, clase, orden, familia, genero, nom_cient, nom_vulg, detalles, ubicacion, p_img) => {

    // Crear el elemento del contenedor
    const container = document.createElement('div');
    container.setAttribute('class', 'mis_registros_container');

    // Crear elementos HTML
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'mis_registros_title');
    h3.textContent = 'Resumen';

    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'mis_registros_info');

    // Crear columnas
    const divColumn1 = createColumn('mis_registros_column');
    const divColumn2 = createColumn('mis_registros_column');
    const divColumn3 = createColumn('mis_registros_column');

    // Columna 1
    let putest;
    let classest;
    if (estado) {
        putest = 'Aprobado';
        classest = 'aprobar'
    }
    else {
        putest = 'Por aprobar';
        classest = 'por_aprobar'
    }
    divColumn1.appendChild(createInfo('title_info_prot', 'label_estado', 'Estado:', `info_prot ${classest}`, 'input_estado', `${putest}`));
    divColumn1.appendChild(createInfo('title_info_prot', '', 'Reino:', 'info_prot', '', `${reino}`));
    divColumn1.appendChild(createInfo('title_info_prot', 'label_filo', 'Filo:', 'info_prot', 'input_filo', `${filo}`));

    // Columna 2
    divColumn2.appendChild(createInfo('title_info_prot', 'label_clase', 'Clase:', 'info_prot', 'input_clase', `${clase}`));
    divColumn2.appendChild(createInfo('title_info_prot', 'label_orden', 'Orden:', 'info_prot', 'input_orden', `${orden}`));
    divColumn2.appendChild(createInfo('title_info_prot', 'label_familia', 'Familia:', 'info_prot', 'input_familia', `${familia}`));

    // Columna 3
    divColumn3.appendChild(createInfo('title_info_prot', 'label_genero', 'Género:', 'info_prot special_p', 'input_genero', `${genero}`));
    divColumn3.appendChild(createInfo('title_info_prot', 'label_nombre_cient', 'Nombre científico:', 'info_prot special_p', 'input_nombre_cient', `${nom_cient}`));
    divColumn3.appendChild(createInfo('title_info_prot', 'label_nombre_vul', 'Nombre vulgar:', 'info_prot', 'input__nombre_vul', `${nom_vulg}`));

    // Imagen
    const divImg = document.createElement('div');
    divImg.setAttribute('class', 'mis_registros_column column_img');
    const img = document.createElement('img');
    img.setAttribute('src', `${p_img}`);
    img.setAttribute('alt', '');
    divImg.appendChild(img);

    // Detalles 1
    const divDetalles1 = createDetalles('Detalles:', `${detalles}`);

    // Detalles 2
    const divDetalles2 = createDetalles('Ubicación y hábitat:', `${ubicacion}`);

    // Agregar elementos al DOM
    divInfo.appendChild(divColumn1);
    divInfo.appendChild(divColumn2);
    divInfo.appendChild(divColumn3);
    divInfo.appendChild(divImg);

    container.appendChild(h3);
    container.appendChild(divInfo);
    container.appendChild(divDetalles1);
    container.appendChild(divDetalles2);
    mis_registros.appendChild(container);
}


const postUserId = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
};

async function getMisregistros(url, uData) {
    try {
        const response = await postUserId(`${url}/registers/misregistros`, uData);
        console.log(response);
        if (response == '')
            sin_resultados.classList.remove('inactive');
        else {
            response.forEach(element => {
                crearRegistros(element.estado_registro,
                    element.reino,
                    element.filo,
                    element.clase,
                    element.orden,
                    element.familia,
                    element.genero,
                    element.nombre_cientifico,
                    element.nombre_vulgar,
                    element.descripcion,
                    element.habitat,
                    element.ruta_imagen
                );
            });
        }
        bouncing_loader.classList.add('inactive');

    } catch (error) {
        console.log(error);
    }
};

getMisregistros(url, { usuid: user_info.usuid });

