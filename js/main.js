const ativa = document.getElementById("btn-ativa");
const containermenu = document.getElementById("mobile-container");
const menudesktop = document.getElementById("menu-desktop");

ativa.addEventListener('click', (e) => {
    animemenu.classList.toggle("_activemenu");
    containermenu.classList.toggle("_activemenu");
    menudesktop.classList.toggle("color-mobile");
});

