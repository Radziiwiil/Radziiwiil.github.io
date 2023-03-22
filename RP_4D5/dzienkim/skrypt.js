function mal() {
    document.getElementById("panel").style.backgroundColor = "#5D726D";
    document.getElementById("tekst1").innerHTML = "Dzień Mężczyzn";
    document.getElementById("tekst2").innerHTML = "10 marzec";
    document.getElementById("tresc").innerHTML = "Dzień Mężczyzny i Dzień Chłopaka to dwa różne święta – Dzień Chłopaka obchodzimy 30 września, a Dzień Mężczyzny 10 marca (dwa dni po dniu kobiet!). Co ciekawe, inna proponowana data Dnia Mężczyzn to 4 kwietnia. Tego dnia w niektórych szkołach w okresie PRL urządzano obchody podobne do świętowania dnia kobiet (goździki, rajstopy, te sprawy :-)).";
    document.getElementById("foto").src = "minionm.png";
}


function fem() {
    document.getElementById("panel").style.backgroundColor = "#903441";
    document.getElementById("tekst1").innerHTML = "Dzień Kobiet";
    document.getElementById("tekst2").innerHTML = "8 marca";
    document.getElementById("tresc").innerHTML = "Dzień Kobiet jest obchodzony w wielu państwach całego świata. Tego dnia uznawane są zasługi wszystkich kobiet bez względu na podziały narodowościowe, etniczne, językowe, kulturowe, gospodarcze czy polityczne.";
    document.getElementById("foto").src = "minionf.png";
}

function reset() {
    document.getElementById("panel").style.backgroundColor = "#D7B877";
    document.getElementById("tekst1").innerHTML = "";
    document.getElementById("tekst2").innerHTML = "";
    document.getElementById("tresc").innerHTML = "W marcu świetujemy zarówno dzień mężczyzn i kobiet. Z okazji tych dni życzę wam wszystkiego najlepszego!";
    document.getElementById("foto").src = "minion.jfif";

}