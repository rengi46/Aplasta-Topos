//TODO modal window
function modalText(text) {
    pOne = document.createElement('p')
    pOne.innerHTML = text
    ModalContent.appendChild(pOne)
    openModal()
    setTimeout(closeModal, 3000)
}

//TODO modal open
function openModal() {
    modal.style.display = "block";
}
//TODO modal close
function closeModal() {
    modal.style.display = "none";
    ModalContent.removeChild(ModalContent.getElementsByTagName('p')[0])
}

//TODO clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

//TODO clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == MODAL) {
        modal.style.display = "none";
    }
}

//TODO start time do section close
// window.onload = function () {
//     timeSection()
//}