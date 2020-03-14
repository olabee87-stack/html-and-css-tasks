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

let menu_btn = document.getElementById("menu-btn");
menu_btn.addEventListener("click", hideMenu);

function hideMenu() {
    alert("close me oo");
    console.log("Eti close mi ni?");
}

// document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.nav-grid').classList.toggle('show'));