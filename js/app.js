// Carregar menu
fetch("menu.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("menu").innerHTML = data;
    });

// Carregar footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });