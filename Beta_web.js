//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for Wack-a-Mole
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Wack_a_Mole(){
    document.getElementById("console").innerText = "";
    let o = 0
    let holes = [];
    let random = Math.floor(Math.random()*16);
    for (let i = 0;i<=15;i++) {
        holes.push(document.createElement("button"));
        holes[i].innerText = "----";
        holes[i].onclick = ()=>{}
        document.getElementById("console").appendChild(holes[i])
        o++;
        if(o>=4){
            let br = document.createElement("br");
            document.getElementById("console").appendChild(br);
            o = o-o;
        }
    }
    function start(roundz) {
        for(roundz;roundz>=0;roundz--){
            setTimeout(() => {
                holes[random].innerText="----"
                console.log(random)
                console.log("Rounds left "+roundz)
            }, 1000);
                random = Math.floor(Math.random()*16);
                holes[random].innerText="Mole!"
        } 
    }
    start(5);
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for word length (Game mode coming)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function word_length(){
    document.getElementById("console").innerText = "";
    
    let btn = document.createElement("button");
    btn.innerText = "sumbit";

    let sumbit = document.createElement("input");
    sumbit.id = "input";

    let text;
    let text2 = document.createElement("span");
        text2.innerText = "";

    let a = 0;

    document.getElementById("console").appendChild(btn);
    document.getElementById("console").appendChild(sumbit);
    document.getElementById("console").appendChild(text2);
    btn.onclick = function(){
        a=1;
        text = document.getElementById("input").value;
        text2.innerText = text+" is "+text.length+" letters long";
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for reverse text (Game mode coming to dis too)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function reversetext(){
    document.getElementById("console").innerText = "";
    
    let btn = document.createElement("button");
    btn.innerText = "sumbit";

    let sumbit = document.createElement("input");
    sumbit.id = "input";

    let text;
    let text2 = document.createElement("span");
        text2.innerText = "";

    document.getElementById("console").appendChild(btn);
    document.getElementById("console").appendChild(sumbit);
    document.getElementById("console").appendChild(text2);

    btn.onclick = function(){
        text = document.getElementById("input").value;
        text2.innerText = text+" backwards: "+text.split("").reverse().join("");;
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BUILT TO CRASH WEEEEEEEEEEEEEEEEEEEE (I accedently found this when making wack a mole so I resused all the code for Wack a mole)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function crash() {
    document.getElementById("console").innerText = "";
    let o = 0
    let holes = [];
    let random = Math.floor(Math.random()*16);
    for (let i = 0;i<=15;i++) {
        holes.push(document.createElement("button"));
        holes[i].innerText = "----";
        holes[i].onclick = ()=>{}
        document.getElementById("console").appendChild(holes[i])
        o++;
        if(o>=4){
            let br = document.createElement("br");
            document.getElementById("console").appendChild(br);
            o = o-o;
        }
    }
    for(let roundz=15;roundz>=0;){
        setTimeout(() => {
            holes[random].innerText="----"
            console.log(random)
            console.log("Rounds left "+roundz)
            roundz--
        }, 1000);
        setTimeout(() => {
            holes[random].innerText="mole!"
            console.log(random)
        }, 1000);
    } 
}