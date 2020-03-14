let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//MENU BUTTON//

let btn = document.querySelector(".menu-btn");
let menu = document.querySelector(".nav-grid");

//EVENT LISTENER //
btn.addEventListener("click", showList);

function showList() {
    menu.classList.toggle("show");
}