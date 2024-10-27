const vehicles = [
    {
        stock: 20998,
        year: 1992,
        model: "F350",
        miles: 280925,
        color: "White",
        price: 11000,
        image: "images/v20998.webp",
    },
    {
        stock: 21776,
        year: 2004,
        model: "Ranger",
        miles: 261739,
        color: "Red",
        price: 15000,
        image: "images/v21776.webp",
    },
    {
        stock: 21855,
        year: 2005,
        model: "S10",
        miles: 190230,
        color: "White",
        price: 15000,
        image: "images/v21855.webp",
    },
    {
        stock: 22616,
        year: 2001,
        model: "F150",
        miles: 220645,
        color: "White",
        price: 12000,
        image: "images/v22616.webp",
    },
    {
        stock: 24178,
        year: 1998,
        model: "Dodge 2500",
        miles: 240063,
        color: "Blue & Silver",
        price: 16000,
        image: "images/v24178.webp",
    },
    {
        stock: 25420,
        year: 2020,
        model: "F150",
        miles: 160796,
        color: "White",
        price: 19000,
        image: "images/v25420.webp",
    },{
        stock: 26119,
        year: 1997,
        model: "Yukon",
        miles: 23951,
        color: "Purple",
        price: 10000,
        image: "images/v26119.webp",
    },{
        stock: 26197,
        year: 2019,
        model: "Ranger",
        miles: 120768,
        color: "Red",
        price: 21000,
        image: "images/v26197.webp",
    },
];

const gallery = document.getElementById("gallery");

function createSection(index) {
    let section = document.createElement("section");
    section.innerHTML = 
    `<h3> ${vehicles[index].color}, ${vehicles[index].year} ${vehicles[index].model}</h3>
    <img src="${vehicles[index].image}" alt="${vehicles[index].year} ${vehicles[index].model}" loading="lazy">
    <p><span>Miles: </span> ${vehicles[index].miles}</p>
    <p><span>Price: </span> $${vehicles[index].price}</p>
    <p><span>Stock: </span> ${vehicles[index].stock}</p>`
    return section;
}

for (index in vehicles) {
    gallery.appendChild(createSection(index));
}