const express = require('express');
const app = express();
const port = 3000;

// Middleware para ler JSON no corpo das requisições
app.use(express.json());


// Rota soma
app.post('/soma', (req, res) => {
  const { num1, num2 } = req.body;  // Pega num1 e num2 do corpo JSON

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Envie num1 e num2 como números' });
  }

  const resultado = num1 + num2;

  res.json({ resultado });  // Retorna o resultado da soma
});

// Exemplo de endpoint para testar
app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nome: 'João' }, { id: 2, nome: 'Maria' }]);
});

app.listen(port, () => {
  console.log(`meu teste de servidor esta rodando no http://localhost:${port}`);
  
});
