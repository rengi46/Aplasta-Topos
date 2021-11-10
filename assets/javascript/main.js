
//TODO Display modal Start
function modalStart() {
    cleanModal()
    modalContent[0].appendChild(newH2('Welcome'))
    modalContent[0].appendChild(newP('Insert Your User Name'))
    modalContent[0].appendChild(newInput())
    modalContent[0].appendChild(newButton('Start', 'start()'))
    openModal()
}

//TODO Display modal Lose
function yourloose(text = 'You Lose') {
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton('Try again', 'next()'))
    modalContent[0].appendChild(newButton('New User', 'modalStart()'))
    winersScore()
    openModal()
    addScore(user_box.value)
}

//TODO Display modal Time
function yourTime(time){
    text= `Your time is:${time} sec`
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Press Next to Next Level "))
    modalContent[0].appendChild(newButton('Next', 'next()'))
    openModal()
}

//TODO Display modal Win
function youwin() {
    modalContent[0].appendChild(newH2("You Win"))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton('Next', 'next()'))
    openModal()
}

function start() {
    startTime=new Date
    TimeBar()
    poneruser()
    closeModal()

}

function next(){
    startTime=new Date
    TimeBar()
    closeModal()
}

function poneruser(){
    const inputname= document.getElementById("userInput")
    const user=createUser(inputname.value)
    var arruser=(JSON.parse(save.aplastaTopos));
    // console.log(arruser)
    var objuser=arruser[user]
    // console.log(objuser)
    user_box.innerText=objuser.nameUser
}
function addScore(name){
    const user=createUser(name)
    var arruser=(JSON.parse(save.aplastaTopos));
    console.log(arruser)
    var objuser=arruser[user]
    objuser.userScore= finalScore;
    arruser[user]=objuser
    console.log(arruser)
    arrayString= (JSON.stringify(arruser))
    console.log(arrayString)
    save.aplastaTopos= arrayString;
}


//TODO modal open
function openModal() {
    modal.style.display = "block";
}

//TODO modal close
function closeModal() {
    modal.style.display = "none";
    cleanModal()
}

//TODO clean modal 
function cleanModal(){
        while (modalContent[0].firstChild) {
            modalContent[0].removeChild(modalContent[0].lastChild);
        }
}

//TODO clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

//TODO clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//TODO open modal start
window.onload = function () {
    modalStart()
}


//TODO create Element H2
function newH2(newContent) {
    result = document.createElement('h2')
    result.innerHTML = newContent
    return result
}
//TODO create Element  paragraf
function newP(newContent) {
    result = document.createElement('p')
    result.innerHTML = newContent
    return result
}

//TODO create Element input
function newInput() {
    result = document.createElement('input')
    result.setAttribute('type', 'text')
    result.setAttribute('id', 'userInput')
    result.classList.add('modal-content')
    result.classList.add('form-element')
    return result
}

//TODO Create Element button
function newButton(name = 'Start', func ) {
    button = document.createElement('button')
    button.classList.add('modal-content')
    button.classList.add('form-element')
    button.setAttribute('id', 'Next_page')
    button.setAttribute('onclick', func)
    button.innerHTML = name
    return button
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
        // console.log(Despues.getTime() - antes.getTime())
    }, 10000)
}

//TODO stop Time Bar
function stopTimeBar(){
    clearTimeout(gameTime)
    Tprogres.classList.remove("timeOut")
}


function finalTime(){
    afterTime= new Date
    contTimer= afterTime.getTime() - startTime.getTime()
    return contTimer;
}

function Dificultad(nivel=0,time=50,max=1000){
    const c=nivel*time
    const d=max-c
    setInterval(
        function(){
            añadiendolo()
            console.log(score)
            console.log(d)
        }, d)
}

function añadiendolo() {
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

//TODO Speed to move 
// function moveMole() {
//     setInterval(añadiendolo, 1000)
// }

function resetTimeBar(){
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
Dificultad(score,50,1000)


function lives(life){
    if(life==3){lvl.style.backgroundImage="url(/assets/img/3vidas.png)"}
    else if(life==2){lvl.style.backgroundImage="url(/assets/img/2vida.png)"}
    else if(life==1){lvl.style.backgroundImage="url(/assets/img/1vida.png)"}
    else lvl.style.backgroundImage="url(/assets/img/noVidas.png)"
}

function resetGame(){
    resetTimeBar()
    lives(3)
    life = 3
    score= 0
    userScore.innerHTML = score
    scoreResult=0
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