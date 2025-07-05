document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botaoMensagem");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", function () {
    mensagem.textContent = "Bem-vindo! Nunca desista dos seus sonhos. A tecnologia precisa de você!";
    mensagem.style.display = "block";
  });
});