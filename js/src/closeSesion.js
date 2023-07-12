const closeSesion = document.querySelector('.closeSesion');

closeSesion.addEventListener('click', () =>{
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
});