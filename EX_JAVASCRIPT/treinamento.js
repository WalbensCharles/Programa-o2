const prompt=require("prompt-sync")();


let nome=prompt-sync("digite seu nome : ");
console.log(`bom dia ${nome}`);
let id=prompt-sync("digit your Id");
console.log(`your id card number is ${id} 🚫`);
//saida 
console.log("HEllo Wolrd");

//entrada 
// variaveis 
let numero=10;
let palavras='Walbens';
let peso =90.5;
let cor_preto = true;

//saidas
console.log(cor_preto);
console.error("errado");


 //dialogo de janela do navegator

 //alert("cuidado");
 //let opcao =confirm("tem certeza ativar localização");

 //digite seu nome na janela de dialogo navegador
  //let nome=prompt("digite seu nome")

  console.log("aqui termina o Basico \n");

  //while

let num =0;

while(num <5){
    console.log(num);
    num ++;
    
}
console.log("aqui termina o WHILE \n");

//for

for(let i =0; i<10;i++){
    console.log(i);
}
console.log("aqui termina o For \n");

function soma(a,b){
    return a+b;
}
console.log(soma(9,8));
console.log("aqui termina a function Normal #1 \n");

//usando Arrow function
const somar=(c,b)=>{
    console.log(c+b);
}
somar(10,5);
console.log("aqui termina a function Arrow \n");

//switch /case

const expr="limão";
switch(expr){
    case("laranja"):{
        console.log("Laranjas esta R$ 3,00/KG.");
        break;
    }
    case("manga"):
    case("limão"):{
        console.log("Mangas e limão estão R$ 4,79/KG.");
        break;
    }
    default:
        console.log(`Desculpe, estamos sem $"{expr}.`);
}
console.log("aqui termina o SWITH/CASE \n")