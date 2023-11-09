
//TODO click events
function aplasta(){
    Cuadrado = getGarden()
    Cuadrado.forEach(cuadrado => {
        cuadrado.addEventListener("click", () => {
            if (cuadrado.classList[1] == "oso") {
                aplastaoso(cuadrado)
                audio_coin.play()
            }else if (cuadrado.classList[1] == "cascoOso"){
                audio_hit.play()
                aplastaCascoOso(cuadrado)
            }
            else if(cuadrado.classList[1] == "bomb"){
                aplastabomba(cuadrado)
                audio_explo.play()
            }
            else if (cuadrado.classList[1] == undefined){
                console.log("no hay nada")
                audio_fail.play()
            }
        });
    });
}


//TODO button Start
function start(lvl) {
    createGarden()
    imgModal.src="/img/redy.png"
    // printName()
    closeModal()
    abrirModalGo(lvl)
}

//TODO button Restart
function next(lvl) {
    resetGame()
    closeModal()
    abrirModalGo(lvl)
}

//TODO Reset Game parameter
function resetGame() {
    stopTimeBar()
    score = 0
    userScore.innerHTML = score
    clearInterval(moveSpeed)
}

//TODO Run time Bar
function TimeBar() {
    Tprogres.classList.add("timeOut")
    gameTime = setTimeout(function () {
        cleanModal()
        const score = calculateScore()
        if(score<1000){
            yourTime(score)
        }else{
            youwin(score)
        }
    }, 40000)
}

//TODO stop Time Bar
function stopTimeBar() {
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}
