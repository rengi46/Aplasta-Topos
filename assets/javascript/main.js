
// function poneruser() {
//     const inputname = document.getElementById("userInput")
//     const user = createUser(inputname.value)
//     var arruser = (JSON.parse(save.aplastaTopos));
//     // console.log(arruser)
//     var objuser = arruser[user]
//     // console.log(objuser)
//     user_box.innerText = objuser.nameUser
// }

// function addScore(name) {
//     const user = {nameUser: name}
//     user.scoreUser = finalScore;
//     var arruser = (JSON.parse(save.aplastaTopos));
//     arruser.push(user)
//     console.log(arruser)
//     arrayString = (JSON.stringify(arruser))
//     save.aplastaTopos = arrayString;
// }


function start() {
    startTime = new Date
    TimeBar()
    
    //addUser()
    //!poneruser()
    closeModal()
    Dificultad(score)
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
    }, 10000)
}

//TODO stop Time Bar
function stopTimeBar() {
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}


function Dificultad(nivel=0, time = 50, max = 1000) {
    const c = nivel * time
    console.log(c)
    const d = max - c
    console.log(nivel)
    //moveMole(d)
    moveSpeed = setInterval(
        function () {
            añadiendolo()
            console.log(nivel)
            console.log(d)
        }, d)
}

function añadiendolo() {
    //console.log("1")
    Cuadrado.forEach(cuadrado => {
        if(cuadrado.classList[1]=="oso"){
            cuadrado.classList.remove("oso")
            cuadrado.classList.add("ososal")
            setTimeout(()=>{
                cuadrado.classList.remove("ososal")
            },100)
        }
    })
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    Cajaaleatoria.classList.add("ososal")
    setTimeout(()=>{
        Cajaaleatoria.classList.remove("ososal")
        Cajaaleatoria.classList.add("oso")
    },300)
};

// //TODO Speed to move 
// function moveMole(num) {
//     moveSpeed = setInterval(añadiendolo, num)
// }

function resetTimeBar() {
    Tprogres.classList.remove("timeOut")
}


//TODO click events
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            score++
            clearInterval(moveSpeed)
            Dificultad(score)
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
