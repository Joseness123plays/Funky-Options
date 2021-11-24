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
    btn.id = "btn"

    let reset = document.createElement("button");
    reset.innerText = "reset";
    reset.id = "reset"

    let sumbit = document.createElement("input");
    sumbit.id = "input";

    document.getElementById("console").appendChild(btn);
    document.getElementById("console").appendChild(sumbit);

    btn.onclick = function(){
        let text = document.getElementById("input").value;
        let text2 = document.createElement("p");
        text2.innerText = "Reversed word: "+text.split("").reverse().join("");
        document.getElementById("console").appendChild(text2);
        document.getElementById("btn").disabled = true;
        
    }
    reset.onclick = function(){
        
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
    
        document.getElementById("console").appendChild(btn);
        document.getElementById("console").appendChild(sumbit);
    
        btn.onclick = function(){
            let text = document.getElementById("input").value;
            let text2 = document.createElement("p");
            text2.innerText = "Charaters: "+text.length;
            document.getElementById("console").appendChild(text2);
            document.getElementById("sumbit").disabled = true;
            
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
//Function for clearing
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Clear(){
    document.getElementById("console").innerText = "";
}