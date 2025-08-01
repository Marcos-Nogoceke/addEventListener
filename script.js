const botao = document.getElementById("btn");
const infoBox = document.getElementById("infoBox");
const clickCounter = document.getElementById("clickCount");
const som = document.getElementById("som");

let contador = 0;
let fundoEscuro = true;

botao.addEventListener("click", () => {
  contador++;

  // 1. Alternar fundo da página
  if (fundoEscuro) {
    document.body.style.backgroundColor = "#f0f6fc";
    document.body.style.color = "#111";
  } else {
    document.body.style.backgroundColor = "#0d1117";
    document.body.style.color = "#c9d1d9";
  }
  fundoEscuro = !fundoEscuro;

  // 2. Mostrar ou esconder a mensagem secreta
  infoBox.classList.toggle("hidden");

  // 3. Tocar som (opcional: adicione um arquivo click.mp3)
  som?.play();

  // 4. Atualizar contador de cliques
  clickCounter.textContent = `Cliques: ${contador}`;
});
