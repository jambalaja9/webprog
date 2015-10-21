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

     history.pushState(null,"" ,"home.html");
     
        if(window.location.href.indexOf("home") > -1) {
            document.getElementById("login").style.display = "none";
            document.getElementById("calendar").style.display = "none";
            document.getElementById("home").style.display = "block";
            document.getElementById("file").style.display = "none";
        }
        
        return false;
            }
    else
    {
        alert("Falsche ");
        return false;
    }
}
