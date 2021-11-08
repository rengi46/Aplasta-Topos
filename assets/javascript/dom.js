


añadiendolo()

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
console.log(score)
  // function takeTopo(){
   
    Cuadrado.forEach(cuadrado => {
      cuadrado.addEventListener("click", ()=>{
        if (cuadrado.classList[1] == "oso" ){
          score++
          console.log(score)
        } else if(life>0){
          life--
          console.log(life)

        } else if (life==0){
          
        }
      });
    });
  
  //   Cuadrado.forEach(cuadrado => {
  //     cuadrado.addEventListener("click"), ()=>{
  //       if (prueba.id == Cuadrado){
  //         score++
  //       }
  //     }
  //   });
  // console.log(score)






