const reino_input = document.querySelector('.reino');
let select_filo = document.getElementById("filo");
let select_clase = document.getElementById("clase");
let url = 'http://localhost:8080';

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

//get reino
async function getReino(url){
    try {
        let reino;
        const response = await getDataProt(`${url}/registers/reinos`);
        reino = response[0];
        reino_input.id = reino.reiid;
        reino_input.value = reino.reinombre;
    } catch (error) {
        console.log(error);
    }
}

//get filos
async function getFilos(url, id){
    try {
        const response = await getDataProt(`${url}/registers/filos?id=${id}`);
        console.log(response);
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.filid;
            optionElement.text = option.filnombre;
            optionElement.addEventListener('click', getClases(url, option.filid));
            select_filo.appendChild(optionElement);
          });
    } catch (error) {
        console.log(error);
    }
}

//get clases
async function getClases(url, id){
    try {
        const response = await getDataProt(`${url}/registers/clases?id=${id}`);
        console.log(response);
        response.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.value = option.claid;
            optionElement.text = option.clanombre;
            select_clase.appendChild(optionElement);
          });
    } catch (error) {
        console.log(error);
    }
}

getReino(url);
getFilos(url, {id: `${reino_input.id}`});




