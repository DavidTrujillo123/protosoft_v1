const primer_create_form = document.querySelector('.primer_create_form');
const segundo_create_form = document.querySelector('.segundo_create_form');
const tercero_create_form = document.querySelector('.tercero_create_form');
const cuenta_pasos = document.querySelector('.cuenta_pasos');
const pasos_list = cuenta_pasos.querySelectorAll('li'); 
const bnt_siguiente = document.querySelector('.bnt_siguiente');
const inputs = document.querySelectorAll('input');
const inputs_f1 = Array.from(inputs).slice(0, 5);
const inputs_f2 = Array.from(inputs).slice(7, 11);


// Validar formularios
const isValidate = (array) =>{
    let flag = true;
    array.forEach(element => {
        if(!element.validity.valid){
            flag = false;
            element.reportValidity();
        }
    });
    return flag;
}

//cambiar de formulario
const change_state = (form_active, form_inactive_1, form_inactive_2, clase) =>{ 
    form_inactive_1.classList.add(clase);
    form_inactive_2.classList.add(clase);
    form_active.classList.remove(clase);
}

// Cambiar en btn_siguiente
const cambiar_fomr_create = () =>{
    if(!primer_create_form.classList.contains('inactive')){
        if(isValidate(inputs_f1)){
            change_state(segundo_create_form,primer_create_form,tercero_create_form,'inactive');
            change_state(pasos_list[1], pasos_list[0], pasos_list[2],'pasos_inactive');
        }
    }
    else{
        if(isValidate(inputs_f2)){
            change_state(tercero_create_form,primer_create_form,segundo_create_form,'inactive');
            change_state(pasos_list[2], pasos_list[0], pasos_list[1],'pasos_inactive');
        }
    }
}

bnt_siguiente.addEventListener('click', cambiar_fomr_create);
pasos_list[0].addEventListener('click', () => { 
    change_state(primer_create_form,segundo_create_form,tercero_create_form,'inactive');
    change_state(pasos_list[0], pasos_list[1], pasos_list[2],'pasos_inactive');
});
pasos_list[1].addEventListener('click', () => { 
    if(isValidate(inputs_f1)){
        change_state(segundo_create_form,primer_create_form,tercero_create_form,'inactive');
        change_state(pasos_list[1], pasos_list[0], pasos_list[2],'pasos_inactive');
    }
});
pasos_list[2].addEventListener('click', () => { 
    if(isValidate(inputs_f1) && isValidate(inputs_f2)){
        change_state(tercero_create_form,primer_create_form,segundo_create_form,'inactive');
        change_state(pasos_list[2], pasos_list[0], pasos_list[1],'pasos_inactive');
    }
});