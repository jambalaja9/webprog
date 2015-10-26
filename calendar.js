/**
* Ist ein Datum gueltig
* @param y: Jahr
* @param m: Monat
* @param d: Tag
* @return true = gueltig, false = ungueltig*/
function isValidDate(y, m, d) {
	//--Gibt Datum des letzten Tag des Monats aus--
	var thisDate = new Date(y, m, 1);
	//einen Tag weiter schalten
	thisDate.setMonth(thisDate.getMonth() + 1);
	//vom ersten Tag des naechsten monats
	//ein Tag abziehen
	thisDate.setTime(thisDate.getTime() - 12 * 3600 * 1000);
	
	if (d > thisDate.getDate()) {return false; } else {return true; }
}
/**
* ermittelt den letzten Tag des aktuellen Monats
* @return: gibt letzten Tag zurueck
*/
function getLastDayOfMonth()
{ var d = getDateFromMemory();
	//einen Tag weiter schalten
	d.setMonth(d.getMonth()+1);
	//den ersten des Monats setzen
	d.setDate(1);
	//vom ersten Tag des naechsten monats
	//ein Tag abziehen
	d.setTime(d.getTime() - 12*3600*1000);
	return d.getDate(); }
/**
* uebernimmt das angeklickte Datum in das Ausgabeelement
* @param n: Kalendertag zum Kombinieren mit Monat und Jahr
*/
function putDate(n)
{
	var d = getDateFromMemory();
	d.setDate(n);
	
	
	var returnValue;
	if (returnModus==0) //Datum zurueckgeben
		{returnValue = d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();}
	else{
		returnValue = getEventtext( d.getFullYear(), d.getMonth(), d.getDate());
		if (!returnValue)
			{returnValue = 'kein Event!';}
	}
	
	document.forms['myform'].elements['datum'].value = returnValue;
    //document.forms['myform'].elements['datum'].value = returnValue.description;
}
/**
* setzt das uebergebene Datum in die Speicherzelle
* @param d: datum zum schreiben in die Speicherzelle
*/
function setDateToMemory(d)
{
	document.all.date_memory.innerHTML = d.getFullYear()+','+(d.getMonth()+1)+','+d.getDate();
}
/**
* Gibt das Datum aus der Speicherzelle zurueck
* @return: datum in Date format
*/
function getDateFromMemory()
{
	var s = document.all.date_memory.innerHTML;
	var z = s.split(',');
	return new Date(z[0],z[1]-1,z[2]);
}
/**
* schaltet einen Monat Weiter
*/
function nextMonth()
{
	var d = getDateFromMemory();
	var m = d.getMonth()+1;
	var y = d.getFullYear();
	//Falls Jahres wechsel
	if ((m+1)>12)
	{
		m = 0;
		y = y + 1;
	}
	d = new Date(y,m,01);
	setDateToMemory(d);
	loadcalendar();
}
/**
* schaltet einen Monat zurueck
*/
function prevMonth()
{
	var d = getDateFromMemory();
	var m = d.getMonth()+1;
	var y = d.getFullYear();
	
	//Falls Jahres1wechsel
	if ((m-1)<1)
	{
		m = 11;
		y = y - 1;
	}
	else
	{
		m = m - 2;
	}
	d = new Date(y,m,01);
	setDateToMemory(d);
	
	loadcalendar();
}
/**
* zum erstmaligen aufrufen des Kalenders
*/
function iniCalendar()
{
	//heutiges Datum setzen
	var d = new Date();
	//aktuelles Datum speichern
	setDateToMemory(d);
	//Calender laden
	loadcalendar();
}
/**
*	Laed die Tabelle mit dem uebergebenen Datum (Monat)
*/
function loadcalendar() 
{
	//aktuelles Datum holen (1. des Monats)
	var d = getDateFromMemory();
	//Monat ermitteln aus this_date (zaehlen beginnt bei 0, daher +1)
	var m = d.getMonth(); 
	//Jahr ermitteln aus this_date (YYYY)
	var y = d.getFullYear();
	//Monat und Jahr eintragen
	document.all.calendar_month.innerHTML = getMonthname(m+1) + ' ' + y;
	//ersten Tag des Monats festlegen
	var firstD = d;
	firstD.setDate(1);
	//Wochentag ermitteln vom 1. des uebergebenen Monats (Wochentag aus firstD)
	var dateDay = firstD.getDay(); //So = 0, Mo = 1 ... Sa = 6
	//Sonntag soll den Wert 7 darstellen -> Mo = 1 ... So = 7
	dateDay = (dateDay == 0) ? 7: dateDay;
	//Speicher fuer aktuelle Zelle
	var entry = '';
	//Speicher fuer aktuellen Tag
	var zahl = '';
	//heutiges Datum ermitteln
	var hD = new Date();
	//ist event 
	//falls event, dann darf der Rahmen
	//nicht vom isHolyday ueberschrieben werden
	var bEvent = false;
	
	//Alle Kalender Spalten durchzaehlen
	for (var i = 1; i <= 42; i++)
	{
		bEvent = false;
		//holen der aktuellen Zelle
		entry = document.getElementById('calendar_entry_'+i);
		//errechnen der Tages Zahl
		zahl = (i+1)-dateDay;
		//datum zusammenschreiben
		var dx = new Date(y,m,zahl);

		//Eintragen der Daten ab ersten Tag im Monat und wenn es ein gueltiges Datum ist
		if (i >= dateDay && isValidDate(y,m,zahl))		
		{
			entry.innerHTML = '<a class = calendar_link href=javascript:putDate('+zahl+')>'+zahl+'</a>';
			entry.hidden = false;
			entry.style.visibility='visible';
			entry.style.border = 'solid 4px';
            //ab hier übernimmt er die funktionen nicht, damit die Farbe angepasst wird. Warum????
			//wenn Event ist
			if (!getEventtext(y,m,zahl))
				{entry.style.color="white";}
			else{
				entry.style.color="green";
				//Eventtext wird als Tooltip angezeigt
				entry.title = getEventtext(y,m,zahl);
				bEvent = true;
			}
			//Wenn Tag ein Feiertag ist
			if (isHoliday(m, zahl))
				{entry.style.backgroundColor="red";}
			else{
				if (!bEvent)
					entry.style.color="white";
			}
						
			//heutiges Datum hervorheben			
			if (hD.getDate() == dx.getDate() && 
				hD.getMonth() == dx.getMonth() && 
				hD.getYear() == dx.getYear())
			{
				entry.style.fontWeight = "bold";
				entry.style.backgroundColor = "yellow";
			}
			
				
		}
		else
		{
			entry.innerHTML = '';
		
			if (i>= dateDay)
			{//Wenn Kalenderende
				//Zelle = hidden
				entry.hidden = true;
				entry.style.border = '0px';
			}
			else
			{//Wenn Kalenderanfang
				//Border-width = 0px
				entry.style.border = '0px';
          
			}
		} 				  				
	}		
}

