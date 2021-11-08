const Cuadrado=document.querySelectorAll(".hueco")







  añadiendolo()
function añadiendolo(){
  Cuadrado.forEach(cuadrado => {
    cuadrado.classList.remove("oso")})  
  Cajaaleatoria= Cuadrado[Math.floor(Math.random()*12)]
    Cajaaleatoria.classList.add('oso')
    };
    
    function moveMole() {
     setInterval(añadiendolo, 100)
    }
    moveMole()

    // Cuadrado.forEach(cuadrado => {
    //   cuadrado.addEventListener('click', () => {
    // })


//To begin the game
const Start=document.getElementById("first_page")
const First=document.getElementById("container1")
const butStart=document.getElementById("Next_page")

butStart.addEventListener("click", function (e){
  e.preventDefault();
  Hide()
})

function Hide() {
  Start.style.display="none";
  First.style.display="block";
  }

