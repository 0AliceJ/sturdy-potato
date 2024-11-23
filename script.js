function takeBreak(){
    var timeInterval = document.getElementById("break-interval").value;
    setTimeout(function(){
        breakTime()}, timeInterval*60000);
    
}

function breakTime(){
    var modal = document.getElementById("break-modal");
    modal.style.display = "block";
    document.getElementById("website").style.pointerEvents = "none";
    setTimeout(function(){
        document.getElementById("website").style.pointerEvents ="auto"
        document.getElementById("closeBtn").style.visibility = "visible";

    }, document.getElementById("break-duration").value*60000);
}

function closeModal(){
    let modal = document.getElementById("break-modal");
    modal.style.display = "none";
    document.getElementById("closeBtn").style.visibility = "hidden";
    var timeInterval = document.getElementById("break-interval").value;
    setTimeout(function(){
        breakTime()}, timeInterval*60000);
}

function checkGame(){
    if ((window.location.pathname.includes("Game")||window.location.pathname.includes("game"))&& !document.hidden){
        document.getElementById("motivate-modal").style.display = "block";
        document.getElementById("game").style.pointerEvents = "none";
    }
}
function proceed(){
    document.getElementById("game").style.pointerEvents = "auto";
    document.getElementById("motivate-modal").style.display = "none";
}
try {
    takeBreak();
  }
  catch(err) {
  }
setTimeout(function(){checkGame()}, 3000);