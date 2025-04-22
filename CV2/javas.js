var mybody=document.getElementById("pagebody");
mybody.style.backgroundColor="#E08907";

let image=document.createElement("img");
image.src="Walbens2.jpg";
image.alt="foto perfil";
image.style.width="200px";
image.style.borderRadius="1000px";
image.style.boxShadow="0px 0px 10px rgba(0,0,0,0.2)"
image.style.display="block"
image.style.margin="auto";


let titulo=document.createElement("h1");
titulo.textContent="Walbens Charles";
titulo.style.color="#0783E0";


let para1=document.createElement("p");
para1.textContent="Sou estudante de Ciência da Computação com forte interesse em desenvolvimento de software, automação de processos e resolução de problemas computacionais. Tenho experiência com projetos acadêmicos e pessoais usando linguagens como Python, JavaScript e C++, além de conhecimentos em frameworks como React e Node.js. Busco oportunidades para aplicar e aprimorar minhas habilidades técnicas, contribuindo de forma colaborativa em equipes de tecnologia.";
para1.style.color="#33658B"

let para2=document.createElement("p");
para2.textContent="Sou estudante de Ciência da Computação com formação em andamento e foco em desenvolvimento e infraestrutura em nuvem. Tenho conhecimentos em Python, Java, C, C++, HTML, CSS e JavaScript, além de familiaridade com conceitos de computação em nuvem. Concluí recentemente a certificação AWS Cloud Practitioner, que reforçou minha compreensão dos principais serviços e boas práticas da AWS. Estou em busca da minha primeira oportunidade profissional para aplicar e expandir minhas habilidades técnicas, contribuindo com entusiasmo e vontade de aprender em ambientes colaborativos."
para2.style.color="#614F33";


mybody.appendChild(image);
mybody.appendChild(titulo);
mybody.appendChild(para1);
mybody.appendChild(para2);
