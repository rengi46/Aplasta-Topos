

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
        const score = calculateScore()
        if(score<maxScore){
            yourTime(score)
        }else{
            youwin(score)
        }
    }, 40000)
}

async function getMaxScore(){
    const url = "https://sublime-vitality-a95aa26464.strapiapp.com/"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer bd49c332c96a0be405205fef70df5a241a3feb34ea7951bdcf02a248147a4daddc3769f7905235d0b0cac06b873b310d67abbea2061b24af1205b7527d49df5b2ef0027e13bb7dcb09796026c4b3d1b78e09f89409b2824fde23a6b7dc8d87b0d489122bb593668bdf3992874476cbea48aadace225cf19a913ad7529dbf0923");
    const dataJson = await  fetch(url+'api/juegos',
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
