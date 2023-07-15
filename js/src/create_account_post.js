const POST_email = document.getElementById('POST-email');
const POST_password = document.getElementById('POST-password');
const POST_nombres = document.getElementById('POST-nombres');
const POST_apellidos = document.getElementById('POST-apellidos');
const roles = document.getElementsByName("rol");
let url = 'https://protosoft-api.azurewebsites.net';
// let url = 'http://localhost:8080';


const getRol = (roles) => {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].checked) {
            return roles[i].value;
        }
    }
}

const postDataNewUsers = async (url, data) => {
    // console.log(JSON.stringify(data));
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

async function isNewUser(url, uData){
    try {
        const response = await postDataNewUsers(`${url}/users`, uData);
        // console.log(response);
        alert(response.message);
    } catch (error) {
        console.log(error);
        // alert('Usuario o contraseña erroneas');
    }
}

bnt_crear_cuenta.addEventListener('click', () => {
    let rolid = getRol(roles);
    let usucorreo = POST_email.value+"@utn.edu.ec";
    let usucontrasenia = POST_password.value;
    let usunombre = POST_nombres.value;
    let usuapellido = POST_apellidos.value;
    let usuestado = 'true';
    let usuimagen = null;
    let uData = { rolid, usucorreo, usucontrasenia, usunombre, usuapellido, usuestado, usuimagen};
    let ejem = isNewUser(url, uData);
});
