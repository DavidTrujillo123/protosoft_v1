const hamburgesa_menu = document.querySelector('.hamburgesa_menu');
const general_nav = document.querySelector('.general_nav');

const lanzarMenu = () =>{
    general_nav.classList.toggle('inactive');
};

hamburgesa_menu.addEventListener('click', lanzarMenu);
