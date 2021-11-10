//TODO Run time Bar
function TimeBar() {
    Tprogres.classList.add("timeOut")
    on++
        gameTime= setTimeout(function () {
        cleanModal()
        yourloose('Your time Finished')
        modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
        resetGame()
    }, 10000)
}

//TODO stop Time Bar
function stopTimeBar(){
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}

//poner topo
function añadiendolo() {
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("oso")
    })
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    Cajaaleatoria.classList.add('oso')
};


function pulsatopo(event){
    cuadrado=event.srcElement
    if (cuadrado.classList[1] == "oso") {//as pulsado un topo
        score++
        apocalipsis++
        // Dificultad(score,50,1000)
        userScore.innerHTML = score
        stopTimeBar()
        cleanModal()
        yourTime(finalTime()/1000)
        stopTimeBar()
        playerScore()
        on--
    } else if (life > 1) {//no as pulsado un topo
        life--
        lives(life)

    } else if (life == 1) {//no as pulsado un topo y no tienes vidas
        stopTimeBar()
        cleanModal()
        yourloose("You Don't have move Lives")
        modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
    resetGame()
    }
}


setTimeout(()=>console.log(apocalipsis),10000)

    

//pulsar el topo
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", pulsatopo);
});








//nivel de dificultad
function Dificultad(apoc){
    const tTotal=1000-(apoc*50)
    setInterval(
        function(){
            console.log(apoc)
            añadiendolo()
        }, tTotal)
}