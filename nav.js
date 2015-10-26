window.addEventListener("popstate",navigate);



function navigate() {
          
    alert("back");
    if(window.location.href.indexOf("home") > -1) {
    
        document.getElementById("login").style.display = "none";
        document.getElementById("calendar").style.display = "none";
        document.getElementById("home").style.display = "block";
        document.getElementById("file").style.display = "none";
    }
    else if(window.location.href.indexOf("index") > -1) {
        
        document.getElementById("login").style.display = "block";
        document.getElementById("calendar").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("file").style.display = "none";
    }
    else if(window.location.href.indexOf("file") > -1) {
        
        document.getElementById("login").style.display = "none";
        document.getElementById("calendar").style.display = "none";
        document.getElementById("home").style.display = "block";
        document.getElementById("file").style.display = "none";
    }
    else if(window.location.href.indexOf("calendar") > -1) {
        
        document.getElementById("login").style.display = "none";
        document.getElementById("calendar").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("file").style.display = "none";
    }
}


        

            
            
        
            