/**
 * Prueft ob an einem bestimmten Tag ein Event stattfindet
 * und gibt dieses als Text zurueck.
 * @param int y: Jahr
 * @param int m: Monat
 * @param int d: tag
 * @return Veranstaltungstext, 
 * 		wenn keine veranstaltung = false
 */
function getEventtext(y,m,d)
{
	//convertieren in int-Zahlen
	y = parseInt(y);
	m = parseInt(m);
	d = parseInt(d);
	
		//Monate fangen bei 0 an zuzählen
	m++;
	//definieren der Events
	var h = new Array();
	
	//exemplarisch nehme ich eine
	//Liste an Festivals her
    //h.push( { "date" : "22.1.15", description : "flkajsflkjasdfladsjf"} );
	h[h.length] = "22.1.2015|Rap Mayhem Festival, München";
	h[h.length] = "1.2.2015|Spirit Of Goa, Hamburg";
	h[h.length] = "16.2.2015|Emergenza Acoustic Festival, Berlin";
	h[h.length] = "2.3.2015|Skarneval Koblenz, Wehdem";
	h[h.length] = "12.4.2015|Balinger Rockfestival, Dillingen";
	h[h.length] = "5.7.2015|HipHop Open, Stuttgart";
	h[h.length] = "19.7.2015|Feeling Fine Festival, Espelkamp";
	h[h.length] = "26.7.2015|Beach Party, Duisburg";
    h[h.length] = "25.10.2015|Beach Party, Duisburg";
    h[h.length] = "26.10.2015|Beach Party, Duisburg";
    
	//h[0].date
	var dH;
	var eH;
	for ( var i = 0; i < h.length; i++) {
		//Datum eH[0] von Event eH[1] trennen
		eH = h[i].split("|");
        //dH = h[i].date.split(".");
        //eH= h[i];
          
		//Datum trennen > Tag dH[0], Monat dH[1], Jahr dH[2]
		dH = eH[0].split(".");
		
		if (parseInt(dH[0]) == d && parseInt(dH[1]) == m && parseInt(dH[2]) == y) {
			//return eH[1];
            return h[i];
		}
	}
	return false;
}

