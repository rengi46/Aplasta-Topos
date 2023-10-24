
//TODO click events
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            aplastaoso(cuadrado)
        }else if (cuadrado.classList[1] == "cascoOso"){
            aplastaCascoOso(cuadrado)
        }
        else if(cuadrado.classList[1] == "bomb"){
            aplastabomba(cuadrado)
        }
        else if (cuadrado.classList[1] == undefined){
            console.log("no hay nada")
        }
    });
});


//TODO button Start
function start() {
    imgModal.src="/assets/img/redy.png"
    // printName()
    closeModal()
    abrirModalGo()
}

//TODO button Restart
function next() {
    resetGame()
    closeModal()
    abrirModalGo()
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
        yourTime(calculateScore())
    }, 60000)
}

//TODO stop Time Bar
function stopTimeBar() {
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}


