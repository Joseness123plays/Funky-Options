//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//A function to take care of some CSS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function load_CSS(){
    Clear("decor")
    for(let i=1;i<Math.floor(window.innerWidth/75);i++){
        let rope = document.createElement("img")
        rope.src = "Web_Assets\\decor.png"
        rope.width = 75
        document.querySelector("#decor").appendChild(rope)
        }
    document.querySelector("#console").style.height = ((70/100)*window.innerHeight)+"px"
    document.getElementById("left").style.height = ((70/100)*window.innerHeight)+"px"
    document.getElementById("right").style.height = ((70/100)*window.innerHeight)+"px"
}
window.addEventListener('resize',load_CSS,false)
load_CSS()
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for dice
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dice(){
    Clear("console")
    let iframe = document.createElement("iframe");
    iframe.src = "Games\\Dice Roller\\Dice.html"
    iframe.width = "100%"
    iframe.height = "100%"
    append(iframe,"console")
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function to reverse text
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
        text2.innerText = "\n"+text+" backwards: "+text.split("").reverse().join("");;
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for coinflip
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function coinflip(){
    Clear()
    let iframe = document.createElement("iframe");
    iframe.src = "Games\\Coin Roll\\Coin.html"
    iframe.width = "100%"
    iframe.height = "100%"
    append(iframe,"console")
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for Button clicker
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function buttonclicker(){
    document.getElementById("console").innerText = "";
    let buttonclick = document.createElement("button");
    buttonclick.id = "clicky";
    buttonclick.innerText = "Button"
    let clickcount = document.createElement("div");
    clickcount.id = "clickcount"
    document.getElementById("console").appendChild(buttonclick)
    document.getElementById("console").appendChild(clickcount);
    var clicks = 0;
    document.getElementById("clicky").onclick = function(){
        clicks = clicks + 1;
        buttonclick.innerText = "Click!";
        setTimeout(() => {buttonclick.innerText = "Button"}, 550);
        clickcount.innerText = "Taps: "+clicks;
        return clicks;
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for word length (re used most of reverse text lol)
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
            text2.innerText = "\n"+text+" is "+text.length+" letters long";
        }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for tictactoe
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function TicTacToe(){
    Clear()
    let iframe = document.createElement("iframe");
    iframe.src = "Games\\TicTacToe\\Tic.html"
    iframe.width = "100%"
    iframe.height = "100%"
    document.getElementById("console").appendChild(iframe)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for Math Button
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function math_button(){
    Clear()
    let iframe = document.createElement("iframe");
    iframe.src = "Games\\Math Button\\Ma.html"
    iframe.width = "100%"
    iframe.height = "100%"
    append(iframe,"console")
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BUILT TO CRASH REEEEEEEEEEEEEEEEEEEE (I accedently found this when making wack a mole so I resused all the code for Wack a mole)
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
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Fuction for Wack_A_Mole (I had to use an iframe to stop it from running in the background)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Wack_A_Mole(){
    document.getElementById("console").innerText = "";
    let iframe = document.createElement("iframe");
    iframe.src = "Games\\Wack_A_Mole\\Wack.html"
    iframe.width = "100%"
    iframe.height = "100%"
    document.getElementById("console").appendChild(iframe)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for info (alr I will use iframes from now on)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function info(){
    document.getElementById("console").innerText = "";
    let iframe = document.createElement("iframe");
    iframe.src = "Games\\Info(Not_A_Game)\\Page.html"
    iframe.width = "100%"
    iframe.height = "100%"
    document.getElementById("console").appendChild(iframe)
    
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for clearing
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Clear(text){
    if(text==null){
        document.querySelector("#console").innerText = ""
    }
    else{
        document.querySelector("#"+text).innerText = "";
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Functions for the disc Button (aka the clear button)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Console_Wipe() {
    let btn = document.getElementById("button")
    btn.src = "Web_Assets\\PC\\Button_Pressed.png"
    Clear();
}
function Mouse_Over(){
    let btn = document.getElementById("button")
    btn.src = "Web_Assets\\PC\\Button_Mouse_Over.png"
}
function Mouse_Leave(){
    let btn = document.getElementById("button")
    btn.src = "Web_Assets\\PC\\Button.png"
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for appending
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function append(wat,where){
    document.getElementById(where).appendChild(wat);
}