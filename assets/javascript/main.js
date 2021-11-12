//TODO Open modal
function abrirModal(){
    nuevoModal.style.visibility="visible"
    setTimeout(()=>{
        Dificultad(score)
        imgModal.src="/assets/img/go.png"
        setTimeout(()=>{
            EsconderModal()
            TimeBar()
            startTime = new Date
        },1000)
    },1000)
}

//TODO add and print user name
function printName() {
    const inputname = document.getElementById("userInput")
    let username= inputname.value;
    user_box.innerText = username;
}

//TODO button Start
function start() {
    imgModal.src="/assets/img/redy.png"
    printName()
    closeModal()
    abrirModal()
}

//TODO button Next
function next() {
    closeModal()
    abrirModal()
}

//TODO Run time Bar
function TimeBar() {
    Tprogres.classList.add("timeOut")
    gameTime = setTimeout(function () {
        cleanModal()
        addUser()
        yourloose('Your time Finished')
        modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
        resetGame()
    }, 5000)
}

//TODO stop Time Bar
function stopTimeBar() {
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}

//TODO dificult Level
function Dificultad(nivel=0, time = 50, max = 1000) {
    const d = max - (nivel*time)
        moveSpeed = setInterval(()=>{
            añadiendolo()}, d)
}

//TODO Add mole
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

//TODO
function topo(a){
    a.classList.add("ososal")
    setTimeout(()=>{
        a.classList.remove("ososal")
        a.classList.add("oso")
    },150)
}

//TODO add remove helmet
function casco(a){
    a.classList.add("cascoBajando")
    setTimeout(()=>{
        a.classList.remove("cascoBajando")
        a.classList.add("cascoOso")
        // a.classList.add("oso")
    },150)
}

//TODO add and remove bomb
function bomb(a){
    const d = 1000 - (score*50)
    a.classList.add("bomb")
    setTimeout(()=>{a.classList.remove("bomb")},d)
}

//TODO move mole
function esconder(a){
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("ososal")
        if(cuadrado.classList[1]==a){
            cuadrado.classList.remove(a)
            cuadrado.classList.add("ososal")
            setTimeout(()=>{
                cuadrado.classList.remove("ososal")
            },150)
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
            addUser()
            yourloose("You Don't have move Lives")
            modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
            resetGame()
        }
    });
});

//TODO display mole
function aplastaoso(a){
    score++
    userScore.innerHTML = score
    clearInterval(moveSpeed)
    stopTimeBar()
    timedespues=finalTime()
    a.classList.add("osoaplastado")
    setTimeout(()=>{
        a.classList.remove("osoaplastado")
        cleanModal()
        yourTime(timedespues / 1000)
        playerScore(timedespues)
    },1000)
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
        addUser()
        resetGame()
    },1000)
}

//TODO add and remove classList to mole
function aplastaOso(a){
    a.classList.remove("cascoOso")
    a.classList.add("oso")
}

//TODO remove heart lives
function lives(life) {
    if (life == 3) { lvl.style.backgroundImage = "url(/assets/img/3vidas.png)" }
    else if (life == 2) { lvl.style.backgroundImage = "url(/assets/img/2vida.png)" }
    else if (life == 1) { lvl.style.backgroundImage = "url(/assets/img/1vida.png)" }
    else lvl.style.backgroundImage = "url(/assets/img/noVidas.png)"
}

//TODO Reset Game parameter
function resetGame() {
    stopTimeBar()
    lives(3)
    life = 3
    score = 0
    userScore.innerHTML = score
    scoreResult = 0
    clearInterval(moveSpeed)
}

//TODO Count time to click
function finalTime() {
    afterTime = new Date
    contTimer = afterTime.getTime() - startTime.getTime()
    return contTimer;
}

//TODO calculate level time
function playerScore(timer) {
    actualtime = timer
    console.log(actualtime)
    minus = 5000 - actualtime
    scoreResult += minus
    console.log(scoreResult)
    minus = 0
    return scoreResult
}

//TODO calculate final Score
function calculateScore() {
    console.log(scoreResult)
    finalScore = (maxtime - scoreResult) / 1000
    console.log(finalScore, scoreResult)
    return finalScore
};

//TODO clean table div
function cleanTableDiv(){
    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.lastChild);
    }
}

//TODO create input tables elements
function insertIntput(name){
    cleanTableDiv()
    tableDiv.appendChild(newInputTable('Display Top Ten ', 'id', 'allScores', 'displayScore(topTen)'))
    tableDiv.appendChild(newInputTable('Display All Scores ', 'id', 'allScores', 'displayScore(orderUserBook)'))
    tableDiv.appendChild(newInputTable('Close Score', 'id', 'Try Again', 'hideScore()'))
    tableDiv.appendChild(newTable())
    callDom()
    table.appendChild(showScores(name))
}

//TODO display score list
function displayScore(name){
    callDom()
    tableDiv.classList.remove('hide')
    tableDiv.classList.add('show')
    First.classList.remove('show')
    First.classList.add('hide')
    closeModal()
    tableDiv.appendChild(insertIntput(name))
    //showScores(name)
}

//TODO hide score list
function hideScore(){
    tableDiv.classList.remove('show')
    tableDiv.classList.add('hide')
    First.classList.remove('hide')
    First.classList.add('show')
    yourloose()
}

//TODO open table
function openTable(){
    closeModal()
    youwin()
}

function EsconderModal() {
    nuevoModal.style.visibility="hidden"
}

