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