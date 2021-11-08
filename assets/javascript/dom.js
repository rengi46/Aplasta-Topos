


añadiendolo()

function añadiendolo(){
  Cuadrado.forEach(cuadrado => {
    cuadrado.classList.remove("oso")
  })
  Cajaaleatoria= Cuadrado[Math.floor(Math.random()*12)]
  Cajaaleatoria.classList.add('oso')
};

function moveMole() {
  setInterval(añadiendolo, 300)
}

moveMole()

function Hide() {
  Start.style.display="none";
  First.style.display="block";
  }


    // Cuadrado.forEach(cuadrado => {
    //   cuadrado.addEventListener('click', () => {
    // })







