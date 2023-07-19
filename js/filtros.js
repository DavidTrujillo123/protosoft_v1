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

