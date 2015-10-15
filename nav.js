function nav(){
                   
    if(window.location.href.indexOf("index") > -1) {
        document.getElementById("login").style.display = "block";
        document.getElementById("calender").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("picture").style.display = "none";
    }
    else if(window.location.href.indexOf("calender") > -1) {
        document.getElementById("login").style.display = "none";
        document.getElementById("calender").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("picture").style.display = "none";
    }
    else if(window.location.href.indexOf("home") > -1) {
        document.getElementById("login").style.display = "none";
        document.getElementById("calender").style.display = "none";
        document.getElementById("home").style.display = "block";
        document.getElementById("picture").style.display = "none";
    }
    else if(window.location.href.indexOf("picture") > -1) {
        document.getElementById("login").style.display = "none";
        document.getElementById("calender").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("picture").style.display = "block";
    }
        
        
        
        
        
        
        
            document.getElementById("kalender").visibility =  document.location.endsWith("kalender.html");
            
            
        
            