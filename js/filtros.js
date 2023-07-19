const button = document.querySelector('.buscar_btn')

async function getRegisters(url) {
    try {
        const response = await getDataRegisters(`${url}/registers/simple`); 
        response.forEach(element => { 
            createCardsEjem(element); 
        });
        bouncing_loader.classList.add('inactive');
    } catch (error) {
        console.log(error);
        alert('Error interno del servidor');
    }
};

function GetFilterRadio() {
    const radioButtons = document.getElementById('filtros');
    const radios = radioButtons.querySelectorAll('input[type="radio"]');
  
    let flag = 'nombre'
    radios.forEach(radio => {
        if(radio.checked)
            flag = radio.value
    });
    console.log(flag)
    return flag
}

function GetFilterName() {
    const inputElement = document.getElementById('texto_filtro')
    const text = inputElement.value
    console.log(text)
    return text
}

button.addEventListener('click', ()=>{
    radio = GetFilterRadio()
    name = GetFilterName()
    let uData = {radio, name};
    let uDataJson = JSON.stringify(uData);
    
    //Get user
    fetch('https://protosoft-api.azurewebsites.net/filter',{
        method: 'Post',
        headers: {'Content-Type':'application/json'},
        body: uDataJson
    })
    .then(response => {return response.json()})
    .then(data => {console.log(data)})
    .catch(error => console.error('Error:', error))
})