var mouseEvent="empty";

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="black";
widthofline=1;
radius=50;

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e) {
    color=document.getElementById("linecolor").value;
    widthofline=document.getElementById("linewidth").value;
    radius=document.getElementById("lineradius").value;
    
    mouseEvent="mouseDown"
}
canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e) {
    var current_positionof_mousex=e.clientX-canvas.offsetLeft;
    var current_positionof_mousey=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=widthofline;
       ctx.arc(current_positionof_mousex, current_positionof_mousey, radius ,0 ,2*Math.PI);
       ctx.stroke();

    }
}
canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e){
    mouseEvent="mouseUP"
}

canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
    mouseEvent="mouseleave"
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}