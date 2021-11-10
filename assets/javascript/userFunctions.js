function user(name = 'guest', score = 0){
    return{
        name: name, 
        score: score
    }
}

var userBook

function loadUser() {
    if(localStorage.getItem('userBook') == null){
        return[]
    }
    return JSON.parse(localStorage.getItem('userBook'))
}

username= document.getElementById('userInput')

function addUser() {
    //console.log(user_box.value)
    var obj = user(user_box.value, finalScore);
    userBook.push(obj);

    localStorage.setItem('userBook', JSON.stringify(userBook))
}

function findUser() {
    result = userBook.filter( user=> {
        return 
    })
}
window.onload