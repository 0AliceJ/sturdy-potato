function takeBreak(){
    var timeInterval = document.getElementById("break-interval").value;
    setTimeout(function(){
        breakTime()}, timeInterval*60000);
    
}

function breakTime(){
    var modal = document.getElementById("break-modal");
    modal.style.display = "block";
}

function closeModal(){
    let modal = document.getElementById("break-modal");
    modal.style.display = "none";
    var timeInterval = document.getElementById("break-interval").value;
    setTimeout(function(){
        breakTime()}, timeInterval*60000);
}