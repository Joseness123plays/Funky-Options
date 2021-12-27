let rolling = document.createElement("audio");
rolling.src = "Dice_Roll.mp3";
let Faces = ["Dice_1.png", "Dice_2.png", "Dice_3.png", "Dice_4.png", "Dice_5.png","Dice_6.png"];
let rng = Math.floor(Math.random()*6+1)
function roll(){
    rolling.play();
    document.querySelector("#btn").disabled = true
    setTimeout(() => {document.querySelector("#btn").disabled = false}, 1090);
    rng = Math.floor(Math.random()*6+1)
    document.querySelector("#btn").innerText = "----------------------------\n| ! Roll The Dice Again ! |\n----------------------------"
    document.querySelector("#txt").innerText = "The Dice Rolled: "+rng+" \n"
    document.querySelector("#img").src = "Dice\\"+Faces[rng-1]
}

