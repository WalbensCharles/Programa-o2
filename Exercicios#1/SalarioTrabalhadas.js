const prompt=require("prompt-sync")();

function HorasTrabalhas(h,v){
    let saT=h*v;
    if(h>200){
        return acre=saT+(saT*0.05);
    }else{
        return saT;
    }
}        
        
let horasT=Number(prompt("Horas trabalhadas: "));
let valorT=Number(prompt("Valor da hora: "));

let Total=HorasTrabalhas(horasT,valorT);
console.log(`Horas trabalhadas: ${horasT} \n Valor da hora: ${valorT} \n Salario: ${Total.toFixed(2)} \n`);