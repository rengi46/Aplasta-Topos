// butStart.addEventListener("click", function (e) {
//     e.preventDefault();
//     Hide()
//     TimeBar()
//     Tprogres.classList.toggle("timeOut")
// })

function V(life){
    if(life==3){lvl.style.backgroundImage="url(/assets/img/3vidas.png)"}
    else if(life==2){lvl.style.backgroundImage="url(/assets/img/2vida.png)"}
    else if(life==1){lvl.style.backgroundImage="url(/assets/img/1vida.png)"}
    else lvl.style.backgroundImage="url(/assets/img/noVidas.png)"
}