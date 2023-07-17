const primer_create_form = document.querySelector('.primer_create_form');
const segundo_create_form = document.querySelector('.segundo_create_form');
const tercero_create_form = document.querySelector('.tercero_create_form');
const cuarto_create_form = document.querySelector('.cuarto_create_form');
const gigant_from = document.getElementById('gigant_from');
const create_form_list = [primer_create_form, segundo_create_form, tercero_create_form, cuarto_create_form];
const cuenta_pasos = document.querySelector('.cuenta_pasos');
const steps_list = cuenta_pasos.querySelectorAll('li');
const bnt_siguiente = document.querySelector('.bnt_siguiente');
const bnt_atras = document.querySelector('.bnt_atras');
const bnt_crear_cuenta = document.querySelector('.bnt_crear_cuenta');

//cambiar form v2
const change_state = (listele, part, clase) => {
    listele.forEach(element => {
        element.classList.add(clase);
        if (part == element)
            element.classList.remove(clase);
    });
    // gigant_from.classList.remove('principal_form');
}

const change_form = (part) => {
    change_state(create_form_list, part, 'inactive');
}

const change_steps = (part) => {
    change_state(steps_list, part, 'pasos_inactive');
}

const openGiganForm = () => {
    primer_create_form.classList.remove('inactive');
    segundo_create_form.classList.remove('inactive');
    tercero_create_form.classList.remove('inactive');
    cuarto_create_form.classList.remove('inactive');
    gigant_from.classList.add('principal_form');
    change_steps(steps_list[4]);
    bnt_siguiente.classList.add('inactive');
    bnt_crear_cuenta.classList.remove('inactive');
}

const retornState = () => {
    gigant_from.classList.remove('principal_form');
    bnt_siguiente.classList.remove('inactive');
    bnt_crear_cuenta.classList.add('inactive');
    bnt_atras.classList.remove('inactive');
}

// Cambiar en btn_siguiente
const cambiar_fomr_create = () => {
    if (!primer_create_form.classList.contains('inactive')) {
        change_form(segundo_create_form);
        change_steps(steps_list[1]);
        retornState();
    }
    else if (!segundo_create_form.classList.contains('inactive')) {
        change_form(tercero_create_form);
        change_steps(steps_list[2]);
        retornState();
    }else if (!tercero_create_form.classList.contains('inactive')){
        change_form(cuarto_create_form);
        change_steps(steps_list[3]);
        retornState();

    }
    else{
        openGiganForm();
        bnt_atras.classList.remove('inactive');
    }
}

const cambiar_fomr_create_retorn = () => {
    
    if (gigant_from.classList.contains('principal_form')){
        change_form(cuarto_create_form);
        change_steps(steps_list[3]);
        retornState();
    }
    else if (!primer_create_form.classList.contains('inactive')) {
        bnt_atras.classList.add('inactive');
    }
    else if (!segundo_create_form.classList.contains('inactive')) {
        change_form(primer_create_form);
        change_steps(steps_list[0]);
        retornState();
        bnt_atras.classList.add('inactive');
    }else if (!tercero_create_form.classList.contains('inactive')){
        change_form(segundo_create_form);
        change_steps(steps_list[1]);
        retornState();
    }
    else if (!cuarto_create_form.classList.contains('inactive')){
        // openGiganForm();
        change_form(tercero_create_form);
        change_steps(steps_list[2]);
    }
   
}

bnt_siguiente.addEventListener('click', cambiar_fomr_create);
bnt_atras.addEventListener('click', cambiar_fomr_create_retorn);

steps_list[0].addEventListener('click', () => {
    change_form(primer_create_form);
    change_steps(steps_list[0]);
    retornState();
    bnt_atras.classList.add('inactive');
});
steps_list[1].addEventListener('click', () => {
    change_form(segundo_create_form);
    change_steps(steps_list[1]);
    retornState();
    bnt_atras.classList.remove('inactive');
});
steps_list[2].addEventListener('click', () => {
    change_form(tercero_create_form);
    change_steps(steps_list[2]);
    retornState();
    bnt_atras.classList.remove('inactive');
});
steps_list[3].addEventListener('click', () => {
    console.log('aaa');
    change_form(cuarto_create_form);
    change_steps(steps_list[3]);
    retornState();
    bnt_atras.classList.remove('inactive');
});
steps_list[4].addEventListener('click', () => {
    openGiganForm();
    bnt_atras.classList.remove('inactive');
});