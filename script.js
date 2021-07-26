const elements = document.querySelectorAll(".switch");

// Inicia a página com modo diurno por padrão.
elements.forEach((element) => {
  element.classList.add("day");
});

// Função para alterar o modo
const changeMode = () => {
  elements.forEach((element) => {
    element.classList.toggle("day");
    element.classList.toggle("night");
  });
};
