var mouse_Event =""
var last_position_of_X, last_position_of_Y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="red"
width=1

canvas.addEventListener("mousedown" , myMouseDown)
function myMouseDown(){
    mouse_Event="mousedown"
    color=document.getElementById("color").value
    width=document.getElementById("width").value

}

canvas.addEventListener("mouseup" , myMouseUp)
function myMouseUp(){
    mouse_Event="mouseup"
}

canvas.addEventListener("mouseleave" , myMouseLeave)
function myMouseLeave(){
    mouse_Event="mouseleave"
}

canvas.addEventListener("mousemove" , myMouseMove)
function myMouseMove(e){
    current_position_of_mouseX=e.clientX-canvas.offsetLeft
    current_position_of_mouseY=e.clientY-canvas.offsetTop
    if(mouse_Event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.arc(current_position_of_mouseX,current_position_of_mouseY,40,0,2*Math.PI)
        ctx.stroke()
    }

    last_position_of_X=current_position_of_mouseX
    last_position_of_Y=current_position_of_mouseY
}

function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}