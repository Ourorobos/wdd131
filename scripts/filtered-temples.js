const holder = document.getElementById("images");

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Billings Montana",
        location: "Billings, Montana, United States",
        dedicated: "1999, November, 20",
        area: 33800,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x225/07-Billings-Montana-Temple-2220507.jpg"
    },
    {
        templeName: "Cedar City",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
    },
    {
        templeName: "Draper Utah",
        location: "Draper, Utah, United States",
        dedicated: "2009, March, 21",
        area: 58300,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/400x250/draper-temple-lds-931732-wallpaper.jpg"
    },
  ];

function createSection(index) {
    let section = document.createElement("section");
    section.innerHTML = 
        `<h3>${temples[index].templeName}</h3>
        <p><span>Location:</span> ${temples[index].location}</p>
        <p><span>Dedicated:</span> ${temples[index].dedicated}</p>
        <p><span>Size:</span> ${temples[index].area}</p>
        <img src="${temples[index].imageUrl}" alt="${temples[index].templeName}" loading="lazy">`;
        holder.appendChild(section);
}

function main() {
    holder.innerHTML = "";
    for (index in temples) {
        createSection(index);
    }
}

function older() {
    holder.innerHTML = "";
    for (index in temples) {
        if (temples[index].dedicated.split(",")[0] < 1900) {
            createSection(index);
        }
    }
}

function newer() {
    holder.innerHTML = "";
    for (index in temples) {
        if (temples[index].dedicated.split(",")[0] > 2000) {
            createSection(index);
        }
    }
}

function large() {
    holder.innerHTML = "";
    for (index in temples) {
        if (temples[index].area > 90000) {
            createSection(index);
        }
    }
}

function small() {
    holder.innerHTML = "";
    for (index in temples) {
        if (temples[index].area < 10000) {
            createSection(index);
        }
    }
}

function toggleMenu() {
    var nav = document.querySelector('nav');
    var icon = document.getElementById('icon');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block"
    }
}

main();