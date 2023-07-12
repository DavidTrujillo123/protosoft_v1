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
        const response = await postDataUsers(`${url}/searchUser`, uData);
        let encodedResult = encodeURIComponent(JSON.stringify(response));
        let redirectURL = `./login/home_user.html?result=${encodedResult}`;
        window.location.href = redirectURL;
    } catch (error) {
        console.log(error);
        alert('Usario o contraseña erroneas');
    }
}

btn.addEventListener('click', () => {
    // getData(url);
    let email = document.querySelector('#POST-email').value;
    let password = document.getElementById('POST-password').value;
    let uData = { email, password };
    isUser(url, uData);
});



// const fetchData = async (url) =>{
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;        
// }

// async function getData(url){
//     try {
//         const users = await fetchData(`${url}/users`);
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// }

// export { user };

// btn.addEventListener('click', () => {
//     let email = document.querySelector('#POST-email').value;
//     let password = document.getElementById('POST-password').value;

//     let uData = { email, password };
//     let uDataJson = JSON.stringify(uData);

//     console.log(uDataJson);

//     fetch(url, {
//         method: 'Post',
//         headers: { 'Content-Type': 'application/json' },
//         body: uDataJson
//     })
//         .then(response => { return response.json() })
//         .then(data => { 
//             console.log(data) 
//             user = data;
//         })
//         .catch(error => {
//             console.error('Error:', error),
//             alert('Usario o contraseña erroneas');
//         }
//         )
// });

