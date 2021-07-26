const actionDay = () => {

  let elements = document.querySelectorAll('.switch');
  elements.forEach( element =>{
    element.classList.remove('day')
    element.classList.add('night')
  })
 
  let btnDay = document.getElementById("btnDay").classList.add('hide');
  let btnNight = document.getElementById("btnNight").classList.remove('hide');

}

const actionNight = () => {

  let day = document.querySelectorAll('.switch');
  day.forEach( element =>{
    element.classList.add('day')
    element.classList.remove('night')
  })
 
  let btnDay = document.getElementById("btnDay").classList.remove('hide');
  let btnNight = document.getElementById("btnNight").classList.add('hide');

}