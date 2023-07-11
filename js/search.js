const btn_vermas = document.getElementsByClassName('btn_vermas');

const goLogin = () => {
    let respuesta = confirm('Necesitas una cuenta para ver más. Inicia sesión o crea una');
    if (respuesta)
        window.location.href = '../html/login.html';
}


function putActionBtnVermas(flag) {

    for (let index = 0; index < btn_vermas.length; index++) {
        btn_vermas[index].addEventListener('click', goLogin);
    }

}

putActionBtnVermas();
