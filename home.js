function navcalendar(){
    
    history.pushState(null,"" ,"calendar.html");
    
    if(window.location.href.indexOf("calendar") > -1) {
        document.getElementById("login").style.display = "none";
        document.getElementById("calendar").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("file").style.display = "none";
    }
}

function navfile(){
    
    history.pushState(null,"" ,"file.html"); 
    
    if(window.location.href.indexOf("file") > -1) {
        document.getElementById("login").style.display = "none";
        document.getElementById("calendar").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("file").style.display = "block";
    }
}
