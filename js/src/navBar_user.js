const result = JSON.parse(localStorage.getItem('user'));
let email = result.usucorreo;

const email_nav = document.getElementById('email_nav');
email_nav.textContent = email;