const select = document.getElementById("select");
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equlizer",
        averagerating: 5.0
    },
];

for (item in products) {
    let child = document.createElement("option");
    child.value = products[item].id;
    child.textContent = `${products[item].name}`;
    select.appendChild(child);
}