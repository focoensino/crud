

var resultado = document.querySelector('#resultado')
var somar = document.querySelector('#somar')


function enviar(){
let nome = document.querySelector('#username').value
let idade = document.querySelector('#idade').value

create(nome,idade)
   
}

function create(name,idade){
var data = {

    prato:name,
    valor:idade
}

return firebase.database().ref().child('Pratos').push(data)
}


firebase.database().ref('Pratos').on('value',function(snapshot){
resultado.innerHTML  =''
let total = 0
snapshot.forEach(function(item){
  
  total += parseInt(item.val().valor) 
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(item.val().prato + ': ' +'R$:'+ item.val().valor))+'<br>'
    resultado.appendChild(li)

})

somar.innerHTML ='<br>' + 'A soma dos pratos é: R$ '+  total+ ',00'
})


