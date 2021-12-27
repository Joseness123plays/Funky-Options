let turn = "X"
let winner = false
let round = 1
let sound = document.createElement("audio")
sound.src = "Pressed.mp3"
function makebtn() {
    let btn = document.createElement("button")
    btn.innerText = "-"
    btn.onclick = ()=>{
        btn.disabled = true
        btn.innerText = turn
        sound.play()
        round++
        if(round>9  && winner==false){
            let Over = document.createElement("h1")
            Over.innerText = "\nGame Over!\nIts a TIE"
            Over.style.border = "dotted"
            Over.style.borderColor = "yellow"
            Over.style.color = "White"
            for(let i=0;i<3;i++){
                for(let o=0;o<3;o++){
                    board[i][o].remove()
                }
            }  
            document.body.appendChild(Over)
        }
        else if(turn=="X"){
            btn.style.color = "red"
            btn.style.opacity = 1.0
            Check()
            turn="O"
        }
        else if(turn=="O"){
            btn.style.color = "blue"
            btn.style.opacity = 1.0
            Check()
            turn="X"
        }
    }
    return btn;
}
function Game_Over() {
    let Over = document.createElement("h1")
        Over.innerText = "\nGame Over!\n"+turn+" won the game"
        Over.style.border = "dotted"
        Over.style.borderColor = "yellow"
        Over.style.color = "White"
        document.body.appendChild(Over)
        for(let i=0;i<3;i++){
            for(let o=0;o<3;o++){
                board[i][o].remove()
            }
        }  
}
function Check() {
    for (let i = 0; i < 3; i++) {
        if(board[i][0].innerText != "-" && board[i][1].innerText != "-" && board[i][2].innerText != "-"){
            if(board[i][0].innerText == board[i][1].innerText && board[i][0].innerText == board[i][2].innerText){
                winner = true
                Game_Over()
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if(board[0][i].innerText != "-" && board[1][i].innerText != "-" && board[2][i].innerText != "-"){
            if(board[0][i].innerText == board[1][i].innerText && board[0][i].innerText == board[2][i].innerText){
                winner = true
                Game_Over()
            }
        }
    }
    if(board[0][0].innerText != "-" && board[1][1].innerText != "-"&& board[2][2].innerText != "-"){
        if(board[0][0].innerText == board[1][1].innerText && board[0][0].innerText == board[2][2].innerText){
            winner = true
            Game_Over()
        }
    }
    if(board[0][2].innerText != "-" && board[1][1].innerText != "-"&& board[2][0].innerText != "-"){
        if(board[0][2].innerText == board[1][1].innerText && board[0][2].innerText == board[2][0].innerText){
            winner = true
            Game_Over()
        }
    }
}
let board = [
    [makebtn(),makebtn(),makebtn()],
    [makebtn(),makebtn(),makebtn()],
    [makebtn(),makebtn(),makebtn()]
]
for(let i=0;i<3;i++){
    for(let o=0;o<3;o++){
        document.body.appendChild(board[i][o])
    }
    document.body.appendChild(document.createElement("br"))
}