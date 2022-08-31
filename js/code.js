//Códigos para o hot site Rubens Braga

//cria um novo objeto da classe date
const tempo = new Date()

const txtData = tempo.getFullYear() + ' - Horas ' + tempo.getHours() + ' minutos: ' + tempo.getMinutes()

//elementos DOM 
const spanData = document.getElementById('data')
const bthamburguer = document.getElementById('bthamburguer')
const navphone = document.getElementById('navphone')
const btfechahamb = document.getElementById('btfechahamb')
//insere txtData dentro do ID "data
spanData.innerText = txtData

//ções do usuários (eventos)



bthamburguer.addEventListener('click', function(){
    navphone.style.display = 'block'
})

btfechahamb.addEventListener('click' , function(){
    navphone.style.display = 'none'
} )
