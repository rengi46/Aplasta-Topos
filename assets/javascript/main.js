//TODO modal window
// function Startcount(){
//     new Date
// }
// function AfterTime(){
//     new Date
// }
var startTime;
var afterTime;


// var FinalTime= (AfterTime().getTime()- startTime().getTime())/ 1000;

// var FinalTime /= 1000;

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
    Startcount()
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
    startTime=new Date
    Hide()
    TimeBar()
    Tprogres.classList.toggle("timeOut")
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
// function yourloose() {
//     modalContent[0].appendChild(newh2('Welcome'))
//     modalContent[0].appendChild(newP('Insert Your User Name'))
//     modalContent[0].appendChild(newInput())
//     modalContent[0].appendChild(newButton())
//     openModal()
// }
function youwin() {
    afterTime = new Date
    console.log(finalTime())
    modalContent[0].appendChild(newP('You win'))
    // modalContent[0].appendChild(newP('try again'))
    // modalContent[0].appendChild(newInput())
    modalContent[0].appendChild(newButton("Try again"))
    openModal()
}
function finalTime(){
    return (afterTime.getTime() - startTime.getTime())/1000;
}
//Dificultad
Dificultad(10)
añadiendolo()
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

function ChangeLevel(){
    
}
function Hide() {
    //   Start.style.display="none";
    //   First.style.display="block";
    closeModal()
}
//Choose 
Cuadrado.forEach(cuadrado => {
    cuadrado.addEventListener("click", ()=>{
      if (cuadrado.classList[1] == "oso" ){
        score++
        youwin()
        console.log(score)
      } else if(life>0){
        life--
        console.log(life)

      } else if (life==0){
        yourloose()
      }
    });
});


//   function score(){

//   }
    // Cuadrado.forEach(cuadrado => {
    //   cuadrado.addEventListener('click', () => {
    // })