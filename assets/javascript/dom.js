function callDom() {
    //TODO Table dom
    tableDiv = document.getElementById('tableDiv')
    table = document.getElementById('scoreTable')
}
//TODO To begin the game
const Start = document.getElementById("first_page")
const First = document.getElementById("container1")
const butStart = document.getElementById("Next_page")
const oso = document.querySelector(".oso")
const lvl = document.getElementById("lvl")
const user_box = document.getElementById("user_box")
//const divContent = document.getElementById("scoreDiv")
var save = window.localStorage;
let jon

let score = 0
let userScore = document.getElementById('userScore')

const Cuadrado = document.querySelectorAll(".hueco")

//TODO Dom Modal window
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalContent= document.getElementsByClassName('modal-content')
//nuevo modal de Ready And go
const nuevoModal= document.getElementById("nuevo_modal")
const imgModal= document.querySelector(".imagentopo>img")




//TODO time bar
const Tprogres = document.getElementById("Tprogres")


//TODO buttons to show Score
allScores = document.getElementById('allScores')
topTen = document.getElementById('topTen')
closeScore = document.getElementById('closeScore')

