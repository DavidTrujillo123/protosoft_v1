const btn = document.querySelector('.login_crear_cuenta_btn');
let url = 'https://protosoft-api.azurewebsites.net';
let user = null;

const postDataUsers = async (url, data) => {
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

async function isUser(url, uData){
    try {
        const response = await postDataUsers(`${url}/login`, uData);
        localStorage.setItem('user', JSON.stringify(response));
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = './login/home_user.html';
    } catch (error) {
        console.log(error);
        localStorage.setItem('isAuthenticated', 'false');
        alert('Usuario o contraseña erroneas');
    }
}

btn.addEventListener('click', () => {
    // getData(url);
    let email = document.querySelector('#POST-email').value;
    let password = document.getElementById('POST-password').value;
    let uData = { email, password };
    isUser(url, uData);
});