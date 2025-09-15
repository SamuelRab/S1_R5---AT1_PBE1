const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const usuarioEsperado = "Samukinhaébonito"; // usuário esperado.
const senhaEsperada = "programador"; // senha do usuário esperada.

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body; // Constante do usuário e da senha.

  if (usuario === usuarioEsperado && senha === senhaEsperada) {
    return res.json({ mensagem: "Login realizado com sucesso!" }); // Mostra que o usuário e a senha colocados estão corretos.
  }

  return res.status(500).json({
    erro: "Usuário ou senha inválidos", // mostra que o usuário e a senha estão errados, então estão inválidos.
    usuario: usuario, // Campo "usuario" adiciona no JSON o valor digitado pelo cliente, para mostrar quem tentou fazer login.
  });
});

app.listen(PORT, () => { //função seta, e call back retorna para outra função 
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});