const principal_container_ver_prot = document.querySelector('.principal_container_ver_prot');
const btn_cerra_ver_prot = document.querySelector('.btn_cerrar');
const btn_vermas = document.getElementsByClassName('btn_vermas');

const showProtist = () => {
    principal_container_ver_prot.classList.remove('inactive');
}

function putActionBtnVermas(flag) {
    for (let index = 0; index < btn_vermas.length; index++) {
        btn_vermas[index].addEventListener('click', showProtist);
    }
}

function closeVermas() {
    principal_container_ver_prot.classList.add('inactive');
}

btn_cerra_ver_prot.addEventListener('click', closeVermas);

putActionBtnVermas();