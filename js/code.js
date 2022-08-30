//Códigos para o hot site Rubens Braga

//cria um novo objeto da classe date
const tempo = new Date()

const txtData = tempo.getFullYear() + ' - hora ' + tempo.getHours() + ' minuto: ' + tempo.getMinutes()

//elementos DOM 
const spanData = document.getElementById('data')
const btfechar = document.getElementById('btfechar')
const divModal = document.getElementById('divModal')
//insere txtData dentro do ID "data
spanData.innerText = txtData

//ções do usuários (eventos)

//Ao clicar no Id "btfechar"
btfechar.addEventListener('click', function () {
    //ocultar o divModal - css display:none por javascript
    divModal = document.getElementById('divModal').style.disp
})
