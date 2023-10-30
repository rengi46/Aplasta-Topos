

//TODO dificult Level
function Dificultad(nivel=0, time = 50, max = 1000) {
  // const d = max - (nivel*time)
      moveSpeed = setInterval(()=>{
          añadiendolo()}, 1500)
}

//TODO Add mole
function añadiendolo() {
  Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
  var personaje = Math.floor(Math.random() * 10)
  const doble = Math.floor(Math.random() * 10)
  if(doble < 4){
    var Cajaaleatoria2 = Cuadrado[Math.floor(Math.random() * 12)]
  }
  if(personaje < 2){

  }
  else if(personaje < 6 ){
      topo(Cajaaleatoria)
      if(doble < 4) topo(Cajaaleatoria2)
  }
  else if( personaje < 9){
      casco(Cajaaleatoria)
      if(doble < 2) casco(Cajaaleatoria2)
  }
  else if(personaje > 8){
      bomb(Cajaaleatoria)
      if(doble < 4) topo(Cajaaleatoria2)
  }
};


//TODO
function topo(a){
  a.classList.add("ososal")
  setTimeout(()=>{
      a.classList.remove("ososal")
      a.classList.add("oso")
      setTimeout(()=>{
          a.classList.remove("oso")
          a.classList.add("ososal")
            setTimeout(()=>{
              a.classList.remove("ososal")
          },200) //tiempo al bajar
      },700) //tiempo salido
  },200)     //tiempo al salir
}

//TODO add remove helmet
function casco(a){
  a.classList.add("cascoBajando")
  setTimeout(()=>{
      a.classList.remove("cascoBajando")
      a.classList.add("cascoOso")
      setTimeout(()=>{
        a.classList.remove("cascoOso")
        a.classList.add("cascoBajando")
        setTimeout(()=>{
          a.classList.remove("cascoBajando")
      },200) //tiempo al bajar
    },700)   //tiempo salido
  },200)     //tiempo al salir
}

//TODO add and remove bomb
function bomb(a){
  a.classList.add("bomb")
  setTimeout(()=>{a.classList.remove("bomb")},600)
}



//TODO add and remove classList to mole
function aplastaCascoOso(a){
  a.classList.remove("cascoOso")
  a.classList.add("oso")
    setTimeout(()=>{
      a.classList.remove("oso")
      a.classList.add("ososal")
        setTimeout(()=>{
          a.classList.remove("ososal")
      },250) //tiempo al bajar
  },600) //tiempo salido
  addScore(50)
}

//TODO Bomb show 
function aplastabomba(a){
  a.classList.remove("bomb")
  clearInterval(moveSpeed)
  stopTimeBar()
  a.classList.add("explo")
  setTimeout(()=>{
      a.classList.remove("explo")
      cleanModal()
      yourloose("Te exploto en toda la cara")
      modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
      resetGame()
  },1000)
}

//TODO display mole
function aplastaoso(a){
  addScore(100)
  a.classList.remove("oso")
  a.classList.add("osoaplastado")
  setTimeout(()=>{
      a.classList.remove("osoaplastado")
  },1000)
}


