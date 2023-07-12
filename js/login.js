const btn = document.querySelector('.login_crear_cuenta_btn');
let user;

btn.addEventListener('click', () => {
    let email = document.querySelector('#POST-email').value;
    let password = document.getElementById('POST-password').value;

    let uData = { email, password };
    let uDataJson = JSON.stringify(uData);

    console.log(uDataJson);

    fetch('https://protosoft-api.azurewebsites.net/searchUser', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: uDataJson
    })
        .then(response => { return response.json() })
        .then(data => { 
            console.log(data) 
            user = data;
        })
        .catch(error => {
            console.error('Error:', error),
            alert('Usario o contraseña erroneas');
        }
        )
});

