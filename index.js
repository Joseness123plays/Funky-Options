for(let i=1;i<Math.floor(window.innerWidth/75);i++){
    let rope = document.createElement("img")
    rope.src = "pixil-frame-0.png"
    rope.width = 75
    document.querySelector("#decor").appendChild(rope)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for dice
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dice(){
    
    document.getElementById("console").innerText = "";                                                        
    
    let Dice = ["Dice_1.png", "Dice_2.png", "Dice_3.png", "Dice_4.png", "Dice_5.png","Dice_6.png"];
    let dice = Math.floor(Math.random() *6)+1;
    dicepic = new Image();
    dicepic.src = Dice[dice-1];
    document.getElementById("console").innerText = "The dice rolled:\n"+dice+"\n";
    document.getElementById("console").appendChild(dicepic);
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
        text2.innerText = text+" backwards: "+text.split("").reverse().join("");;
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for coinflip
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function coinflip(){
    let coin = Math.floor(Math.random()*2);

    let coinpich = new Image();
    coinpich.src = "Heads.png"
    coinpich.id = "coinh"
    let coinpict = new Image ();
    coinpict.src = "Tails.png"
    coinpict.id = "coint"
    if (coin==0){
        document.getElementById("console").innerText = "Its heads!";
        document.getElementById("console").appendChild(coinpich);
    }
    if (coin==1){
        document.getElementById("console").innerText = "Its tails!";
        document.getElementById("console").appendChild(coinpict);
    }
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
            text2.innerText = text+" is "+text.length+" letters long";
        }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function for tictactoe
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function TicTacToe(){
    document.getElementById("console").innerText = "";
    let tic=0;
    let tictactoe = [1,2,3,4,5,6,7,8,9];
    let o = 0;
    for(let i=1;i<=9;i++){
        tictactoe[i-1] = document.createElement("button");
        tictactoe[i-1].innerText = "-"
        document.getElementById("console").appendChild(tictactoe[i-1]);
        tictactoe[i-1].onclick = function(){
            if(tic<=0){
                tictactoe[i-1].innerText = "X";
                tictactoe[i-1].disabled = true;
                ++tic;
            }
        else {
                tictactoe[i-1].innerText = "O";
                tictactoe[i-1].disabled = true;
                tic=tic-tic;
            }
        }
        o++;
        if(o>=3){
            let br = document.createElement("br");
            document.getElementById("console").appendChild(br);
            o = o-o;
        }
    }   
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for Math Button
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function math_button(){
    document.getElementById("console").innerText = "";

    //The box
    let box = document.createElement("div");
    box.id = "math_box";
    box.style.color = "black";
    document.getElementById("console").appendChild(box);

    //Functionallity (Required before)
    let num1 = Math.floor(Math.random()*13);
    let num2 = Math.floor(Math.random()*13);
    let num3 = num1*num2;
    let r = 0;

    //box contents
        let text1 = document.createElement("h1");
            text1.innerText = "Math button";
            text1.style.border = "dotted";
            text1.style.borderColor = "yellow";
            text1.style.width = "50%";
        let line = document.createElement("hr");
        let line2 = document.createElement("hr");
        let line3 = document.createElement("hr");
        let text2 = document.createElement("h2");
            text2.innerText = (num1+"X"+num2);
            text2.style.border = "inset";
            text2.style.width = "50%";
            text2.style.borderColor = "blue";
        let text3 = document.createElement("h3");
            text3.innerText = "What is?";
        let input = document.createElement("input");
            input.id = "input"
        let sumbit = document.createElement("button");
            sumbit.innerText = "sumbit";
        let reset = document.createElement("button");
            reset.innerText = "reset";
            reset.disabled = true;
        let br = document.createElement("br");
        let s = document.createElement("span");
            s.innerText = r;
        let str = document.createElement("span");
            str.innerText = "Streak: ";
            str.id = "str";
        let text4 = document.createElement("h3");
            text4.innerText = "";
        let text5 = document.createElement("h2");
            text5.innerText = "";
        let Correct_sound = document.createElement("audio");
            Correct_sound.src = "/Sound_effects/correct.wav";
        let Incorrect_sound = document.createElement("audio");
            Incorrect_sound.src = "/Sound_effects/Incorrect.wav";


    //More Functionallity (This needs to come after)
    function streak_color(){
        if(r==0){
            s.style.color = "grey";
        }
        if(r>=1){
            s.style.color = "orange";
        }
        if(r>=2){
            s.style.color = "lightgreen";
        }
        if(r>=4){
            s.style.color = "green";
        }
        if(r>=8){
            s.style.color = "lightblue";
        }
        if(r>=12){
            s.style.color = "blue";
        }
        if(r>=20){
            s.style.color = "purple";
        }
    }

    streak_color();

    sumbit.onclick = function(){
        sumbit.disabled = true;
        ans = input.value;
        if(ans==num3){
            text4.innerText = "You are...";
            Correct_sound.play();
            r++;
            setTimeout(function(){ text5.innerText = "Correct!"; str.innerText = "Streak: "; s.innerText = r; document.getElementById("str").appendChild(s); streak_color(); reset.disabled = false; }, 1000);
            console.log(r);
        }
    else{
            text4.innerText = "You are...";
            Incorrect_sound.play();
            r = 0;
            setTimeout(function(){ text5.innerText = "Incorrect!"; str.innerText = "Streak: "; s.innerText = r; document.getElementById("str").appendChild(s); streak_color(); reset.disabled = false; }, 1000);
            console.log(r);
        }
    }
    reset.onclick = function(){
        num1 = Math.floor(Math.random()*13);
        num2 = Math.floor(Math.random()*13);
        num3 = num1*num2;
        text4.innerText = "";
        text5.innerText = "";
        text2.innerText = (num1+"X"+num2);
        sumbit.disabled = false;
        reset.disabled = true;
    }

    //appends/output
    document.getElementById("math_box").appendChild(text1);
    document.getElementById("math_box").appendChild(line);
    document.getElementById("math_box").appendChild(text3);
    document.getElementById("math_box").appendChild(text2);
    document.getElementById("math_box").appendChild(line2);
    document.getElementById("math_box").appendChild(input);
    document.getElementById("math_box").appendChild(sumbit);
    document.getElementById("math_box").appendChild(reset);
    document.getElementById("math_box").appendChild(br);
    document.getElementById("math_box").appendChild(str);
    document.getElementById("str").appendChild(s);
    document.getElementById("math_box").appendChild(line3);
    document.getElementById("math_box").appendChild(text4);
    document.getElementById("math_box").appendChild(text5);
    document.getElementById("math_box").appendChild(Correct_sound);
    document.getElementById("math_box").appendChild(Incorrect_sound);
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
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for clearing
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Clear(){
    document.getElementById("console").innerText = "";
}