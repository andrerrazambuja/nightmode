const elements = document.querySelectorAll(".switch")

// Configuração inicial da página.  "day" == modo diurno | "night" == modo noturno
elements.forEach((element) => {
  element.classList.add("day")
});

// Função para alterar o modo
const changeMode = () => {
  elements.forEach((element) => {
    element.classList.toggle("day")
    element.classList.toggle("night")
  })
}