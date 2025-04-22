//adicinei um objeto na tabela
//chama
var tabela= document.getElementById("table-2");
//criar
var novalinha=tabela.insertRow();
var celula1=novalinha.insertCell(0);
var celula2=novalinha.insertCell(1);
//passar
celula1.innerHTML="futebol";
celula2.innerHTML="games";

//aqui adicionei uma imagem pelo html
//chama
document.getElementById("h2-ac").innerHTML="Activities";
//alterar  pelo html
document.getElementById("image1").setAttribute("src", "walbens2.jpg");

//adicionei um objeto na lista lista
//chama 
var lista=document.getElementById("lista1");
//criar
var lista01=document.createElement("li");
//rejistrar
lista01.textContent="cisco /cursesa"
//adicionar 
lista.appendChild(lista01);

//modifiquei  o paragrafo 2
var para =document.getElementById("para2");
para.textContent="meu video de aprentação";

//crie um button
var body=document.getElementById("bod");
var botao1=document.createElement("button");
var botao2=document.createElement("button");

botao1.textContent="clic em mim";
botao2.textContent="aperta aqui";
body.appendChild(botao1);
body.appendChild(botao2);



//trocar background

var bad=document.getElementById("bod");
bad.style.backgroundColor="black";
bad.style.color="yellow"


let bod=document.getElementById("para2");
bod.style.color="brown";
bod.style.backgroundColor="yellow";

function mudarcor(){
    var bode=document.getElementById("bod");
    bode.style.color="pink";
    bode.style.backgroundColor="green";
}


let pbody=document.getElementById("para1").style.color="pink";
