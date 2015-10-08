//var pw = "root";
//var userdatenbank = ["raphael", "patrick", "maike", "maria"];
var userdatenbank = [{name: "raphael", passwort: "pw1"},
                     {name: "patrick", passwort: "pw2"},
                     {name: "maike", passwort: "pw3"},
                     {name: "maria", passwort: "pw4"}];

function getName() {
 var name = document.Login.User.value;
    return name;
}

function getPasswort() {
 var name = document.Login.Passwort.value;
    return passwort;
}

function check(value) {
    if('name' in value == getName()  && 'passwort' in value == getPasswort()){
        return true;
    }
    else
    {
        return false;
    }
}

var filteredUser = userdatenbank.filter(check);


function checkLogin() {
    alert("bla");
    
    if(!filteredUser == "" ) {   
        alert("so true");
        navigate("home");
            }
    else
    {
        alert("Falsche");
    }
}


