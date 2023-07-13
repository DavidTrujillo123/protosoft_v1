const father_form = document.querySelector('.login_into');
const primer_create_form = document.querySelector('.primer_create_form');
const segundo_create_form = document.querySelector('.segundo_create_form');
const tercero_create_form = document.querySelector('.tercero_create_form');
const cuarto_create_form = document.querySelector('.cuarto_create_form');
const cuenta_pasos = document.querySelector('.cuenta_pasos');
const pasos_list = cuenta_pasos.querySelectorAll('li');
const bnt_siguiente = document.querySelector('.bnt_siguiente');
const bnt_crear_cuenta = document.querySelector('.bnt_crear_cuenta');
console.log(cuarto_create_form);
// const inputs = document.querySelectorAll('input');
// const inputs_f1 = Array.from(inputs).slice(0, 5);
// const inputs_f2 = Array.from(inputs).slice(7, 11);

//cambiar de formulario
const change_state = (form_active, form_inactive_1, form_inactive_2, form_inactive_3, clase) => {
    form_inactive_1.classList.add(clase);
    form_inactive_2.classList.add(clase);
    form_inactive_3.classList.add(clase);
    form_active.classList.remove(clase);
}

// Cambiar en btn_siguiente
const cambiar_fomr_create = () => {
    if (!primer_create_form.classList.contains('inactive')) {
        console.log(cuarto_create_form);
        change_state(segundo_create_form, primer_create_form, tercero_create_form, cuarto_create_form, 'inactive');
        change_state(pasos_list[1], pasos_list[0], pasos_list[2], pasos_list[3], 'pasos_inactive');
        father_form.classList.remove('gigant_container');
    }
    else if (!segundo_create_form.classList.contains('inactive')) {
        change_state(tercero_create_form, primer_create_form, segundo_create_form, cuarto_create_form, 'inactive');
        change_state(pasos_list[2], pasos_list[0], pasos_list[1], pasos_list[3], 'pasos_inactive');
        father_form.classList.remove('gigant_container');
        
    }else if (!tercero_create_form.classList.contains('inactive')){
        change_state(cuarto_create_form, primer_create_form, segundo_create_form, tercero_create_form, 'inactive');
        change_state(pasos_list[3], pasos_list[0], pasos_list[1], pasos_list[2], 'pasos_inactive');
        father_form.classList.remove('gigant_container');
    }
    else{
        primer_create_form.classList.remove('inactive');
        segundo_create_form.classList.remove('inactive');
        tercero_create_form.classList.remove('inactive');
        cuarto_create_form.classList.remove('inactive');
        father_form.classList.add('gigant_container');
        bnt_siguiente.classList.add('inactive');
        bnt_crear_cuenta.classList.remove('inactive');
    }
}

bnt_siguiente.addEventListener('click', cambiar_fomr_create);
// pasos_list[0].addEventListener('click', () => {
//     change_state(primer_create_form, segundo_create_form, tercero_create_form, 'inactive');
//     change_state(pasos_list[0], pasos_list[1], pasos_list[2], 'pasos_inactive');
// });
// pasos_list[1].addEventListener('click', () => {

//     change_state(segundo_create_form, primer_create_form, tercero_create_form, 'inactive');
//     change_state(pasos_list[1], pasos_list[0], pasos_list[2], 'pasos_inactive');

// });
// pasos_list[2].addEventListener('click', () => {

//     change_state(tercero_create_form, primer_create_form, segundo_create_form, 'inactive');
//     change_state(pasos_list[2], pasos_list[0], pasos_list[1], 'pasos_inactive');
//     bnt_siguiente.classList.add('inactive');
//     bnt_crear_cuenta.classList.remove('inactive');

// });
