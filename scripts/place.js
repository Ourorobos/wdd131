let t = -66;
let s = 128;

function calculateWindChill(temp, speed) {
    return parseInt(35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16));
}

function getWindChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        return calculateWindChill(temp, speed);
    }
    else {
        return "N/A"
    }
}

console.log(getWindChill(t,s));

document.getElementById("windChill").innerHTML = `<span>Feels Like: </span> ${getWindChill(t,s)} &#8457`