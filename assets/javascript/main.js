
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
async function TimeBar() {
    Tprogres.classList.add("timeOut")
    gameTime = setTimeout(async function () {
        console.log("timeOut");
        cleanModal()
        const maxScore = await getMaxScore()
        alert(maxScore)
        const score = calculateScore()
        if(score<maxScore){
            yourTime(score)
        }else{
            youwin(score)
        }
    }, 10000)
}

async function getMaxScore(){
    const dataJson = await  fetch('http://localhost:1337/api/juegos')
    const data = await dataJson.json()
    const maxScore = data.data.find((element) => {
        if(element.attributes.Juego == "topos"){
            return element.attributes.UmbraPremio
        }
    })
    return maxScore.attributes.UmbraPremio
}

//TODO stop Time Bar
function stopTimeBar() {
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}
