
//TODO create Element H2
function newH2(newContent) {
    result = document.createElement('h2')
    result.innerHTML = newContent
    return result
}
function newH3(newContent) {
    result = document.createElement('h3')
    result.innerHTML = newContent
    return result
}
//TODO create Element  paragraf
function newP(newContent) {
    result = document.createElement('p')
    result.innerHTML = newContent
    return result
}

function newImg(src, alt) {
    result = document.createElement('img')
    result.setAttribute('src', src)
    result.setAttribute('alt', alt)
    return result
}

//TODO create Element input
function newInput() {
    result = document.createElement('input')
    result.setAttribute('type', 'text')
    result.setAttribute('placeholder', 'User name ')
    result.setAttribute('id', 'userInput')
    result.classList.add('modal-content')
    result.classList.add('form-element')
    result.autocomplete = "off";
    result.inputmode = "text";
    result.id = 'userInput'
    return result
}

//TODO create a div
function newDiv(){
    result = document.createElement('div')
    result.setAttribute('id', 'tableDiv')
    result.classList.add('modal-content')
    result.classList.add('form-element')
    return result
}

//TODO create table
function newTable(){
    result = document.createElement('table')
    result.setAttribute('id', 'scoreTable')
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

//TODO Create Element button
function newInputTable(name = 'Start', setId, nameId,  func ) {
    result = document.createElement('input')
    result.setAttribute('type', 'button')
    result.setAttribute('value', name)
    result.setAttribute(setId, nameId)
    result.setAttribute('onclick', func)
    //result.innerHTML = name
    return result
}


//TODO createElement table and table rows
function newTd(newContent) {
    var result = document.createElement('td');
    result.innerHTML = newContent;
    return result;
};


//TODO create and add tr and td
function showScores(book) {
    table.innerHTML = "";
    const tr = document.createElement('tr');
        tr.appendChild(newTd('User Name'));
        tr.appendChild(newTd('User Score'));
        table.appendChild(tr)

    userBook.forEach(user => {
        const tr = document.createElement('tr');
        tr.appendChild(newTd(user.name));
        tr.appendChild(newTd(user.score));
        table.appendChild(tr)
    });
    //return table
};

function createhueco(num){
    hueco = document.createElement('div')
    hueco.classList.add('hueco')
    hueco.setAttribute('id', 'hueco'+num)
    return hueco
}

function createGarden(){
    console.log(window.innerHeight);
    // if(window.innerWidth<400 || window.innerHeight<400){
    //     alert("Please, resize your window "+window.innerWidth+" "+window.innerHeight)
    //     return
    // }
    

    let cols = Math.floor(window.innerWidth/300)
    let rows = Math.floor(window.innerHeight/230)
    if(cols<3) cols = 3
    else if (cols > 6) cols = 6
    if(rows<3) rows = 3
    else if (rows > 6) rows = 6
    const numHuecos = cols*rows
    const garden = document.getElementById('grid_hueco')
    garden.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    garden.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for (let i = 0; i < numHuecos; i++) {
        garden.appendChild(createhueco(i))
    }
}

function deleteGarden(){
    const garden = document.getElementById('grid_hueco')
    while (garden.firstChild) {
        garden.removeChild(garden.lastChild);
    }
}
