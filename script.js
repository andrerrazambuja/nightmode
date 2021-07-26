const elements = document.querySelectorAll('.switch');
const btnDay = document.getElementById("btnDay")
const btnNight = document.getElementById("btnNight")

const action = () => {

  elements.forEach( element =>{
    element.classList.toggle('day')
    element.classList.toggle('night')
  })
 
  btnDay.classList.toggle('hide');
  btnNight.classList.toggle('hide');

}