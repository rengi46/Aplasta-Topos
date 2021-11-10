
//TODO To begin the game
const Start = document.getElementById("first_page")
const First = document.getElementById("container1")
const butStart = document.getElementById("Next_page")
const oso = document.querySelector(".oso")
const lvl = document.getElementById("lvl")
const user_box = document.getElementById("user_box")
const userName = document.getElementById("user_box")
var save = window.localStorage;
let jon

let score=0
let userScore= document.getElementById('userScore')

const Cuadrado=document.querySelectorAll(".hueco")

//TODO Dom Modal window
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalContent= document.getElementsByClassName('modal-content')
//nuevo modal de Ready And go
const nuevoModal= document.getElementById("nuevo_modal")


//TODO time bar
const Tprogres=document.getElementById("Tprogres")





// function Hide() {
//   Start.style.display="none";
//   First.style.display="block";
//   }