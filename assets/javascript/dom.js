
//TODO To begin the game
const Start=document.getElementById("first_page")
const First=document.getElementById("container1")
const butStart=document.getElementById("Next_page")

//status
const lvl=document.getElementById("lvl")
const user_box=document.getElementById("user_box")
let userScore= document.getElementById('userScore')

//topos
const oso=document.querySelector(".oso")
const Cuadrado=document.querySelectorAll(".hueco")

//variables
var save=window.localStorage;
let jon
var on=0
let score=0
let life =3
var apocalipsis=0
var gameTime


//TODO Dom Modal window
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalContent= document.getElementsByClassName('modal-content')


//TODO time bar
const Tprogres=document.getElementById("Tprogres")



