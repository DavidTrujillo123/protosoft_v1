async function getAllRegistes(url) {
    try {
        const response = await getDataRegisters(`${url}/registers/users`);
        response.forEach(element => {
            if(element.estado_registro == '3')
            createCardsEjem(element);
        });
        bouncing_loader.classList.add('inactive');
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};
getAllRegistes(url);