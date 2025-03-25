// Atribuindo elementos às variáveis
const ratingElement = document.getElementById('rating');
const reviewElement = document.getElementById('review');
const sellsElement = document.getElementById('sells');
 
// Função para aumentar a pontuação de rating
function increaseRating() {
  let currentRating = parseFloat(ratingElement.innerText);
  if (currentRating < 5) {
    ratingElement.innerText = (currentRating + 0.5).toFixed(1);  // Aumenta 0.5 no rating até o máximo de 5
  }
}
 
// Função para aumentar o número de reviews
function increaseReview() {
  let currentReview = parseFloat(reviewElement.innerText.replace('k', '')) * 1000;  // Remove o 'k' e converte para número
  currentReview += 100;  // Aumenta 100 reviews
  reviewElement.innerText = (currentReview / 1000).toFixed(1) + 'k';  // Converte de volta para 'k'
}
 
// Função para aumentar o número de vendas
function increaseSells() {
  let currentSells = parseInt(sellsElement.innerText.replace('k', '')) * 1000;  // Remove o 'k' e converte para número
  currentSells += 50;  // Aumenta 50 vendas
  sellsElement.innerText = (currentSells / 1000).toFixed(1) + 'k';  // Converte de volta para 'k'
}
 
// Adicionando eventos de clique
ratingElement.addEventListener('click', increaseRating);
reviewElement.addEventListener('click', increaseReview);
sellsElement.addEventListener('click', increaseSells);