// evtl noch fehler in der funktion
/*function loeschen() {
 delete h[i];
}

function hinzu() {
    var linie = "I"
    h.push(var d.concat(m,y, linie, entry);
}*/

function  newEvent(y,m,d)
{
	//convertieren in int-Zahlen
	y = parseInt(y);
	m = parseInt(m);
	d = parseInt(d);
    
}

/**
* Ist das Angegebene Datum ein Feiertag?
* @param m : Monat
* @param d : Tag
*/
function isHoliday(m,d)
{	
	//Monate fangen bei 0 an zuzaehlen
	m++;
	//festlegen der Feiertage
	var h = new Array(7);
	h[0] = "1.1";
	h[1] = "6.1";
	h[2] = "1.5";
	h[3] = "3.10";
	h[4] = "1.11";
	h[5] = "25.12";
	h[6] = "26.12";
	h[7] = "31.12";
	var iD;
	//Alle Daten Testen
	for ( var i = 0; i < h.length; i++) {
		iH = h[i].split(".");
				
		if (iH[0] == d && iH[1] == m) {
			return true;
		}
	}
	//Wenn kein Feiertag gefunden
	return false;
	
}

/**
 * regelt welche Rueckgabe erfolgt.
 * 0 = geklicktes Datum wird zurueckgegeben.
 * 1 = Veranstaltungstext aus getEventtext() 
 * 		wird zurueckgegeben.
 */
var returnModus = 0;

/**
 * Setzt die Art der Rueckgabe bei, Datums-klick
 * @param returnIndex:
 * 		0 = geklicktes Datum zurueckgeben
 * 		1 = event aus getEventtext()
 */
function setReturnModus(returnIndex)
	{returnModus = returnIndex;}

/**
* Gibt den Monatsnamen anhand der Monatsnummer zurueck
*@param monthnumber: Monatsnummer (1-12)
*/
function getMonthname(monthnumber)
{
	switch(monthnumber)
	{
		case 1:
		  return 'Januar';
		  break;
		case 2:
		  return 'Februar';
		  break;
		case 3:
		  return 'Maerz';
		  break;
		case 4:
		  return 'April';
		  break;
		case 5:
		  return 'Mai';
		  break;
		case 6:
		  return 'Juni';
		  break;
		case 7:
		  return 'Juli';
		  break;
		case 8:
		  return 'August';
		  break;
		case 9:
		  return 'September';
		  break;
		case 10:
		  return 'Oktober';
		  break;
		case 11:
		  return 'November';
		  break;
		case 12:
		  return 'Dezember';
		  break;
		default:
		  return '---';
	}
}