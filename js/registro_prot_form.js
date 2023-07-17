const primer_create_form = document.querySelector('.primer_create_form');
const segundo_create_form = document.querySelector('.segundo_create_form');
const tercero_create_form = document.querySelector('.tercero_create_form');
const cuarto_create_form = document.querySelector('.cuarto_create_form');
const create_form_list = [primer_create_form, segundo_create_form, tercero_create_form, cuarto_create_form];
const cuenta_pasos = document.querySelector('.cuenta_pasos');
const steps_list = cuenta_pasos.querySelectorAll('li');
const bnt_siguiente = document.querySelector('.bnt_siguiente');
const bnt_crear_cuenta = document.querySelector('.bnt_crear_cuenta');

//cambiar form v2
const change_state = (list, part, clase) =>{
    list.forEach(element => {
        element.classList.add(clase);
        if(part == element)
            element.classList.remove(clase);
    });
}

const change_form = (part) =>{
    change_state(create_form_list, part, 'inactive');
}

const change_steps = (part) =>{
    change_state(steps_list, part, 'pasos_inactive');
}

const openGiganForm = () =>{
    primer_create_form.classList.remove('inactive');
    segundo_create_form.classList.remove('inactive');
    tercero_create_form.classList.remove('inactive');
    cuarto_create_form.classList.remove('inactive');
    change_steps(steps_list[4]);
    bnt_siguiente.classList.add('inactive');
    bnt_crear_cuenta.classList.remove('inactive');
}

// Cambiar en btn_siguiente
const cambiar_fomr_create = () => {
    if (!primer_create_form.classList.contains('inactive')) {
        change_form(segundo_create_form);
        change_steps(steps_list[1]);
    }
    else if (!segundo_create_form.classList.contains('inactive')) {
        change_form(tercero_create_form);
        change_steps(steps_list[2]);
    }else if (!tercero_create_form.classList.contains('inactive')){
        change_form(cuarto_create_form);
        change_steps(steps_list[3]);
    }
    else{
        openGiganForm();
    }
}

bnt_siguiente.addEventListener('click', cambiar_fomr_create);
steps_list[0].addEventListener('click', () => {
    change_form(primer_create_form);
    change_steps(steps_list[0]);
});
steps_list[1].addEventListener('click', () => {
    change_form(segundo_create_form);
    change_steps(steps_list[1]);
});
steps_list[2].addEventListener('click', () => {
    change_form(tercero_create_form);
    change_steps(steps_list[2]);
    // bnt_siguiente.classList.add('inactive');
    // bnt_crear_cuenta.classList.remove('inactive');
});
steps_list[3].addEventListener('click', () => {
    console.log('aaa');
    change_form(cuarto_create_form);
    change_state(steps_list[3]);
});
steps_list[4].addEventListener('click', openGiganForm);