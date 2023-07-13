const POST_email = document.getElementById('POST-email');
const POST_password = document.getElementById('POST-password');
const POST_nombres = document.getElementById('POST-nombres');
const POST_apellidos = document.getElementById('POST-apellidos');
const roles = document.getElementsByName("rol");
// const bnt_crear_cuenta = document.querySelector('.bnt_crear_cuenta');
let url = 'https://protosoft-api.azurewebsites.net';
// const btn_

const isRol = (rol) =>{
    if(rol == 'estudiante')
        return 'EST';
    else if (rol == 'taxonomo'){
        return 'TAX';
    }
    else{
        return 'INV';
    }
}


const getRol = (radios) => {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

const postDataNewUsers = async (url, data) => {
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


bnt_crear_cuenta.addEventListener('click', () => {
    let email = POST_email.value+"@utn.edu.ec";
    let password = POST_password.value;
    let name = POST_nombres.value;
    let lastName = POST_apellidos.value;
    let rol = isRol(getRol(roles));
    let uData = { rol, email, password, name, lastName};
    console.log(uData);
    postDataNewUsers(`${url}/users`, uData);
});
