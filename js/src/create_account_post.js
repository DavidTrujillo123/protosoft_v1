const POST_email = document.getElementById('POST-email');
const POST_password = document.getElementById('POST-password');
const POST_nombres = document.getElementById('POST-nombres');
const POST_apellidos = document.getElementById('POST-apellidos');
const roles = document.getElementsByName("rol");
let url = 'https://protosoft-api.azurewebsites.net';


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
        alert('NICEEE');
    } catch (error) {
        console.log(error);
        // alert('Usuario o contraseña erroneas');
    }
}


bnt_crear_cuenta.addEventListener('click', () => {
    let email = POST_email.value+"@utn.edu.ec";
    let password = POST_password.value;
    let name = POST_nombres.value;
    let lastName = POST_apellidos.value;
    let rol = getRol(roles);
    let uData = { rol, email, password, name, lastName};
    // console.log(uData);
    // postDataNewUsers(`${url}/users`, uData);
    console.log(JSON.stringify(uData));
    isNewUser(url, uData);
});
