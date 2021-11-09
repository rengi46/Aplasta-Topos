
//To begin the game
// const Start=document.getElementById("first_page")
// const First=document.getElementById("container1")
// const butStart=document.getElementById("Next_page")
// const Cuadrado=document.querySelectorAll(".hueco")
// const oso=document.querySelector(".oso")
// let score=0
// let life=3

var startTime;
var afterTime;


function createUser(name="guest"){
    // let comp = JSON.parse(window.localStorage)
    // console.log(comp)
    var arr=[]
    var rep= 0
    if(save.aplastaTopos){
        arr=(JSON.parse(save.aplastaTopos));
        var i =0
        arr.forEach(obj => {
            if(obj.nameUser==name){
                rep=i
            }
            i++
        });
    }

if(rep==0){
    var newobj={
        nameUser: name,
        scoreUser:0
    }
    console.log("A")
    guardar(newobj)
    return arr.length-1
}
else if(rep!=0){
    console.log("B")
    return rep
}

}

function guardar(obj){
    if(save.aplastaTopos){
        arrlocal=(JSON.parse(save.aplastaTopos));
        arrlocal.push(obj)
        jon=JSON.stringify(arrlocal)
        save.aplastaTopos=jon
    }
    else if(!save.aplastaTopos) {
        var arrlocal=[]
        arrlocal.push(obj)
        jon=JSON.stringify(arrlocal)
        save.aplastaTopos=jon
    }
}