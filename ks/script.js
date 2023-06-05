function calculate() {
    var startHour = parseInt(document.getElementById("startHour").value);
    var startMinute = parseInt(document.getElementById("startMinute").value);
    var endHour = parseInt(document.getElementById("endHour").value);
    var endMinute = parseInt(document.getElementById("endMinute").value);

    var totalMinutes = (endHour * 60 + endMinute) + (startHour * 60 + startMinute);
    var resultHour = Math.floor(totalMinutes / 60) % 24; // Bug: não considera o valor máximo de 24 para horas
    var resultMinute = totalMinutes % 60;

    if (resultMinute >= 60) {
        resultMinute -= 60;
        resultHour++;
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Resultado: " + formatTime(resultHour) + ":" + formatTime(resultMinute);
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}
