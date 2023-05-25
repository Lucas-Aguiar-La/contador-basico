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
    num_element.style.color = "green";
  } else if (num === 0) {
    num_element.style.color = "black";
  }
});
reset.addEventListener("click", function () {
  num_element.innerHTML = num = 0;
  num_element.style.color = "black";
});
decrease.addEventListener("click", function () {
  num_element.innerHTML = --num;
  if (num < 0) {
    num_element.style.color = "red";
  } else if (num === 0) {
    num_element.style.color = "black";
  }
});
