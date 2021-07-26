const action = () => {

  let elements = document.querySelectorAll('.switch');
  elements.forEach( element =>{
    element.classList.toggle('day')
    element.classList.toggle('night')
  })
 
  let btnDay = document.getElementById("btnDay").classList.toggle('hide');
  let btnNight = document.getElementById("btnNight").classList.toggle('hide');

}