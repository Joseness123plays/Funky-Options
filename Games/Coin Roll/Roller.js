let idk;
let i = 1
let beep = document.createElement("audio")
beep.src = "beep.mp3"
let dot = document.createElement("h2")
dot.innerText = ""
document.body.appendChild(dot)
let coin = document.createElement("img")
document.body.appendChild(coin)
function Roll(){
    document.getElementById("btn").disabled = true
    setTimeout(() => {
        beep.play()
        document.getElementById("btn").disabled = false
    }, 1665);
    coin.src = ""
    dot.innerText = ""
    let rolling = setInterval(() => {
        dot.innerText += "."
        i++
        if(i>3){
            i=1
            idk = Math.floor(Math.random()*2)
            if(idk==0){
                dot.innerText = "Its Heads!"
                coin.src = "Heads.png"
            }
            else{
                dot.innerText = "Its Tails!"
                coin.src = "Tails.png"
            }
            clearInterval(rolling)
        }
    }, 555);
}