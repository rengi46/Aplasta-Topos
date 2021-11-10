function user(name = 'guest', score = 0){
    return{
        name: name,
        score: score
    }
}

function loadUser() {
    if(localStorage.getItem('userBook') == null){
        return []
    }
    return JSON.parse(localStorage.getItem('userBook'))
}

username= document.getElementById('userInput')

function addUser() {
    calculateScore()
    nameUser= user_box.textContent
    var obj = user(nameUser, finalScore);
    console.log(obj)
    userBook.push(obj);

    localStorage.setItem('userBook', JSON.stringify(userBook))
}

function findUser() {
    result = userBook.filter( user=> {
        return
    })
}

