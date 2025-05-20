const prompt=require("prompt-sync")();
let A=Number(prompt("Digite o numero A : "));
let B=Number(prompt("Digite o numero B :"));
let C=Number(prompt("Digite o numero C : "));


lados=[A,B,C,].sort((a,b)=>b-a);
A=lados[0];
B=lados[1];
C=lados[2];
console.log("\n");

if(A>= B+C){
    console.log("Não forma triangulo");
}else{
    if((A*A)===((B*B)+(C*C))){
        console.log("Triangulo retangulo");
    }else if((A*A)>((B*B)+(C*C))){
        console.log("triangulo obtusangulo");
    }else {
        console.log("Trinagulo acutangulo");
             
    } 
    if(A===B && B===C){
        console.log("Triangulo equilatero");
        
    }else if((A === C) || (A === B) || (B===C)){
        console.log("triangulo isoceles")
    }else{
        console.log("escaleno");
    }
} 