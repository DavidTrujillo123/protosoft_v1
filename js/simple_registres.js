async function getRegisters(url) {
    try {
        const response = await getDataRegisters(`${url}/registers/tensimple`);
        response.forEach(element => { 
            console.log(element);
            createCardsEjem(element.regnombre_cientifico, element.imgruta); 
        });
        bouncing_loader.classList.add('inactive');
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

getRegisters(url);