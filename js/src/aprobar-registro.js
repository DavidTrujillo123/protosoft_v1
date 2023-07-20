const user_info = JSON.parse(localStorage.getItem('user'));

const bouncing_loader = document.querySelector('.bouncing-loader');
const sin_resultados = document.querySelector('.sin_resultados');
const mis_registros = document.querySelector('.mis_registros');
// let url = 'https://protosoft-api.azurewebsites.net';
let url = 'http://localhost:8080';

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


const crearRegistros = (element) => {

    let id = element.registro_id;
    let estado = element.estado_registro;
    let reino = element.reino;
    let filo = element.filo;
    let clase = element.clase;
    let orden = element.orden;
    let familia = element.familia;
    let genero = element.genero;
    let nom_cient = element.nombre_cientifico;
    let nom_vulg = element.nombre_vulgar;
    let detalles = element.descripcion;
    let ubicacion = element.habitat;
    let p_img = element.ruta_imagen;

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
    if (estado == '3') {
        putest = 'Aprobado';
        classest = 'aprobar'
    }
    else if (estado == '2') {
        putest = 'Por aprobar';
        classest = 'por_aprobar'
    }
    else {
        putest = 'Rechazado';
        classest = 'rechazado'
    }

    let cont_div_estado = createInfo('title_info_prot', 'label_estado', 'Estado:', `info_prot ${classest}`, 'input_estado', `${putest}`);
    divColumn1.appendChild(cont_div_estado);
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






    //Icono Rechazar
    const container_eliminar = document.createElement('div');
    container_eliminar.setAttribute('class', 'container_eliminar');


    const eliminar_icono = document.createElement('img');
    eliminar_icono.setAttribute('src', '../../multimedia/icons8-cancelar-48.png');
    eliminar_icono.setAttribute('alt', 'icono para rechazar');

    container_eliminar.appendChild(eliminar_icono);

    container_eliminar.addEventListener('click', () => {
        const resultado = window.confirm('¿Estás seguro que deseas rechazar el registro?');
        if (resultado) {
            let h4 = cont_div_estado.querySelector('p');
            h4.className = 'info_prot rechazado';
            h4.textContent = 'Rechazado';
            updateRegister(url, { id: `${id}`, state: '1' });
        }
    });

    // Icono Aprobar
    const container_aceptar = document.createElement('div');
    container_aceptar.setAttribute('class', 'container_aceptar')

    const aceptar_icono = document.createElement('img');
    aceptar_icono.setAttribute('src', '../../multimedia/icons8-aceptar-30.png');
    aceptar_icono.setAttribute('alt', 'icono para aceptar');

    container_aceptar.appendChild(aceptar_icono);

    container_aceptar.addEventListener('click', () => {
        const resultado = window.confirm('¿Estás seguro que deseas aceptar el registro?');
        if (resultado) {
            let h4 = cont_div_estado.querySelector('p');
            h4.className = 'info_prot aprobar';
            h4.textContent = 'Aprobado';
            updateRegister(url, { id: `${id}`, state: '3' });
        }
    });







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

    container.appendChild(container_eliminar);
    container.appendChild(container_aceptar);
    container.appendChild(h3);
    container.appendChild(divInfo);
    container.appendChild(divDetalles1);
    container.appendChild(divDetalles2);
    mis_registros.appendChild(container);
}


const getAllRegistesUsers = async (url, data) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const result = await response.json();
    return result;
};


async function getAllRegistes(url) {
    try {
        const response = await getAllRegistesUsers(`${url}/registers/users`);
        if (response == '')
            sin_resultados.classList.remove('inactive');
        else {
            response.forEach(element => {
                crearRegistros(element);
            });
        }
        bouncing_loader.classList.add('inactive');
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

const putEstateRegisters = async (url, data) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Aquí enviamos los datos en el cuerpo de la solicitud.
    });
    const result = await response.json();
    return result;
}

const updateRegister = async (url, data) => {
    try {
        const response = await putEstateRegisters(`${url}/registers/updatestate`, data);
        alert(response.message);
        return response;

    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
}

getAllRegistes(url);