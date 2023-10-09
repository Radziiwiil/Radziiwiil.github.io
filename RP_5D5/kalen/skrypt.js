window.onload = function() {
    pierwsza();
    druga();
}


function dni (mies, rok){
    return new Date(rok, mies, 0).getDate();
}


function pierwsza() {
    var data2 = new Date;
    
    for(let y=-1; y < 2; y++) {
        op=0;
        i=1;
        a = y+2
        var liczbad = dni(data2.getMonth()+1+y,data2.getFullYear());
        var liczbadpop = dni(data2.getMonth()+y,data2.getFullYear());
        var data3 = new Date(data2.getFullYear(),data2.getMonth()+y,1);
        var pier = data3.getDay();
        var dzien = data2.getDate();
        pier = pier != 0 ? pier : 7;
        z=-1*((liczbadpop-pier)+2);

        while(z != liczbad) {
            var tab = document.getElementById("tab"+ a);
            var wiersz = tab.insertRow();

            for (let x=0; x < 7; x++) {
                z= Math.abs(z);
                var rekord = wiersz.insertCell();
                rekord.innerHTML = z;
                z++;
                i++;

                if (op != 2 || (z < 7 && op == 1)) {
                    rekord.style.backgroundColor = "rgb(158, 76, 0)";
                }

                if (op == 2 && y == 0 && z == dzien+1) {
                    rekord.style.backgroundColor = "rgb(247, 202, 0)";
                }

                if (i == pier && op != 2) {
                    z=1;
                    op=2;
                }

                if (z == liczbad+1 && op == 2) {
                    z=1; 
                    op=1;         
                }
            }

            if (op == 1) {
                z = liczbad;                
            }
        }
    }
}



function druga() {
    var data = new Date;
    var rok = data.getFullYear();
    var m1 = data.getMonth() - 1;
    var m2 = data.getMonth();
    var m3 = data.getMonth() + 1;
    var dzien = data.getDay();
    var lista = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień","Wrzesień", "Październik", "Listopad", "Grudnień"];

        document.getElementById("nag").innerHTML = "Kalnedarz na rok " + rok; 
        document.getElementById("m1").innerHTML = lista[m1];
        document.getElementById("m2").innerHTML = lista[m2];
        document.getElementById("m3").innerHTML = lista[m3];
        document.getElementById("zdj1").src = "zdj/"+lista[m1].substr(0,3)+".png";
        document.getElementById("zdj2").src = "zdj/"+lista[m2].substr(0,3)+".png";
        document.getElementById("zdj3").src = "zdj/"+lista[m3].substr(0,3)+".png";
}