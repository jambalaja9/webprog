var userdatenbank = [{name: "Raphael", passwort: "pw1"},
                     {name: "Patrick", passwort: "pw2"},
                     {name: "Maike", passwort: "pw3"},
                     {name: "Maria", passwort: "pw4"}];

var user ;

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
       
     var welcome = "Herzlich Willkommen ";
        user=document.getElementById("user").value;
        welcome += user;

     history.pushState(null,"" ,"home.html");
     
      navigate();
        
        document.getElementById("welcome").innerHTML= welcome;
        
        return false;
            }
    else
    {
        document.getElementById("errorlogin").innerHTML = "Falsche Benutzer-Passwort Kombination!";
        return false;
    }
}


function comment(e){
    
    var tbl = document.createElement("table");
    tbl.setAttribute("style","border: 1px solid;")

    tbl.innerHTML = "<tr><td>"+user + "[" + Date() + "]:"+"</td></tr><tr><td>"+document.getElementById("commentcontent").value+"</td></tr>";
    
document.getElementById("commentlist").appendChild(tbl);

    
    
    return false;
}


