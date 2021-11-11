//TODO create a user object
function user(name = 'guest', score = 0) {
    return {
        name: name,
        score: score
    }
}

//TODO load users and scores from localStorage
function loadUser() {
    if (localStorage.getItem('userBook') == null) {
        return []
    }
    return JSON.parse(localStorage.getItem('userBook'))
}

//TODO add user and save on localStorage
function addUser() {
    calculateScore()
    nameUser = user_box.textContent
    var obj = user(nameUser, finalScore);
    userBook.push(obj);

    localStorage.setItem('userBook', JSON.stringify(userBook))
}

//TODO order variable from score and split on first top ten
function orderBook() {
    orderUserBook = userBook.sort((a, b)=> a.score - b.score)
    topTen= orderUserBook.slice(0, 10)
    return orderUserBook
}
