// menu.html
fetch("menu.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("menu").innerHTML = data;
        setActiveMenu();
    });

// footer.html
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });