let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".new-game");
let mssg = document.querySelector("#mssg");

let flag = true;

const Win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(flag){
            box.textContent = "O";
        }
        else{
            box.textContent = "X";
        }
        flag = !flag;
        box.disabled = true;
        CheckWinner();
    });
});

const CheckWinner = () =>{
    for(let i=0;i<Win.length;i++){
        let p1 = boxes[Win[i][0]];
        let p2 = boxes[Win[i][1]];
        let p3 = boxes[Win[i][2]];

        if(p1.innerText != "" && p2.innerText != "" && p3.innerText != ""){
            if(p1.innerText === p2.innerText && p2.innerText === p3.innerText){
                p1.style.backgroundColor = "black";
                p2.style.backgroundColor = "black";
                p3.style.backgroundColor = "black";
                mssg.innerText = "Winner is " + p1.innerText;
                boxes.forEach(box => {
                    box.disabled = true;
                });
            }
        }
    }
}

function reset() {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "rgb(195, 242, 102)";
    });
    mssg.innerText = "";
}
