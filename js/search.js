const buscar_btn = document.querySelector('.buscar_btn');
const sin_resultados_container = document.querySelector('.sin_resultados');
const ejem_cards_container = document.querySelector('.ejem_cards');
const btn_vermas = document.querySelector('.btn_vermas');

const showNoFound = (flag) =>{
    // logica para activar

    if(flag){
        // quita sin resultados
        sin_resultados_container.classList.add('inactive');
        ejem_cards_container.classList.remove('inactive')
    }else{
        sin_resultados_container.classList.remove('inactive');
        ejem_cards_container.classList.add('inactive')
    }
    
}

const goLogin = () =>{
    let respuesta = confirm('Necesitas una cuenta para ver más. Inicia sesión o crea una');
    if (respuesta) 
        window.location.href = '../html/login.html';
}

buscar_btn.addEventListener('click', () => {showNoFound(true)});
btn_vermas.addEventListener('click', goLogin);