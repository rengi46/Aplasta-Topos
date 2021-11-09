
function poneruser() {
    const inputname = document.getElementById("userInput")
    const user = createUser(inputname.value)
    var arruser = (JSON.parse(save.aplastaTopos));
    // console.log(arruser)
    var objuser = arruser[user]
    // console.log(objuser)
    user_box.innerText = objuser.nameUser
}

function addScore(name) {
    const user = createUser(name)
    var arruser = (JSON.parse(save.aplastaTopos));
    console.log(arruser)
    var objuser = arruser[user]
    objuser.userScore = finalScore;
    arruser[user] = objuser
    console.log(arruser)
    arrayString = (JSON.stringify(arruser))
    console.log(arrayString)
    save.aplastaTopos = arrayString;
}


function start() {
    startTime = new Date
    TimeBar()
    poneruser()
    closeModal()
    Dificultad(score, 50, 1000)
}

function next() {
    startTime = new Date
    TimeBar()
    closeModal()
    //Dificultad(score, 50, 1000)
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
        var Despues = new Date
        // console.log(Despues.getTime() - antes.getTime())
    }, 3000)
}

//TODO stop Time Bar
function stopTimeBar() {
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}


function Dificultad(nivel = 0, time = 50, max = 1000) {
    const c = nivel * time
    const d = max - c
    setInterval(
        function () {
            añadiendolo()
            console.log(score)
            console.log(d)
        }, d)
}

function añadiendolo() {
    console.log("1")
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("oso")
    })
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    Cajaaleatoria.classList.add('oso')
};

//TODO Speed to move 
// function moveMole() {
//     setInterval(añadiendolo, 1000)
// }

function resetTimeBar() {
    Tprogres.classList.remove("timeOut")
}


//TODO click events
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            score++
            // Dificultad(score,50,1000)
            console.log(score)
            userScore.innerHTML = score
            stopTimeBar()
            cleanModal()
            yourTime(finalTime() / 1000)
            resetTimeBar()
            playerScore()
            //console.log(score)
        } else if (life > 1) {
            life--
            lives(life)

        } else if (life == 1) {
            stopTimeBar()
            cleanModal()
            yourloose("You Don't have move Lives")
            modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
            resetGame()
        }
    });
});



function lives(life) {
    if (life == 3) { lvl.style.backgroundImage = "url(/assets/img/3vidas.png)" }
    else if (life == 2) { lvl.style.backgroundImage = "url(/assets/img/2vida.png)" }
    else if (life == 1) { lvl.style.backgroundImage = "url(/assets/img/1vida.png)" }
    else lvl.style.backgroundImage = "url(/assets/img/noVidas.png)"
}

function resetGame() {
    resetTimeBar()
    lives(3)
    life = 3
    score = 0
    userScore.innerHTML = score
    scoreResult = 0
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
