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

button.addEventListener('click', () => {
    radio = GetFilterRadio()
    let name = GetFilterName()
    let uData = { radio, name };
    getRegistersFilter(url, uData);
});