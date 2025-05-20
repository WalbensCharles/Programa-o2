const prompt=require("prompt-sync")();

const MultiAd=(num1, num2)=>{
    if(num2==0){
        return 0;
    }
    return num1+(MultiAd(num1,num2-1));
}

let n1=Number(prompt("digite um numero: "));
let n2=Number(prompt("digite o multiplicador : "));

let AdMulti=MultiAd(n1,n2);

console.log(`Resultado : ${AdMulti}`);