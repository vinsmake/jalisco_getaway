//is it running?
console.log("JavaScript Hamburguer is running.");
const hamburguer = document.querySelector("#hamburguer"); //to select the hamburguer div with button
console.log(hamburguer);

const nav = document.querySelector("#header__nav"); //to select the navegation with links
console.log(nav);

hamburguer.onclick = () => { //arrow function: When click, excecute
    console.log("toggled");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
};



/*     nav.classList.toggle("active"); */


window.onscroll = () => { //when scroll, do:
    nav.style.display = "none";
};