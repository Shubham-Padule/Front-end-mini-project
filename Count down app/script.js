var countdownDate = new Date("9/24/2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes; // Corrected from Minutes to minutes
    document.getElementById("Seconds").innerHTML = seconds; // Use "Seconds" with a capital "S"


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Days").innerHTML = "00";
        document.getElementById("Hours").innerHTML = "00";
        document.getElementById("Minutes").innerHTML = "00";
        document.getElementById("Seconds").innerHTML = "00";
    }
}, 1000);
