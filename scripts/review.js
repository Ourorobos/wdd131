let count = localStorage.getItem("count");
count++;
localStorage.setItem("count",`${count}`)
document.querySelector("span").textContent=count;

function empty() {
    localStorage.removeItem("count");
    console.log("empty");
}