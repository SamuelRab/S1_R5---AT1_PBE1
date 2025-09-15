const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/mensagem', (req, res) => {
    try {
       const {novoUsuario} = req.body; // Constante do novo usuário.
       console.log(novoUsuario); 
       res.status(201).json({message: `Olá, ${novoUsuario.nomeUsuario}! Você tem ${novoUsuario.idadeUsuario} anos e torce para o ${novoUsuario.timeFavorito}!`}); // Mensagem com as informações do usuário.
 
    } catch (error) {
     console.log(error); // Mensagem de erro.
     res.status(500).json(error); // Retorna o erro 500.
    }
 
 });

 app.listen(PORT, () => { //função seta, e call back retorna para outra função 
    console.log(`Servidor rodando na porta ${PORT}`);
  });