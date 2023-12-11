
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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer fed5a6a3c56289b7bf9bd27f7f720ee593ae153bfed739bfc5a12a720202c66582833baae082fd5591bda5dc40015f31ce1a13c8e7d40cc0a879cdcd23566337e207d42805bd1d6897c603c1bdc989db7d6d034d5827d40619222969258a9445765db2417af1f8d31b7ac7b8a323a4a33af660f56f372a9d5f7d5f1a463f7501");
    const dataJson = await  fetch('https://celebrated-friends-2382d9c517.strapiapp.com/api/juegos',
    {
        method: 'GET',
        headers: myHeaders,
    })
    const data = await dataJson.json()
    console.log(data);
    const maxScore = data.data.find((element) => {
        if(element.attributes.Juego == "Topos"){
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
