//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for Wack-a-Mole
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Wack_a_Mole(){
    function makebtn(text){
        let btn = document.createElement("button");
        btn.innerText = text;
        btn.onclick = () => {
            points.innerText = "Points: "+count;
            if(btn.innerText=="Mole!"){
                count = count+1
                points.innerText = "Points "+count;
                btn.innerText = "Wack!"
                setTimeout(()=>{btn.innerText = "----"},0)
            }
            else{
                count =- 1
                points.innerText = "Points "+count;
                btn.innerText = "Wack!"
                setTimeout(()=>{btn.innerText = "----"},555)
            }
        }
        return btn;
    }
    let holes = [
        [makebtn("----"),makebtn("----"),makebtn("----"),makebtn("----")],
        [makebtn("----"),makebtn("----"),makebtn("----"),makebtn("----")],
        [makebtn("----"),makebtn("----"),makebtn("----"),makebtn("----")]
    ];
    let count = 0;
    let points = document.createElement("div");
    points.innerText = "Points "+count;
    let rounds = 1;
    let what = setInterval(game, 2222);
    let random1 = Math.floor(Math.random()*3)
    let random2 = Math.floor(Math.random()*2)

    function game(){
        random1 = Math.floor(Math.random()*3)
        random2 = Math.floor(Math.random()*4)
        holes[random1][random2].innerText = "Mole!"
        if(rounds==5+1){
            clearInterval(what)
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