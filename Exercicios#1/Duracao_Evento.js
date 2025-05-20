const prompt=require("prompt-sync")();

function Duracao(inicio, fim){

    if(inicio>fim){
        return (fim+24)-inicio;
    }else{
        return fim-inicio;
    }
}

let Hi=Number(prompt("inicio :"));
let Hf=Number(prompt("Fim :"));
let Evento=Duracao(Hi,Hf);
console.log(`${Evento} horas`);