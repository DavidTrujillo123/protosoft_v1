const reino_input = document.querySelector('.reino');
const select_filo = document.getElementById("filo");
const select_clases = document.getElementById("clase");
const select_ordenes = document.getElementById("orden");
const select_familias = document.getElementById("familia");
const select_generos = document.getElementById("genero");
const select_especies = document.getElementById("especies");
const input_nom_cient = document.getElementById("nom_cient");
const input_nom_vulgar = document.getElementById("nom_vulgar");
const btn_registrar_pro = document.getElementById("btn_registrar");
const txtDescripcon = document.getElementById("descripcion");
const txtUbicacion = document.getElementById("ubicacion");

let url = 'https://protosoft-api.azurewebsites.net';
// let url = 'http://localhost:8080';

//general functions fectchs
const getDataProt = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const result = await response.json();
    return result;
}
const postDataProt = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}


//get reino
async function getReino(url) {
    try {
        let reino;
        const response = await getDataProt(`${url}/registers/reinos`);
        reino = response[0];
        reino_input.id = reino.reiid;
        reino_input.value = reino.reinombre;
        getFilos(url, { id: `${reino_input.id}` });
    } catch (error) {
        console.log(error);
    }
}

//get filos
async function getFilos(url, id) {
    try {
        const response = await postDataProt(`${url}/registers/filos`, id);
        console.log(response);
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.filid;
            optionElement.text = option.filnombre;
            select_filo.appendChild(optionElement);
        });
        let selectValue = select_filo.value;
        getClases(url, { id: `${selectValue}` });
    } catch (error) {
        console.log(error);
    }
}

//get clases
async function getClases(url, id) {
    try {
        const response = await postDataProt(`${url}/registers/clases/`, id);
        select_clases.innerHTML = "";
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.claid;
            optionElement.text = option.clanombre;
            select_clases.appendChild(optionElement);
        });
        let selectValue = select_clases.value;
        getOrdenes(url, { id: `${selectValue}` });
    } catch (error) {
        console.log(error);
    }
}

// get ordenes
async function getOrdenes(url, id) {
    try {
        const response = await postDataProt(`${url}/registers/ordenes/`, id);
        select_ordenes.innerHTML = "";
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.ordid;
            optionElement.text = option.ordnombre;
            select_ordenes.appendChild(optionElement);
        });
        let selectValue = select_ordenes.value;
        getFamilias(url, { id: `${selectValue}` });
    } catch (error) {
        console.log(error);
    }
}

// get familias
async function getFamilias(url, id) {
    try {
        const response = await postDataProt(`${url}/registers/familias/`, id);
        select_familias.innerHTML = "";
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.famid;
            optionElement.text = option.famnombre;
            select_familias.appendChild(optionElement);
        });
        let selectValue = select_familias.value;
        getGeneros(url, { id: `${selectValue}` });
    } catch (error) {
        console.log(error);
    }
}


// get genero
async function getGeneros(url, id) {
    try {
        const response = await postDataProt(`${url}/registers/generos/`, id);
        select_generos.innerHTML = "";
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.genid;
            optionElement.text = option.gennombre;
            select_generos.appendChild(optionElement);
        });
        let selectValue = select_generos.value;
        getEspecies(url, { id: `${selectValue}` });
    } catch (error) {
        console.log(error);
    }
}

// get especie
async function getEspecies(url, id) {
    try {
        const response = await postDataProt(`${url}/registers/especies/`, id);
        select_especies.innerHTML = "";
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.espid;
            optionElement.text = option.espnombre;
            select_especies.appendChild(optionElement);
        });
        putNombreCient();
    } catch (error) {
        console.log(error);
    }
}

//post registro de protista
async function postRegisto(url, data) {
    try {
        const response = await postDataProt(`${url}/registers`, data);
        alert(response.message);
        window.location.href = './registro_protista.html';
    } catch (error) {
        console.log(error);
    }
}


const putNombreCient = () => {
    let selectGenero = select_generos.options[select_generos.selectedIndex].text;
    let selectEspecie = select_especies.options[select_especies.selectedIndex].text;
    input_nom_cient.value = `${selectGenero} ${selectEspecie}`;
}

const putSelects = (selectValue, funcionGet) => {
    funcionGet(url, { id: `${selectValue.value}` });
}

getReino(url);
select_filo.addEventListener("change", () => {
    putSelects(select_filo, getClases);
});

select_clases.addEventListener("change", () => {
    putSelects(select_clases, getOrdenes);
});

select_ordenes.addEventListener("change", () => {
    putSelects(select_ordenes, getFamilias);
});

select_familias.addEventListener("change", () => {
    putSelects(select_familias, getGeneros);
});

select_generos.addEventListener("change", () => {
    putSelects(select_generos, getEspecies);
});

select_especies.addEventListener("change", putNombreCient);

btn_registrar_pro.addEventListener('click', ()=>{
    let registro = {
        usuid: JSON.parse(localStorage.getItem('user')).usuid,
        regestado: true,
        regnombre_cientifico: input_nom_cient.value,
        regnombre_vulgar: input_nom_vulgar.value, //ojo
        regespecie: select_especies.value,
        reggenero: select_generos.value,
        regfamilia: select_familias.value,
        regorden: select_ordenes.value,
        regclase: select_clases.value,
        regfilo: select_filo.value,
        regreino: reino_input.value,
        regdescripcion: txtDescripcon.value,
        reghabitat: txtUbicacion.value,
        img: src,
    };
    postRegisto(url, registro);
    console.log('aaa');
});







