
var startTime;
var afterTime;

var finalScore;
var maxtime= 30000;
var scoreResult=0
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
    guardar(newobj)
    return arr.length-1
}
else if(rep!=0){
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


function winersScore(){
    if(save.aplastaTopos){
        var arrlocal=(JSON.parse(save.aplastaTopos));
        const maxscore=[]
        var ranking=document.createElement("ul")
        var first=document.createElement("li")
        var second=document.createElement("li")
        var three=document.createElement("li")
        arrlocal.sort((a,b)=>{return a.scoreUser-b.scoreUser})
        arrlocal.forEach((e) => {
            // console.log(`${e.nameUser} ${e.scoreUser}`);
        });
    }

}