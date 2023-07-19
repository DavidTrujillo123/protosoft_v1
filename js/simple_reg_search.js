async function getRegisters(url) {
    try {
        const response = await getDataRegisters(`${url}/registers/simple`);
        console.log(response);
        response.forEach(element => { 
            createCardsEjem(element); 
        });
        // loading_container.classList.add('inactive');
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

getRegisters(url);