
//TODO create Element H2
function newH2(newContent) {
    result = document.createElement('h2')
    result.innerHTML = newContent
    return result
}
//TODO create Element  paragraf
function newP(newContent) {
    result = document.createElement('p')
    result.innerHTML = newContent
    return result
}

//TODO create Element input
function newInput() {
    result = document.createElement('input')
    result.setAttribute('type', 'text')
    result.setAttribute('id', 'userInput')
    result.classList.add('modal-content')
    result.classList.add('form-element')
    return result
}

//TODO Create Element button
function newButton(name = 'Start', func ) {
    button = document.createElement('button')
    button.classList.add('modal-content')
    button.classList.add('form-element')
    button.setAttribute('id', 'Next_page')
    button.setAttribute('onclick', func)
    button.innerHTML = name
    return button
}
