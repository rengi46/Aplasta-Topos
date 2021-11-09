//TODO Button to start
function start() {
    startTime=new Date
    TimeBar()
    poneruser()
    closeModal()
}

//TODO Button next
function next(){
    startTime=new Date
    TimeBar()
    closeModal()
}

//TODO Run time Bar
function TimeBar() {
    var antes = new Date
    Tprogres.classList.add("timeOut")
    gameTime= setTimeout(function () {
        cleanModal()
        yourloose('Your time Finished')
        modalContent[0].appendChild(newP(`Your Final Score is : ${calculateScore()} seconds`))
        resetGame()
        var Despues = new Date
        console.log(Despues.getTime() - antes.getTime())
    }, 3000)
}

//TODO stop Time Bar
function stopTimeBar(){
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}


//TODO adjust Dificult
function Dificultad(a){
    const b= a+"00"
    parseInt(b)
    setInterval(añadiendolo, b)
}

//TODO Reset time Bar 
function resetTimeBar(){
    Tprogres.classList.remove("timeOut")
}


//TODO click events
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            score++
            nivel--
            Dificultad(nivel)
            //console.log(nivel)
            userScore.innerHTML = score
            stopTimeBar()
            cleanModal()
            yourTime(finalTime()/1000)
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

//TODO lives bar count
function lives(life){
    if(life==3){lvl.style.backgroundImage="url(/assets/img/3vidas.png)"}
    else if(life==2){lvl.style.backgroundImage="url(/assets/img/2vida.png)"}
    else if(life==1){lvl.style.backgroundImage="url(/assets/img/1vida.png)"}
    else lvl.style.backgroundImage="url(/assets/img/noVidas.png)"
}

//TODO Reset game values
function resetGame(){
    resetTimeBar()
    lives(3)
    life = 3
    score= 0
    userScore.innerHTML = score
    Dificultad(10)
    scoreResult=0
}

//TODO count time to click
function finalTime(){
    afterTime= new Date
    contTimer= afterTime.getTime() - startTime.getTime()
    return contTimer;
}

//TODO calculate level time
function playerScore(){
    actualtime = finalTime()
    minus= 3000 - actualtime
    scoreResult += minus
    minus=0
}

//TODO calculate final Score
function calculateScore(){
    finalScore = (maxtime - scoreResult)/1000
    return finalScore
}


function winersScore(){
    if(save.aplastaTopos){
        var arrlocal=(JSON.parse(save.aplastaTopos));
        const maxscore=[]
        var ranking=document.createElement("ul")
        var first=document.createElement("li")
        var second=document.createElement("li")
        var three=document.createElement("li")
        arrlocal.sort((a,b)=>{return a.scoreUser-b.scoreUser})
        arrlocal.forEach((e) => {
            console.log(`${e.nameUser} ${e.scoreUser}`);
        });
    }

}