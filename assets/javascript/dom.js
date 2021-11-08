
//TODO To begin the game
const Start=document.getElementById("first_page")
const First=document.getElementById("container1")
const butStart=document.getElementById("Next_page")
const oso=document.querySelector(".oso")
const lvl=document.getElementById("lvl")
let score=0
let life=3

let userScore= document.getElementById('userScore')

const Cuadrado=document.querySelectorAll(".hueco")

function añadiendolo(){
  Cuadrado.forEach(cuadrado => {
    cuadrado.classList.remove("oso")
  })
  Cajaaleatoria= Cuadrado[Math.floor(Math.random()*12)]
  Cajaaleatoria.classList.add('oso')
  // prueba = Cajaaleatoria.id
};

function moveMole() {
  setInterval(añadiendolo, 1000)
}

moveMole()
function Hide() {
  Start.style.display="none";
  First.style.display="block";
  }

// for (let index = 1; index == Cuadrado.length;) {
//   const cuadrado = array[index];
//   cuadrado.addEventListener("click"), ()=>{
//     score++
//   }
// }

  // function takeTopo(){
   
    // Cuadrado.forEach(cuadrado => {
    //   cuadrado.addEventListener("click", ()=>{
    //     if (cuadrado.classList[1] == "oso" ){
    //       score++
    //       console.log(score)
    //     } else if(life>0){
    //       life--
    //       console.log(life)

    //     } else if (life==0){
          
    //     }
    //   });
    // });
  
  //   Cuadrado.forEach(cuadrado => {
  //     cuadrado.addEventListener("click"), ()=>{
  //       if (prueba.id == Cuadrado){
  //         score++
  //       }
  //     }
  //   });
  // console.log(score)

//TODO Dom Modal window
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalContent= document.getElementsByClassName('modal-content')


//TODO time bar
const Tprogres=document.getElementById("Tprogres")



