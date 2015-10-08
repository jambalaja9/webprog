function navigate(value) {
    
    switch (value);
        case "login": 
            document.location.pathname = "login";
            break;
        case "home":
            document.location.pathname = "calender";
            break;
        case "calender":
            document.location.pathname = "home";
            break;
        case "picture":
            document.location.pathname = "picture";
        default:
            document.location.pathname = "login";
    