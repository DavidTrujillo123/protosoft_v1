const principal_container_ver_prot = document.querySelector('.principal_container_ver_prot');
const btn_cerra_ver_prot = document.querySelector('.btn_cerrar');

const showProtist = () => {
    principal_container_ver_prot.classList.remove('inactive');
}

function putActionBtnVermas(cards) {
    cards.addEventListener('click', showProtist);
}

function closeVermas() {
    principal_container_ver_prot.classList.add('inactive');
}

btn_cerra_ver_prot.addEventListener('click', closeVermas);
