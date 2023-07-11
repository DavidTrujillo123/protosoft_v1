const sin_resultados_container = document.querySelector('.sin_resultados');
const ejem_cards_container = document.querySelector('.ejem_cards');
const buscar_btn = document.querySelector('.buscar_btn');

const showNoFound = (flag) => {
    // logica para activar

    if (flag) {
        // quita sin resultados
        sin_resultados_container.classList.add('inactive');
        ejem_cards_container.classList.remove('inactive')
    } else {
        sin_resultados_container.classList.remove('inactive');
        ejem_cards_container.classList.add('inactive')
    }
}

buscar_btn.addEventListener('click', () => { showNoFound(true) });