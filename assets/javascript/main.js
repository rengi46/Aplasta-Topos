//TODO modal window

function modalText(text) {
    pOne = document.createElement('p')
    pOne.innerHTML = text
    modalContent[0].appendChild(pOne)
    openModal()
    //setTimeout(closeModal, 3000)
}

function modalStart() {
    pagehtml = ''
    startPage = userNameStart()
    console.log(startPage)
    pagehtml.innerHTML = startPage
    modalContent[0].appendChild(startPage)
    openModal()
    //setTimeout(closeModal, 3000)
}


//TODO modal open
function openModal() {
    modal.style.display = "block";
}
//TODO modal close
function closeModal() {
    modal.style.display = "none";
    modalContent[0].removeChild(modalContent[0].getElementsByTagName('p')[0])
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


añadiendolo()

function añadiendolo() {
    Cuadrado.forEach(cuadrado => {
        cuadrado.classList.remove("oso")
    })
    Cajaaleatoria = Cuadrado[Math.floor(Math.random() * 12)]
    Cajaaleatoria.classList.add('oso')
};

function moveMole() {
    setInterval(añadiendolo, 300)
}

moveMole()

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
        console.log(score)
      } else if(life>0){
        life--
        console.log(life)

      } else if (life==0){
        
      }
    });
  });

//   function score(){
      
//   }
    // Cuadrado.forEach(cuadrado => {
    //   cuadrado.addEventListener('click', () => {
    // })