Wack_A_Mole();
function Wack_A_Mole(){
    document.querySelector("#console").innerText = ""
    let sumbit = document.createElement("button")
    sumbit.innerText = "-------\n|submit|\n-------";
    sumbit.onclick = () => {
        document.querySelector("#console").innerText = ""
        let rounds = parseInt(input.value);
        Game_Start(rounds);
    }
    let input = document.createElement("input")
    input.type = "number"
    let backplate = document.createElement("div")
    backplate.style.backgroundColor = "grey"
    let txt = document.createElement("div")
    txt.innerText = "|How many rounds?|"
    document.getElementById("console").appendChild(document.createElement("hr"))
    document.querySelector("#console").appendChild(txt)
    document.getElementById("console").appendChild(document.createElement("hr"))
    append(backplate,"console")
    backplate.appendChild(input)
    backplate.appendChild(sumbit)

    function Game_Start(rounds){
        function makebtn(text){
            let btn = document.createElement("button");
            btn.innerText = text;
            btn.onclick = () => {
                points.innerText = "Points: "+count;
                if(btn.innerText=="Mole!"){
                    MolesWacked = MolesWacked + 1
                    count = count+1;
                    points.innerText = "Points "+count;
                    btn.innerText = "Wack!"
                    setTimeout(()=>{btn.innerText = "------"},555)
            }
            else{
                HolesWacked = HolesWacked +1
                count = count - 1;
                points.innerText = "Points "+count;
                btn.innerText = "Wack!"
                setTimeout(()=>{btn.innerText = "------"},555)
                }
            }
            return btn;
        }
    let holes = [
        [makebtn("------"),makebtn("------"),makebtn("------"),makebtn("------")],
        [makebtn("------"),makebtn("------"),makebtn("------"),makebtn("------")],
        [makebtn("------"),makebtn("------"),makebtn("------"),makebtn("------")]
    ];
    let MolesWacked = 0;
    let HolesWacked = 0;
    let count = 0;
    let points = document.createElement("div");
    points.innerText = "Points "+count;
    let round = 0;
    let what = setInterval(game, 2222);
    let random1 = Math.floor(Math.random()*3)
    let random2 = Math.floor(Math.random()*2)

    function game(){
        round = round + 1
        random1 = Math.floor(Math.random()*3)
        random2 = Math.floor(Math.random()*4)
        holes[random1][random2].innerText = "Mole!"
        if(round>rounds){
            clearInterval(what)
            document.querySelector("#console").innerText = ""
            let Game_over = document.createElement("div")
            Game_over.style.border = "dotted"
            Game_over.style.borderColor = "Yellow"
            Game_over.innerText = ("Game Over!\nYou Wacked : "+MolesWacked+" moles\nYou Wacked: "+HolesWacked+" holes\nYou Got "+count+" points")
            document.querySelector("#console").appendChild(Game_over)
            }
        }
    for(let i=1;i<=3;i++){
        for(let o=1;o<=4;o++){
            document.querySelector("#console").appendChild(holes[i-1][o-1])
        }
            document.querySelector("#console").appendChild(points)
            document.querySelector("#console").appendChild(document.createElement("br"))
        }
    }
}
function append(wat,where){
    document.getElementById(where).appendChild(wat);
}