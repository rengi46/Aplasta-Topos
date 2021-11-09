//TODO add user to localStorage
function poneruser(){
    const inputname= document.getElementById("userInput")
    const user=createUser(inputname.value)
    var arruser=(JSON.parse(save.aplastaTopos));
    console.log(arruser)
    var objuser=arruser[user]
    console.log(objuser)
    user_box.innerText=objuser.nameUser
}

//TODO add score to localStorage
function addScore(name){
    const user=createUser(name)
    var arruser=(JSON.parse(save.aplastaTopos));
    console.log(arruser)
    var objuser=arruser[user]
    objuser.userScore= finalScore;
    arruser[user]=objuser
    console.log(arruser)
    arrayString= (JSON.stringify(arruser))
    console.log(arrayString)
    save.aplastaTopos= arrayString;
}


function createUser(name = "guest") {
    // let comp = JSON.parse(window.localStorage)
    // console.log(comp)
    var arr = []
    var rep = 0
    if (save.aplastaTopos) {
        arr = (JSON.parse(save.aplastaTopos));
        var i = 0
        arr.forEach(obj => {
            if (obj.nameUser == name) {
                rep = i
            }
            i++
        });
    }
    if (rep == 0) {
        var newobj = {
            nameUser: name,
            scoreUser: 0
        }
        console.log("A")
        guardar(newobj)
        return arr.length - 1
    }
    else if (rep != 0) {
        console.log("B")
        return rep
    }

}

function guardar(obj) {
    if (save.aplastaTopos) {
        arrlocal = (JSON.parse(save.aplastaTopos));
        arrlocal.push(obj)
        jon = JSON.stringify(arrlocal)
        save.aplastaTopos = jon
    }
    else if (!save.aplastaTopos) {
        var arrlocal = []
        arrlocal.push(obj)
        jon = JSON.stringify(arrlocal)
        save.aplastaTopos = jon
    }
}



