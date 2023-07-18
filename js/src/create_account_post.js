const POST_email = document.getElementById('POST-email');
const POST_password = document.getElementById('POST-password');
const POST_nombres = document.getElementById('POST-nombres');
const POST_apellidos = document.getElementById('POST-apellidos');
const POST_telefono = document.getElementById('POST-telefono');
const POST_pregunta_recuperacion_1 = document.getElementById('POST-pregunta-recuperacion-1');
const POST_respuesta_recuperacion_1 = document.getElementById('POST-respuesta-recuperacion-1');
const POST_pregunta_recuperacion_2 = document.getElementById('POST-pregunta-recuperacion-2');
const POST_respuesta_recuperacion_2 = document.getElementById('POST-respuesta-recuperacion-2');
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
        alert(response.message);
        if (response.success == true)
            window.location.href = './login.html';
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
    let usutelefono = POST_telefono.value || null;
    let pregunta1 = POST_pregunta_recuperacion_1.value;
    let respuesta1 = POST_respuesta_recuperacion_1.value;
    let pregunta2 = POST_pregunta_recuperacion_2.value;
    let respuesta2 = POST_respuesta_recuperacion_2.value;
    let uData = { rolid, usucorreo, usucontrasenia, usunombre, usuapellido, 
                    usuestado, usuimagen, usutelefono, pregunta1, respuesta1, pregunta2, respuesta2};
    isNewUser(url, uData);
});
