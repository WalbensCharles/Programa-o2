const prompt=require("prompt-sync")();

function multipli_AD(nu1,nu2){
    let res=0;
    for(let i=0; i<nu2; i++){
        res += nu1;
    }
    return res;
}
let num1=Number(prompt("digite um numero : "));
let num2=Number(prompt("digite o multiplicador : "));
let resul=multipli_AD(num1,num2);
console.log(`resultado ${resul} `);
