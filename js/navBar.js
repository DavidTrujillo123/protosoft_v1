const hamburgesa_menu = document.querySelector('.hamburgesa_menu');
const general_nav = document.querySelector('.general_nav');
const menu_registros = document.querySelector('.menu_registros');
const menu_perfil = document.querySelector('.menu_perfil')
const nav_registros = document.querySelector('#nav_registros')
const nav_perfil = document.querySelector('.perfil');

const lanzarMenuMobile = () =>{
    general_nav.classList.toggle('inactive_nav');
    menu_perfil.classList.toggle('inactive');
};

const lanzarMenuRegistros = () =>{
    menu_registros.classList.toggle('inactive');
    nav_registros.classList.toggle('active_nav');
}
const lanzarMenuPerfil = () =>{
    menu_perfil.classList.toggle('inactive');
}

hamburgesa_menu.addEventListener('click', lanzarMenuMobile);
nav_registros.addEventListener('click', lanzarMenuRegistros);
nav_perfil.addEventListener('click', lanzarMenuPerfil);
