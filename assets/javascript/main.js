//TODO modal window

function modalText(text) {
    pOne = document.createElement('p')
    pOne.innerHTML = text
    modalContent[0].appendChild(pOne)
    buttons= newButton()
    modalContent[0].appendChild(buttons)
    openModal()
}

function modalStart() {
    pagehtml = ''
    startPage = userNameStart()
    console.log(startPage)
    pagehtml.innerHTML = startPage
    modalContent[0].appendChild(startPage)
    openModal()
}

function newButton(){
    buttonText= 'Start'
    button= document.createElement('button')
    button.classList.add('modal-content')
    button.classList.add('form-element')
    button.setAttribute('id', 'Next_page')
    button.setAttribute('onclick', 'start()')
    button.innerHTML= buttonText
    return button
}

function start() {
    Hide()
    TimeBar()
    Tprogres.classList.toggle("timeOut")
  }


//TODO modal open
function openModal() {
    modal.style.display = "block";
}
//TODO modal close
function closeModal() {
    modal.style.display = "none";
    modalContent[0].removeChild(modalContent[0].getElementsByTagName('p')[0])
    modalContent[0].removeChild(modalContent[0].getElementsByTagName('button')[0])
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

//TODO start time do section close
// window.onload = function () {
//     timeSection()
//}

function newDiv(newContent) {
    result = document.createElement('div')
    //result.innerHTML = newContent
    return result
}

function newP(newContent) {
    result = document.createElement('div')
    //result.innerHTML = newContent
    return result
}

function newInput(newContent) {
    result = document.createElement('div')
    //result.innerHTML = newContent
    return result
}

function userNameStart() {
    pOne = 'User Name'
    pOne.innerHTML = 'User Name'
    div1 = newDiv()
    div1.innerHTML = pOne
    div1.classList.add('form-Element')
    console.log(div1)
    allUser = div1
    inputUser = newInput()
    inputUser.setAttribute('id', 'name')
    div2.innerHTML = inputUser
    inputButton = newInput()
    inputButton.setAttribute('id', 'Next_page')
    div2.innerHTML += inputButton
    //div2= newDiv(inputUser, inputButton)
    div2.classList.add('form-Element')
    allUser += div2
    console.log(allUser)
    return allUser
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
function yourloose() {
    newh2 = document.createElement("h2")
    newp = document.createElement("p")
    newh2.innerHTML = "Your lose"
    newp.innerHTML = "Try again"
    console.log(newh2)
    console.log(modal.style.display)
    modalContent[0].appendChild(newh2)
    modalContent[0].appendChild(newp)
    modalContent[0].appendChild(newButton())
    // newButton()
    openModal()
    // setTimeout(function () {
    //     openModal()
    //     var Despues = new Date
    //     console.log(Despues.getTime() - antes.getTime())
    // }, 10000)
}
function youwin() {
    newh2 = document.createElement("h2")
    newp = document.createElement("p")
    newh2.innerHTML = "You Win"
    newp.innerHTML = "Try again"
    console.log(newh2)
    console.log(modal.style.display)
    modalContent[0].appendChild(newh2)
    modalContent[0].appendChild(newp)
    modalContent[0].appendChild(newButton())
    // newButton()
    openModal()
    // setTimeout(function () {
    //     openModal()
    //     var Despues = new Date
    //     console.log(Despues.getTime() - antes.getTime())
    // }, 10000)
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