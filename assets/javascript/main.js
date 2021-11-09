//TODO modal window

function modalText(text) {
    pOne = document.createElement('p')
    pOne.innerHTML = text
    modalContent[0].appendChild(pOne)
    modalContent[0].appendChild(newButton())
    openModal()
}

function modalStart() {
    modalContent[0].appendChild(newh2('Welcome'))
    modalContent[0].appendChild(newP('Insert Your User Name'))
    modalContent[0].appendChild(newInput())
    modalContent[0].appendChild(newButton())
    openModal()
}

function newButton() {
    buttonText = 'Start'
    button = document.createElement('button')
    button.classList.add('modal-content')
    button.classList.add('form-element')
    button.setAttribute('id', 'Next_page')
    button.setAttribute('onclick', 'start()')
    button.innerHTML = buttonText
    return button
}

function start() {
    Hide()
    TimeBar()
    Tprogres.classList.toggle("timeOut")
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

//TODO modal open
function openModal() {
    modal.style.display = "block";
}
//TODO modal close
function closeModal() {
    modal.style.display = "none";
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

function newh2(newContent) {
    result = document.createElement('div')
    result.innerHTML = newContent
    return result
}

function newP(newContent) {
    result = document.createElement('div')
    result.innerHTML = newContent
    return result
}

function newInput() {
    result = document.createElement('input')
    result.setAttribute('type', 'text')
    result.setAttribute('id', 'userInput')
    result.classList.add('modal-content')
    result.classList.add('form-element')
    return result
}

function TimeBar() {
    var antes = new Date
    newh2 = document.createElement("h2")
    newp = document.createElement("p")
    newh2.innerHTML = "Your lose"
    newp.innerHTML = "Try again"
    console.log(newh2)
    console.log(modal.style.display)
    modalContent[0].appendChild(newh2)
    modalContent[0].appendChild(newp)

    setTimeout(function () {
        openModal()
        var Despues = new Date
        console.log(Despues.getTime() - antes.getTime())
    }, 10000)
}


añadiendolo()

function añadiendolo() {
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("oso")
    })
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    Cajaaleatoria.classList.add('oso')
};

function moveMole() {
    setInterval(añadiendolo, 1000)
}

moveMole()

function Hide() {
    closeModal()
}
//Choose 
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        if (cuadrado.classList[1] == "oso") {
            score++
            console.log(score)
        } else if (life > 0) {
            life--
            V(life)

        } else if (life == 0) {

        }
    });
});

//   function score(){

//   }
    // Cuadrado.forEach(cuadrado => {
    //   cuadrado.addEventListener('click', () => {
    // })