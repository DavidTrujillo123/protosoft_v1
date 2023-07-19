const button = document.querySelector('.buscar_btn');
const ejem_cards = document.querySelector('.ejem_cards');
const sin_resultados = document.querySelector('.sin_resultados');

const getDataRegistersFilter = async (url, data) => {
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
async function getRegistersFilter(url, data) {
    try {
        bouncing_loader.classList.remove('inactive');
        ejem_cards.innerHTML = '';

        const response = await getDataRegistersFilter(`${url}/filter`, data);
        if (response == '')
            sin_resultados.classList.remove('inactive');
        else {
            response.forEach(element => {
                createCardsEjem(element.nombre_cientifico, element.ruta_imagen);
            });
        }
        bouncing_loader.classList.add('inactive');
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

function GetFilterRadio() {
    const radioButtons = document.getElementById('filtros');
    const radios = radioButtons.querySelectorAll('input[type="radio"]');
    let flag = 'nombre'
    radios.forEach(radio => {
        if (radio.checked) {
            flag = radio.value
            return flag;
        }
    });
    return flag;
}

function GetFilterName() {
    const inputElement = document.getElementById('texto_filtro')
    const text = inputElement.value
    return text;
}

button.addEventListener('click', () => {
    radio = GetFilterRadio()
    let name = GetFilterName()
    let uData = { radio, name };
    getRegistersFilter(url, uData);
})