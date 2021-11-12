
//TODO Display modal Start
function modalStart() {
    cleanModal()
    modalContent[0].appendChild(newH2('Welcome'))
    modalContent[0].appendChild(newP('Insert Your User Name'))
    modalContent[0].appendChild(newInput())
    modalContent[0].appendChild(newButton('rules', 'rules()'))
    modalContent[0].appendChild(newButton('START', 'start()'))
    openModal()
}
// cambios con rules...
function rules(){
    closeModal()
    modalContent[0].appendChild(newH2('Rules'))
    modalContent[0].appendChild(newP('<b>3</b> Lives <br> <b>50</b> seconds countdown <br> <b>5</b> seconds to click the mole'))
    modalContent[0].appendChild(newP('<b>Mole:</b> Win <br> <b> Mole Helmet:</b> Two clicks to win <br> <b>Bomb: </b>Click and you will die'))
    modalContent[0].appendChild(newButton('Return', 'modalStart()'))
    openModal()
}
//TODO Display modal Lose
function yourloose(text = 'You Lose') {
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton('Try again', 'next()'))
    modalContent[0].appendChild(newButton('Display Scores', 'displayScore(topTen)'))
    modalContent[0].appendChild(newButton('New User', 'modalStart()'))
    orderBook()
    openModal()
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
    modalContent[0].appendChild(newH2("Score Board"))
    modalContent[0].appendChild(newButton('Display Tabla Modal', 'displaytabla(topTen)'))
    modalContent[0].appendChild(newButton('Display tabla ', 'displayScore(topTen)'))
    modalContent[0].appendChild(newButton('Back to Start', 'modalStart()'))
    // modalContent[0].appendChild(showScores(topTen))
    openModal()
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

//TODO open modal start
window.onload = function () {
    userBook = loadUser()
    modalStart()
}


