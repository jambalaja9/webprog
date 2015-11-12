//Erlaubte Nutzer für den Login
var userdatenbank = [{name: "Raphael", passwort: "pw1"},
                     {name: "Patrick", passwort: "pw2"},
                     {name: "Maike", passwort: "pw3"},
                     {name: "Maria", passwort: "pw4"}];

//Variable, die den aktuellen Nutzer übergeben bekommt.
var user ;

// Getter-Funktionen für die Login-Daten.
function getName() {
 var name = document.getElementById("user").value;
    return name;
}

function getPasswort() {
 var pw = document.getElementById("passwort").value;
    return pw;
}

//Funktion, die den ersten Buchstaben beim Login groß schreibt
function ucFirst() { 
    var username = getName();
    username = username.substring(0, 1).toUpperCase() + username.substring(1).toLowerCase();
    document.getElementById("user").value = username;
    return username;
}

//User und Passwort Überprüfung mit jedem User aus der "Datenbank".
function check(value) {
    return value.name === getName()  && value.passwort === getPasswort() ;
}


//Login Funktion, die die Überprüfung startet, den Willkommenstext mit aktuellen User erstellt, die URL auf die "Home"-Seite ändert. Fals der Login falsch ist und filteredUser leer ist wird eine Fehlermeldung ausgegeben und man bleibt auf der "Login"-Seite.
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


//Die Funktion wird aufgerufen, wenn ein Kommentar eingegeben wird. Hierbei wird die Custom-Component, die die Kommentare und den Namen des Nutzers enthält, erstellt und unten in das div eingefügt.
function comment(e){
    

    var xc = document.createElement("x-comment");

    document.getElementById("commentlistp").appendChild(xc);
    document.getElementById("commentcontent").value = "";
    
    return false;
}

/////Custom compononent für die Kommentare////////////////////////////////////////////////////////////////////////////////////////////

//Prototyp für die Custom-Component wird erstellt
var XCommentProto = Object.create(HTMLElement.prototype);

//Funktionen werden dem Prototypen hinzugefügt, die für die Attribute benötigt werden
XCommentProto.getContent = function (){
    return document.getElementById("commentcontent").value;
};

//CreateCallback Funktion, die aufgerufen wird, wenn das Objekt erstelt wird. Sie wird genutzt um Eigenschaften der Custom-Component festzulegen.
//Dazu wird ein ShadowRoot erstellt, der anschließend die erstellte Komponente hinzugefügt wird.
XCommentProto.createdCallback = function (){
    
    var shadow = this.createShadowRoot();
    
    var tdname = document.createElement("td");
    tdname.className = "xcomment-tdname";
    tdname.innerText = user;
    
    var tdcontent = document.createElement("td");
    tdcontent.className = "xcomment-tdcontent";
    tdcontent.innerText = this.getContent();
    tdcontent.style = "text-align: left";
    
    var trname = document.createElement("tr");
    
    
    var trcontent = document.createElement("tr");
    
    
    var table = document.createElement("table");
    table.className = "xcomment-table";
    table.align = "center";
    
    
    
    
    trname.appendChild(tdname);
    trcontent.appendChild(tdcontent)
    
    table.appendChild(trname);
    table.appendChild(trcontent);
    

    shadow.appendChild(table);
};
//Zum Schluss muss sie Custom-Component noch registriert werden, damit der Browser sie erkennt und richtig darstellt.
    var xcomment = document.registerElement("x-comment",{
        prototype: XCommentProto
    });
