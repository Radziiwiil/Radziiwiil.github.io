function mal() {
    document.getElementById("panel").style.backgroundColor = "#5D726D";
    document.getElementById("tekst1").innerHTML = "Dzień Mężczyzn";
    document.getElementById("tekst2").innerHTML = "19 Listopada";
    document.getElementById("foto").src = "minionm.png";
}


function fem() {
    document.getElementById("panel").style.backgroundColor = "#903441";
    document.getElementById("tekst1").innerHTML = "Dzień Kobiet";
    document.getElementById("tekst2").innerHTML = "8 marca";
    document.getElementById("foto").src = "minionf.png";
}

function reset() {
    document.getElementById("panel").style.backgroundColor = "#D7B877";
    document.getElementById("tekst1").innerHTML = "";
    document.getElementById("tekst2").innerHTML = "";
    document.getElementById("foto").src = "minion.jfif";

}