var e = document.getElementById("calendarcanvas");
var canv = e.getContext("2d");
                            
                            canv.strokeStyle = "black";
                            canv.lineWidth = 10;
                            canv.fillStyle = "blue";
                            canv.moveTo(0,0);
                            canv.lineTo(300,0);
                            canv.lineTo(300,300);
                            canv.lineTo(0,300);
                            canv.lineTo(0,0);
                            canv.stroke();


var e = document.getElementById("picturecanvas");
var canv = e.getContext("2d");
                            
                            canv.strokeStyle = "black";
                            canv.lineWidth = 10;
                            canv.fillStyle = "blue";
                            canv.moveTo(300,0);
                            canv.lineTo(600,0);
                            canv.lineTo(600,300);
                            canv.lineTo(300,300);
                            canv.lineTo(300,0);
                            canv.stroke();