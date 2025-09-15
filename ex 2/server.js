const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/soma', (req, res) => {
    try {

        if (!isNaN(numUm) || !isNaN(numDois || !isNaN(numTres))) {
            res.status(500).json({message : 'Você não colocou nímeros, coloque novamente.'}); // Informa uma entrada errada de informações.
        }

       const {soma} = req.body; // Constante da soma.
       console.log(soma);
       const resultado = parseFloat(soma.numUm) + parseFloat(soma.numDois) + parseFloat(soma.numTres); // Cálculo da sima.

       res.status(201).json({message: `A soma dos números é ${resultado}`}); // Resposta com o resultado da soma.
 
    } catch (error) {
     console.log(error); // Mensagem de erro.
     res.status(500).json(error); // Retorna o erro 500.
    }
 
 });

 app.listen(PORT, () => { //função seta, e call back retorna para outra função 
    console.log(`Servidor rodando na porta ${PORT}`);
  });