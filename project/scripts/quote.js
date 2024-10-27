const damage = document.querySelector("section");

function addDamageQuery() {
    damage.innerHTML = `
    <label> Please Discribe The Damage: <textarea row="10" cols="36" required></textarea></label>
    `;
}

function removeDamageQuery() {
    damage.innerHTML = "";
}

function save() {
    localStorage.setItem("email", `${document.getElementById("email").value}`);
}

function load() {
    document.getElementById("email").innerHTML = `${localStorage.getItem("email")}`;
}

function clear() {
    localStorage.removeItem("email");
}