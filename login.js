var userdatenbank = [{name: "raphael", passwort: "pw1"},
                     {name: "patrick", passwort: "pw2"},
                     {name: "maike", passwort: "pw3"},
                     {name: "maria", passwort: "pw4"}];


function getName() {
 var name = document.getElementById("user").value;
    return name;
}

function getPasswort() {
 var pw = document.getElementById("passwort").value;
    return pw;
}

function check(value) {
    return value.name === getName()  && value.passwort === getPasswort() ;
}

function checkLogin(e) {

var filteredUser = userdatenbank.filter(check); 

    if(filteredUser.length > 0) {   
        alert("so true");
       
     //document.location = "kalender.html"

     history.pushState(null,"" ,"calender.html");
     
        if(window.location.href.indexOf("calender") > -1) {
            document.getElementById("login").style.display = "none";
            document.getElementById("calender").style.display = "block";
            document.getElementById("home").style.display = "none";
            document.getElementById("picture").style.display = "none";
        }
        
        return false;
            }
    else
    {
        alert("Falsche ");
        return false;
    }
}


