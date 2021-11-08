//TODO modal window
function modalText(text) {
    pOne = document.createElement('p')
    pOne.innerHTML = text
    MODAL_CONTENT[0].appendChild(pOne)
    openModal()
    setTimeout(closeModal, 3000)
}

//TODO modal open
function openModal() {
    MODAL.style.display = "block";
}
//TODO modal close
function closeModal() {
    MODAL.style.display = "none";
    MODAL_CONTENT[0].removeChild(MODAL_CONTENT[0].getElementsByTagName('p')[0])
}

//TODO clicks on <span> (x), close the modal
// SPAN.onclick = function () {
//     MODAL.style.display = "none";
// }

// //TODO clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == MODAL) {
//         MODAL.style.display = "none";
//     }
// }

//TODO start time do section close
// window.onload = function () {
//     timeSection()
//}