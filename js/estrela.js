const star = document.querySelector(".star");
const starFill = document.querySelector(".starFill");
const temaEsc = document.getElementById("temaEsc");

let isDarkMode = false; // Variável para rastrear o estado do tema

function fill() {
  if (star.style.display === "none") {
    starFill.style.display = "none";
    star.style.display = "block";
  } else {
    star.style.display = "none";
    starFill.style.display = "block";
  }
}

temaEsc.addEventListener("click", () => {
  if (isDarkMode) {
    // Voltar para o tema claro
    document.body.style.backgroundColor = "#ffffff"; // Cor de fundo clara
    document.body.style.color = "#000000"; // Texto escuro
    isDarkMode = false;
  } else {
    // Alterar para o tema escuro
    document.body.style.backgroundColor = "#747474"; // Cor de fundo escura
    document.body.style.color = "#ffffff"; // Texto claro
    isDarkMode = true;
  }
});
