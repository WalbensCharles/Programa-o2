const prompt=require("prompt-sync")();
function NumeroP_N(num){
    let posi=0;
    let nega =0;
    for(let i=0;i<4;i++){
        num=Number(prompt(`N${i+1}:`))
        if(num<0){
            nega ++;
        }else{
            posi++;
        }
    }
    console.log(`${posi} (+) e ${nega} (-)`)
}
NumeroP_N()