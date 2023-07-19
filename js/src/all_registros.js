async function getAllregistros(url, uData) {
    try {
        const response = await postUserId(`${url}/registers/misregistros`, uData);
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