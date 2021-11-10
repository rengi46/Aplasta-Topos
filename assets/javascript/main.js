
function abrirModal(){
    nuevoModal.style.visibility="visible"
    setTimeout(()=>{
        imgModal.src="/assets/img/go.jpg"
        setTimeout(()=>{
            EsconderModal()
            TimeBar()
        },1000)
    },1000)
}

function start() {
    startTime = new Date
    closeModal()
    Dificultad(0)
    abrirModal()
}

function next() {
    startTime = new Date
    TimeBar()
    closeModal()
}

//TODO Run time Bar
function TimeBar() {
    var antes = new Date
    Tprogres.classList.add("timeOut")
    gameTime = setTimeout(function () {
        cleanModal()
        yourloose('Your time Finished')
        modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
        resetGame()
        Dificultad(1)
        var Despues = new Date
        // console.log(Despues.getTime() - antes.getTime())
    }, 20000)
}

//TODO stop Time Bar
function stopTimeBar() {
    console.log("1a")
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}


function Dificultad(nivel=0, time = 50, max = 1000) {
    const d = max - (nivel*time)
    moveSpeed = setInterval(()=>{
        console.log(nivel)
        añadiendolo()}, d)
}

function añadiendolo() {
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    var personaje = Math.floor(Math.random() * 10)
    if(personaje< 6){
        topo(Cajaaleatoria)
        esconder("oso")
        esconder("cascoOso")

    }
    else if(personaje> 5 && personaje < 9){
        casco(Cajaaleatoria)
        esconder("cascoOso")
        esconder("oso")

    }
    else if(personaje > 8){
        bomb(Cajaaleatoria)
        esconder("cascoOso")
        esconder("oso")
    }

};

function topo(a)
{
    a.classList.add("ososal")
    setTimeout(()=>{
        a.classList.remove("ososal")
        a.classList.add("oso")
    },200)
}
function casco(a){
    a.classList.add("cascoBajando")
    setTimeout(()=>{
        a.classList.remove("cascoBajando")
        a.classList.add("cascoOso")
        // a.classList.add("oso")
    },200)
}
function bomb(a){
    const d = 1000 - (score*50)
    a.classList.add("bomb")
    setTimeout(()=>{a.classList.remove("bomb")},d)
}
function esconder(a){
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("ososal")
        if(cuadrado.classList[1]==a){
            cuadrado.classList.remove(a)
            cuadrado.classList.add("ososal")
            setTimeout(()=>{
                cuadrado.classList.remove("ososal")
            },100)
        }
    })
}

//TODO click events
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            aplastaoso(cuadrado)
        }else if (cuadrado.classList[1] == "cascoOso"){
            aplastaOso(cuadrado)
        }
        else if(cuadrado.classList[1] == "bomb"){
            aplastabomba(cuadrado)
        }
        else if (life > 1) {
            life--
            lives(life)
        } else if (life == 1) {
            cleanModal()
            yourloose("You Don't have move Lives")
            resetGame()
            modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
        }
    });
});


function aplastaoso(a){
    score++
    userScore.innerHTML = score
    console.log("2a")
    clearInterval(moveSpeed)
    stopTimeBar()
    a.classList.add("osoaplastado")
    setTimeout(()=>{
        a.classList.remove("osoaplastado")
        Dificultad(3)
        cleanModal()
        yourTime(finalTime() / 1000)
        playerScore()
    },1000)
}


function aplastabomba(a){
    a.classList.remove("bomb")
    console.log("3a")
    clearInterval(moveSpeed)
    stopTimeBar()
    a.classList.add("explo")
    setTimeout(()=>{
        a.classList.remove("explo")
        cleanModal()
        yourloose("Te exploto en toda la cara")
        resetGame()
    },1000)
}

function aplastaOso(a){
    console.log("pepe")
    a.classList.remove("cascoOso")
    a.classList.add("oso")
}



function lives(life) {
    if (life == 3) { lvl.style.backgroundImage = "url(/assets/img/3vidas.png)" }
    else if (life == 2) { lvl.style.backgroundImage = "url(/assets/img/2vida.png)" }
    else if (life == 1) { lvl.style.backgroundImage = "url(/assets/img/1vida.png)" }
    else lvl.style.backgroundImage = "url(/assets/img/noVidas.png)"
}

function resetGame() {
    stopTimeBar()
    lives(3)
    life = 3
    score = 0
    userScore.innerHTML = score
    scoreResult = 0
    console.log("4a")
    clearInterval(moveSpeed)
}

function finalTime() {
    afterTime = new Date
    contTimer = afterTime.getTime() - startTime.getTime()
    return contTimer;
}

//TODO calculate level time
function playerScore() {
    actualtime = finalTime()
    minus = 3000 - actualtime
    scoreResult += minus
    minus = 0
}

//TODO calculate final Score
function calculateScore() {
    finalScore = (maxtime - scoreResult) / 1000
    return finalScore
};


function EsconderModal() {
    nuevoModal.style.visibility="hidden"
}

