
//TODO Display modal Start
function modalStart() {
    cleanModal()
    modalContent[0].appendChild(newH2('Welcome'))
    modalContent[0].appendChild(newButton('START', 'start()'))
    modalContent[0].appendChild(newButton('rules', 'rules()'))
    modalContent[0].appendChild(newButton('Display Scores', 'displayScore(topTen)'))
    openModal()
}


// cambios con rules...
function rules(){
    closeModal()
    modalContent[0].appendChild(newH2('Rules'))
    modalContent[0].appendChild(newP('<b>60</b> seconds countdown <br>  kill the maximum number of moles'))
    modalContent[0].appendChild(newP('<b>Mole:</b> 100 points <br> <b> Mole Helmet:</b> 50 points for helmet<br> <b>Bomb: </b>Click and you will die'))
    modalContent[0].appendChild(newButton('Return', 'modalStart()'))
    openModal()
}



//TODO Display modal Lose
function yourloose(text = 'Try again') {
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton('Try again', 'next()'))
    openModal()
}

//TODO Display modal Time
function yourTime(time){
    text= `Your Score is:${time} `
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newButton('Try again', 'next()'))
    modalContent[0].appendChild(newP('Insert Your User Name For save your Score'))
    modalContent[0].appendChild(newInput())
    modalContent[0].appendChild(newButton('Save', 'saveUser()'))
    openModal()
}

function saveUser(){
    let name = document.getElementById('userInput').value
    addUser(name)
    orderBook()
    resetGame()
    modalStart()
}

//TODO Display modal Win
function youwin() {
    modalContent[0].appendChild(newH2("Score Board"))
    modalContent[0].appendChild(newButton('Display Tabla Modal', 'displaytabla(topTen)'))
    modalContent[0].appendChild(newButton('Display tabla ', 'displayScore(topTen)'))
    modalContent[0].appendChild(newButton('Back to Start', 'modalStart()'))
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
    orderBook()
    modalStart()
}

//TODO create input score elements
function insertIntput(name){
    cleanTableDiv()
    tableDiv.appendChild(newInputTable('Close Score', 'id', 'Try Again', 'hideScore()'))
    tableDiv.appendChild(newTable())
    callDom()
    table.appendChild(showScores(name))
}

//TODO open table
function openTable(){
    closeModal()
    youwin()
}

//TODO clean table div
function cleanTableDiv(){
    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.lastChild);
    }
}

//TODO Open modal
function abrirModalGo(){
    nuevoModal.style.visibility="visible"
    setTimeout(()=>{
        Dificultad(score)
        imgModal.src="/assets/img/go.png"
        setTimeout(()=>{
            nuevoModal.style.visibility="hidden"
            TimeBar()
            startTime = new Date
        },1000)
    },1000)
}

