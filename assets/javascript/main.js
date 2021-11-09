//TODO modal window

// function modalText(text) {
//     pOne = document.createElement('p')
//     pOne.innerHTML = text
//     modalContent[0].appendChild(pOne)
//     modalContent[0].appendChild(newButton())
//     openModal()
// }

//TODO Display modal Start
function modalStart() {
    modalContent[0].appendChild(newH2('Welcome'))
    modalContent[0].appendChild(newP('Insert Your User Name'))
    modalContent[0].appendChild(newInput())
    modalContent[0].appendChild(newButton())
    openModal()
}

//TODO Display modal Lose
function yourloose(text = 'You Lose') {
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton())
    openModal()
}

//TODO Display modal Time
function yourTime(time){
    text= `Your time is:${time} sec`
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Press Next to Next Level "))
    modalContent[0].appendChild(newButton())
    openModal()
}

//TODO Display modal Win
function youwin() {
    modalContent[0].appendChild(newH2("You Win"))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton())
    openModal()
}

//TODO start Game and time
// function start() {
//     startTime = new Date
//     closeModal()
//     TimeBar()
//     Tprogres.classList.toggle("timeOut")
// }

function start() {
    startTime=new Date
    closeModal()
    TimeBar()
    poneruser()
}

function poneruser(){
    const inputname= document.getElementById("userInput")
    const user=createUser(inputname.value)
    var arruser=(JSON.parse(save.aplastaTopos));
    console.log(arruser)
    var objuser=arruser[user]
    console.log(objuser)
    user_box.innerText=objuser.nameUser
}

// setTimeout(function () {
//     console.log(After.getTime() - startTime.getTime())
// }, 10000)




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
function newButton(name = 'Start') {
    button = document.createElement('button')
    button.classList.add('modal-content')
    button.classList.add('form-element')
    button.setAttribute('id', 'Next_page')
    button.setAttribute('onclick', 'start()')
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


//TODO Start to create and move mole
// function yourloose() {
//     modalContent[0].appendChild(newh2('Welcome'))
//     modalContent[0].appendChild(newP('Insert Your User Name'))
//     modalContent[0].appendChild(newInput())
//     modalContent[0].appendChild(newButton())
//     openModal()
// }


// function youwin() {
//     //afterTime = new Date
//     finalTime()
//     console.log(finalTime())
//     modalContent[0].appendChild(newP('You win'))
//     // modalContent[0].appendChild(newP('try again'))
//     // modalContent[0].appendChild(newInput())
//     modalContent[0].appendChild(newButton("Try again"))
//     openModal()
// }


function finalTime(){
    afterTime= new Date
    return (afterTime.getTime() - startTime.getTime())/1000;
}

function Dificultad(a){
    const b= a+"00"
    parseInt(b)
    setInterval(añadiendolo, b)
}


function añadiendolo() {
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("oso")
    })
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    Cajaaleatoria.classList.add('oso')
};

//TODO Speed to move 
function moveMole() {
    setInterval(añadiendolo, 1000)
}

function resetTimeBar(){
    Tprogres.classList.remove("timeOut")
}


//TODO click events
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            score++
            userScore.innerHTML = score
            stopTimeBar()
            cleanModal()
            yourTime(finalTime())
            resetTimeBar()

            console.log(score)
        } else if (life > 0) {
            life--
            console.log(life)
            lives(life)

        } else if (life == 0) {
            stopTimeBar()
            cleanModal()
            yourloose("You Don't have move Lives")
            modalContent[0].appendChild(newP(score))
            resetGame()
        }
    });
});


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
}
