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

function ucFirst() { 
    var username = getName();
    username = username.substring(0, 1).toUpperCase() + username.substring(1).toLowerCase();
    document.getElementById("user").value = username;
    return username;
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
    

    var xc = document.createElement("x-comment");

    document.getElementById("commentlistp").appendChild(xc);
    document.getElementById("commentcontent").value = "";
    
    return false;
}

/////Custom compononent für die Kommentare////
var date = new Date();
var aktDate = date.toUTCString(); //optional, da nur GMT und nicht MEZ angezeigt wir(1h unsterschied)


var XCommentProto = Object.create(HTMLElement.prototype);

XCommentProto.getContent = function (){
    return document.getElementById("commentcontent").value;
};

XCommentProto.createdCallback = function (){
    
    var shadow = this.createShadowRoot();
    
    var tdname = document.createElement("td");
    tdname.className = "xcomment-tdname";
    tdname.innerText = user;
    
    var tdcontent = document.createElement("td");
    tdcontent.className = "xcomment-tdcontent";
    tdcontent.innerText = this.getContent();
    tdcontent.style = "text-align: left";
    //tdcontent.innerText = this.getAttribute("data-content");
    
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
    var xcomment = document.registerElement("x-comment",{
        prototype: XCommentProto
    });
