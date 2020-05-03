const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";    //���� �׸� ���� �� ���̴�.
ctx.lineWidth = 2.5;            //�� ���� �ʺ� 2.5px. 

let painting = false;


function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){    //Ŭ���ϰ� �����̴� painting�� true�� ����
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){      //path = ��(line)
        // console.log("creating path in ", x, y);
        ctx.beginPath();
        ctx.moveTo(x, y);   //Ŭ���ϱ� �ٷ�  ������ ��ġ! ������� ����.
    } else {
        // console.log("creating [line] in ", x, y);
        ctx.lineTo(x, y);   //�� ��ġ���� ���� ��ġ���� ���� �����.
        ctx.stroke();       //�н��� ����� ���� �ߴ´�.
    }
}

function handleColorClick(event){
    const color =  event.target.style.backgroundColor;
    ctx.strokeStyle = color;    //�� ����
}

function handleRangeChange(event){
    console.log(event);
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); //Ŭ�������� true(�׸������)
    canvas.addEventListener("mouseup", stopPainting);   //Ŭ�� �� �� ���� �� false(����)
    canvas.addEventListener("mouseleave", stopPainting);
}
//potato -> array ���� ������ �����۵��� ��ǥ�ϴ� ��
Array.from(colors).forEach(potato => potato.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}



