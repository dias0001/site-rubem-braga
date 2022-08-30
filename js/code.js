//Códigos para o hot site Rubens Braga

//cria um novo objeto da classe date
const tempo = new Date()

const txtData = tempo.getFullYear() + ' - hora ' + tempo.getHours() +  ' minuto: ' + tempo.getMinutes()

//elementos DOM 
const spanData = document.getElementById('data')
const btfechar = document.getElementById('btfechar')
//insere txtData dentro do ID "data
spanData.innerText = txtData

//ções do usuários (eventos)


//Ao clicar no Id "btfechar"
btfechar.addEventListener('click', function(){alert('olá mundo!!')})
   //ocultar o modal - css display:none


