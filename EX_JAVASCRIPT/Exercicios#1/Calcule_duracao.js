function duracao(i,f){
    if(f>i){
        return f-i;
    }else{
        return (24-i)+f;
    }
}
let inicio=Number(prompt("inicio: "));
let fim =Number(prompt("fim: "));
tempo=duracao(inicio,fim);
console.log=(`Duração: ${tempo} horas`);