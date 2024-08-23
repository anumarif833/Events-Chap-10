// 1.  show an alert box on click on a link.
function clickble(run){
    alert(run)
}

// 2. Display some Mobile image in browser.on click on an image show the message in alert to user.

function zoomin(e){
    e.src= "https://www.icegif.com/wp-content/uploads/car-icegif-9.gif"
}

// 3. Display 10 student records in table and each row should contain a delete button. if you click on a button to delete a record row should be delete.

function zoomout(e){
    e.src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F191332684146711970%2F&psig=AOvVaw2x1B6qOeJnv9YXqTTJreMp&ust=1722084645626000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLDz7LPfxIcDFQAAAAAdAAAAABAJ "
}

function del(){
    document.querySelector("#row").remove()
}

// 4. display an image in browser change the picture on mouseover and set the first pictuer on mouseout.

// 5.show a counter in browser. Counter should increase on click on increase button and decreasr on click 
// on decrease button and show update counter value in browser.

let num = 0;
document.getElementById("increase").onclick = function (){
    num +=1;
    document.getElementById("counting").innerHTML=num;
}
document.getElementById("decrease").onclick = Function(){
    num +=1;
    document.getElementById("counting").innerHTML=num;
}
document.getElementById("reset").onclick = function(){
    num = 0;
    document.getElementById("counting").innerHTML=num;
}


