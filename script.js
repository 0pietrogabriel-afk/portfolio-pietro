const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    botaoTema.textContent = "☀️ Tema claro";
  } else {
    botaoTema.textContent = "🌙 Tema escuro";
  }
});

document.getElementById("ano").textContent = new Date().getFullYear();
