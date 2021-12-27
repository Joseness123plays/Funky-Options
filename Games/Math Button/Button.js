//This is a mess
let beep = document.createElement("audio")
beep.src = "beep.mp3"
let ye /*lol*/ = document.createElement("audio")
ye.src = "Correct.mp3"
let nu /*hehe*/ = document.createElement("audio")
nu.src = "Incorrect.mp3"
let wat;
let random1;
let random2;
let random3;
let max;
let min;
let ans;
let r = 0;
let s = document.createElement("h3")
s.innerText = r
let show1 = document.createElement("h5")
let show2 = document.createElement("h1")
show2.style.border = "outset"
show2.style.borderColor = "blue"
let show3 = document.createElement("h3")
show3.innerText = "You are..."
let show4 = document.createElement("h2")
let show5 = document.createElement("div")
show5.innerText = "\nStreak: "
let errortxt = document.createElement("h5")
let input = document.createElement("input")
input.placeholder = "<Insert Max number here>"
input.type = "number"
let res = document.createElement("button")
res.innerText = "Reset"
res.disabled = true
res.onclick = () => {
    beep.play()
    random1 = Math.floor(Math.random() * (max - min + 1 ))+ min;
    random2 = Math.floor(Math.random() * (max - min + 1 ))+ min;
    switch (wat) {
        case 1:
            document.getElementById("sub").innerText = "Addition" 
            random3 = random1 + random2
            show2.innerText = random1+"+"+random2
        break;
        case 2:
            document.getElementById("sub").innerText = "Subtraction"
            random3 = random1 - random2
            show2.innerText = random1+"-"+random2
        break;
        case 3:
            document.getElementById("sub").innerText = "Multiplication"
            random3 = random1 * random2
            show2.innerText = random1+"X"+random2
        break;
        case 4:
            document.getElementById("sub").innerText = "Division"
            random3 = random1 / random2
            show2.innerText = random1+"÷"+random2
        break;
        default:
            document.writeln("This is an error message")
        break;
        }
    show4.remove()
    show3.remove()
    btn.disabled = false
    res.disabled = true
}
let btn = document.createElement("button")
btn.innerText = "Submit"
btn.onclick = ()=>{
    beep.play()
    max = input.value;
    if(max==""){
        errortxt.innerText = "!Cannot be blank!"
        document.body.appendChild(errortxt)
    }
    else{
        input.type = "number"
        errortxt.remove()
        document.getElementById("sub").innerText = "Insert the minimum Number"
        input.placeholder = "<Insert Min number here>"
        input.value = ""
        input.type = "number"
        btn.onclick = () => {
            beep.play()
            input.type = "number"
            min = input.value;
            if(min==""){
                errortxt.innerText = "!Cannot be blank!"
                document.body.appendChild(errortxt)
            }
            else{
                min = parseInt(min)
                errortxt.remove()
                random1 = Math.floor(Math.random() * (max - min + 1 ))+ min;
                random2 = Math.floor(Math.random() * (max - min + 1 ))+ min;
                input.remove()
                btn.remove()
                show1.innerText = "What is?"
                input.placeholder = "<Insert answer here here>"
                btn.onclick = () => {
                    ans = parseInt(input.value)
                    if(ans==random3){
                        ye.play()
                        show4.innerText = "Correct!"
                        show4.style.color = "green"
                        setTimeout(() => {
                            r++
                            streak_color();
                            document.body.appendChild(show4)
                            s.innerText = r
                            btn.disabled = true
                            res.disabled = false
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            r=0
                            streak_color();
                            document.body.appendChild(show4)
                            s.innerText = r
                            btn.disabled = true
                            res.disabled = false
                        }, 1000);
                        nu.play()
                        show4.innerText = "Incorrect!"
                        show4.style.color = "red"
                    }
                    document.body.appendChild(show3)
                }
                streak_color();
                document.body.appendChild(show1)
                document.body.appendChild(show2)
                document.body.appendChild(document.createElement("hr"))
                document.body.appendChild(input)
                document.body.appendChild(btn)
                document.body.appendChild(res)
                document.body.appendChild(show5)
                document.body.appendChild(s)
                document.body.appendChild(document.createElement("hr"))
                switch (wat) {
                case 1:
                    document.getElementById("sub").innerText = "Addition" 
                    random3 = random1 + random2
                    show2.innerText = random1+"+"+random2
                break;
                case 2:
                    document.getElementById("sub").innerText = "Subtraction"
                    random3 = random1 - random2
                    show2.innerText = random1+"-"+random2
                break;
                case 3:
                    document.getElementById("sub").innerText = "Multiplication"
                    random3 = random1 * random2
                    show2.innerText = random1+"X"+random2
                break;
                case 4:
                    document.getElementById("sub").innerText = "Division"
                    random3 = random1 / random2
                    show2.innerText = random1+"÷"+random2
                break;
                default:
                    document.writeln("This is an error message")
                break;
                }
            }
        }
    }
}
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
function RNG(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//addition
function a() {
    beep.play()
    document.getElementById("option").remove()
    document.getElementById("sub").innerText = "Insert the maximum Number"
    document.body.appendChild(input)
    document.body.appendChild(btn)
    wat = 1
}
function A_OnHover() {
    document.getElementById("a").src = "Signs/Add_Up.png"
}
function A_OnLeave() {
    document.getElementById("a").src = "Signs/Add.png"
}
function A_OnMouseDown(){
    document.getElementById("a").src = "Signs/Add_Down.png"
}
//subtraction
function b() {
    beep.play()
    document.getElementById("option").remove()
    document.getElementById("sub").innerText = "Insert Max Number"
    document.body.appendChild(input)
    document.body.appendChild(btn)
    wat = 2
}
function B_OnHover() {
    document.getElementById("b").src = "Signs/Minus_Up.png"
}
function B_OnLeave() {
    document.getElementById("b").src = "Signs/Minus.png"
}
function B_OnMouseDown(){
    document.getElementById("b").src = "Signs/Minus_Down.png"
}
//multiplication
function c() {
    beep.play()
    document.getElementById("option").remove()
    document.getElementById("sub").innerText = "Insert Max Number"
    document.body.appendChild(input)
    document.body.appendChild(btn)
    wat = 3
}
function C_OnHover() {
    document.getElementById("c").src = "Signs/X_Up.png"
}
function C_OnLeave() {
    document.getElementById("c").src = "Signs/X.png"
}
function C_OnMouseDown(){
    document.getElementById("c").src = "Signs/X_Down.png"
}
//division
function d(){
    beep.play()
    document.getElementById("option").remove() 
    document.getElementById("sub").innerText = "Insert Max Number"
    document.body.appendChild(input)
    document.body.appendChild(btn)
    wat = 4
}
function D_OnHover() {
    document.getElementById("d").src = "Signs/Division_Up.png"
}
function D_OnLeave() {
    document.getElementById("d").src = "Signs/Division.png"
}
function D_OnMouseDown(){
    document.getElementById("d").src = "Signs/Division_Down.png"
}