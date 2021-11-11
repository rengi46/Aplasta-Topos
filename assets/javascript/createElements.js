
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

function newDiv(){
    result = document.createElement('div')
    result.setAttribute('id', 'tableDiv')
    result.classList.add('modal-content')
    result.classList.add('form-element')
    return result
}

function newTable(){
    result = document.createElement('table')
    result.setAttribute('id', 'scoreTable')
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


//TODO createElement table and table rows
function newTd(newContent) {
    var result = document.createElement('td');
    result.innerHTML = newContent;
    return result;
};




var listUser
function showScores(book) {
    table.innerHTML = "";
    const tr = document.createElement('tr');
        tr.appendChild(newTd('User Name'));
        tr.appendChild(newTd('User Score'));
        table.appendChild(tr)
    
    book.forEach(user => {
        const tr = document.createElement('tr');
        tr.appendChild(newTd(user.name));
        tr.appendChild(newTd(user.score));
        table.appendChild(tr)
    });
};