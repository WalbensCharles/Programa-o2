const prompt=require("prompt-sync")();

const Sequencia=()=>{
    let max =0;
    let contador =0;
    while(1){
        let num=Number(prompt("digite un numero :"));
        if(num<=0)
            break;
        contador+=1;

        if(num>=10  && num<=20){
            max+=1;
        }
    }

    if(contador===0){
        console.log("A programa não recebe um numero valido")
    }else{
        let per=(max/contador)*100;
        console.log(`% entre 10 e 20 : ${per}%`);
    }
}

Sequencia();
