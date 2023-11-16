
//TODO Display modal Start
function modalStart() {
    cleanModal()
    modalContent[0].appendChild(newH2('Welcome'))
    modalContent[0].appendChild(newButton('Start', 'modalDifficulty()'))
    modalContent[0].appendChild(newButton('Rules', 'rules()'))
    modalContent[0].appendChild(newButton('Display Scores', 'displayScore(topTen)'))
    openModal()
}

function modalDifficulty() {
    cleanModal()
    modalContent[0].appendChild(newH2('Welcome'))
    modalContent[0].appendChild(newButton('Easy', 'start(3)'))
    modalContent[0].appendChild(newButton('Medium', 'start(2)'))
    modalContent[0].appendChild(newButton('Hard', 'start(1)'))
    openModal()
}


// cambios con rules...
function rules(){
    closeModal()
    modalContent[0].appendChild(newH2('Rules'))
    modalContent[0].appendChild(newP('<b>60</b> seconds countdown <br>  kill the maximum number of moles'))
    modalContent[0].appendChild(newP('<b>Mole:</b> 100 points <br> <b> Mole Helmet:</b> 50 points for helmet<br> <b>Bomb: </b>Click and you will die'))
    modalContent[0].appendChild(newButton('Return', 'youwin()'))
    openModal()
}



//TODO Display modal Lose
function yourloose(text = 'Try again') {
    deleteGarden()
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newP("Try again"))
    modalContent[0].appendChild(newButton('Try again', 'modalDifficulty()'))
    openModal()
}

//TODO Display modal Time
function yourTime(time){
    closeModal()
    deleteGarden()
    text= `Your Score is:${time} `
    modalContent[0].appendChild(newH2(text))
    modalContent[0].appendChild(newButton('Try again', 'modalDifficulty()'))
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
    displayScore()
}

//TODO Display modal Win
function youwin(score) {
    closeModal()
    modalContent[0].appendChild(newH2("You Win"))
    modalContent[0].appendChild(newH3("As ganado un descuento del 10% en tu proxima compra"))
    modalContent[0].appendChild(newImg("/img/win.png", "you win"))
    modalContent[0].appendChild(newButton('Back to Start', `yourTime(${score})`))
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
function abrirModalGo(lvl){
    aplasta()
    nuevoModal.style.visibility="visible"
    setTimeout(()=>{
        Dificultad(lvl)
        imgModal.src="/img/go.png"
        setTimeout(()=>{
            nuevoModal.style.visibility="hidden"
            TimeBar()
            startTime = new Date
        },1000)
    },1000)
}

