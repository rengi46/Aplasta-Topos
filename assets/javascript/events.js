
butStart.addEventListener("click", function (e) {
    e.preventDefault();
    Hide()
    TimeBar()
    Tprogres.classList.toggle("timeOut")
})

function TimeBar(){
    var antes = new Date
    newh2=document.createElement("h2")
    newp=document.createElement("p")
    newh2.innerHTML="Your lose"
    newp.innerHTML="Try again"
    console.log(newh2)
    console.log(modal.style.display)
    ModalContent.appendChild(newh2)
    ModalContent.appendChild(newp)
    
    setTimeout(function(){
        openModal()
        var Despues = new Date
        console.log(Despues.getTime()-antes.getTime())
    },10000)
}