function Fatorial(num){
    if(num===0){
        return 1;
    }
    return num*Fatorial(num-1);
}
function calcularFatorial(){
    const numInput=document.getElementById('numero');
    const resultadoP=document.getElementById('resultado');
    const num=Number(numInput.value);

    if(isNaN(num)|| num<0){
        resultadoP.textContent="por favor digite um numero maior que 0"
        return ;
    }
    const fat=Fatorial(num);
    resultadoP.textContent=`O fatorial de ${num} è ${fat}`;
}