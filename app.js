const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";    //내가 그릴 선이 이 색이다.
ctx.lineWidth = 2.5;            //그 선의 너비가 2.5px. 

let painting = false;


function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){    //클릭하고 움직이니 painting이 true인 상태
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){      //path = 선(line)
        // console.log("creating path in ", x, y);
        ctx.beginPath();
        ctx.moveTo(x, y);   //클릭하기 바로  직전의 위치! 여기부터 시작.
    } else {
        // console.log("creating [line] in ", x, y);
        ctx.lineTo(x, y);   //전 위치에서 지금 위치까지 선을 만든다.
        ctx.stroke();       //패스를 만들고 선을 긋는다.
    }
}

function handleColorClick(event){
    const color =  event.target.style.backgroundColor;
    ctx.strokeStyle = color;    //색 변경
}

function handleRangeChange(event){
    console.log(event);
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); //클릭했을때 true(그리기시작)
    canvas.addEventListener("mouseup", stopPainting);   //클릭 후 손 뗐을 때 false(멈춤)
    canvas.addEventListener("mouseleave", stopPainting);
}
//potato -> array 안의 각각의 아이템들을 대표하는 것
Array.from(colors).forEach(potato => potato.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}



