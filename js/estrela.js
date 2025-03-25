const star = document.querySelector(".star");
const starFill = document.querySelector(".starFill");

function fill() {
  if (star.style.display === "none") {
    starFill.style.display = "none";
    star.style.display = "block";
  } else {
    star.style.display = "none";
    starFill.style.display = "block";

  }
}
