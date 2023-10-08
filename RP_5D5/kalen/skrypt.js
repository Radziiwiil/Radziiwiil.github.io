window.onload = function() {
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