

//TODO dificult Level
function Dificultad(nivel=1) {

  const d = (nivel*1000)
      moveSpeed = setInterval(()=>{
          añadiendolo(nivel)
      }, d)
}

//TODO Add mole
function añadiendolo(nivel) {
  const Cuadrado = getGarden()
  const dificultad = (nivel * 1000) - 400
  Cajaaleatoria = Cuadrado[Math.floor(Math.random() * Cuadrado.length)]
  var personaje = Math.floor(Math.random() * 10)
  const doble = Math.floor(Math.random() * 10)
  if(doble < 4){
    var Cajaaleatoria2 = Cuadrado[Math.floor(Math.random() * Cuadrado.length)]
  }
  if(personaje < 1){

  }
  else if(personaje < 6 ){
      topo(Cajaaleatoria,dificultad)
      if(doble < 4) topo(Cajaaleatoria2, dificultad)
  }
  else if( personaje < 9){
      casco(Cajaaleatoria,dificultad)
      if(doble < 2) casco(Cajaaleatoria2, dificultad)
  }
  else if(personaje > 8){
      bomb(Cajaaleatoria,dificultad)
      if(doble < 4) topo(Cajaaleatoria2, dificultad)
  }
};


//TODO
function topo(a,d){
  a.classList.add("ososal")
  setTimeout(()=>{
      a.classList.remove("ososal")
      a.classList.add("oso")
      setTimeout(()=>{
        if(a.classList[1] !== "oso") return
          a.classList.remove("oso")
          a.classList.add("ososal")
            setTimeout(()=>{
              a.classList.remove("ososal")
          },200) //tiempo al bajar
      },d) //tiempo salido
  },200)     //tiempo al salir
}

//TODO add remove helmet
function casco(a,d){
  a.classList.add("cascoBajando")
  setTimeout(()=>{
      a.classList.remove("cascoBajando")
      a.classList.add("cascoOso")
      setTimeout(()=>{
        if(a.classList[1] !== "cascoOso") return
        a.classList.remove("cascoOso")
        a.classList.add("cascoBajando")
        setTimeout(()=>{
          a.classList.remove("cascoBajando")
      },200) //tiempo al bajar
    },d)   //tiempo salido
  },200)     //tiempo al salir
}

//TODO add and remove bomb
function bomb(a,d){
  a.classList.add("bomb")
  setTimeout(()=>{a.classList.remove("bomb")},d)
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
  },700) //tiempo salido
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
      yourloose("Te exploto")
      modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} `))
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


