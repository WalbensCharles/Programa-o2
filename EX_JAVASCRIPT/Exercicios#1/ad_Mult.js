const prompt=require("prompt-sync")();

const imprimeS=(valor)=>{
    let soma=0;
    for(let i=0; i <= valor; i++){
        soma +=i;
    }
    console.log(`Resultado : ${soma} `);
}
let num=Number(prompt("digite um numero : "));
imprimeS(num);