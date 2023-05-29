// Número da contagem
let num_element = document.querySelector(".number");
num = 0;

// Botões
let decrease = document.querySelector(".dec_btn");
let reset = document.querySelector(".res_btn");
let increase = document.querySelector(".inc_btn");

// Eventos
increase.addEventListener("click", function () {
  num_element.innerHTML = ++num;
  if (num > 0) {
    num_element.style.color = "#55ec8f";
  } else if (num === 0) {
    num_element.style.color = "#333232c2";
  }
});
reset.addEventListener("click", function () {
  num_element.innerHTML = num = 0;
  num_element.style.color = "#333232c2";
});
decrease.addEventListener("click", function () {
  num_element.innerHTML = --num;
  if (num < 0) {
    num_element.style.color = "#e75c5c";
  } else if (num === 0) {
    num_element.style.color = "#333232c2";
  }
});
