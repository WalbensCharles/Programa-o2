const prompt = require('prompt-sync')();

while (true) {
    let entrada = prompt("Entre a data no formato (DD/MM/AA): ");
    if (!entrada) break;  // Sai do loop se não houver entrada (EOF)

    // Divide a string da data no formato DD/MM/AA
    let partes = entrada.split('/');

    // Extrai os valores
    let DD = partes[0];
    let MM = partes[1];
    let AA = partes[2];

    // Imprime nos formatos solicitados
    console.log(`${MM}/${DD}/${AA} \n`);
    console.log(`${AA}/${MM}/${DD}\n` );
    console.log(`${DD}-${MM}-${AA} \n`);
}
