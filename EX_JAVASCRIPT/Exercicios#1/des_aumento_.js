//esee programa eu usei ARROW FUNCTION

const pagamento=(p,f)=>{

    if(f==1){
        console.log(` Preço do produto: ${p.toFixed(2)} \n Forma de pagamento: ${f} \n Preço a vista  ${(p-(p*0.05)).toFixed(2)}`);
    }else{
        if(f==2){
            console.log(` Preço do produto: ${p.toFixed(2)} \n Forma de pagamento: ${f} \n Preço a vista  ${(p+(p*0.10)).toFixed(2)}`);
        }
    }
}
let preco=Number(prompt("Preço do produto: "));
let forma =Number(prompt("Forma de pagamento: "));
pagamento(preco,forma);