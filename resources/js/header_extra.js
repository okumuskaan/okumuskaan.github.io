let headerButton = document.getElementById("header-openclose-button");
let headerArrow = document.getElementById("header-arrow");

let mainElement = document.querySelector("main");
let navElement = document.querySelector("header nav");
let header = document.querySelector("header");

let headerLeft = document.getElementById("header-left");
let menuIconContainer = document.getElementById("menu-icon-container");
let menuIcon = document.getElementById("menu-icon");

let searchContainer  = document.getElementById("search-container");
let search  = document.getElementById("search");
let searchImg  = document.getElementById("search-img");
let searchBut = header.querySelector("button");

let headerRight = document.getElementById("header-right");
let githubBox = headerRight.getElementsByClassName("github-box")[0];
let githubLogo = githubBox.getElementsByClassName("github-logo")[0];

navNames = ["nav-menu", "nav-projects", "nav-about_me", "nav-activities"];
navData = {};
navNames.forEach((name) => {
    let element = document.getElementById(name);
    console.log(element);
    navData[name] = {
        "element": element,
        "innerHTML": element.querySelector("h4").innerHTML,
        "link": element.getElementsByClassName("nav-link")[0],
        "border": element.style.border
    }
})
names = ["full-name", "first-name", "logo-name"];
nameData = {};
names.forEach((name) => {
    let element = document.getElementById(name);
    nameData[name] = {
        "element": element,
        "innerHTML": element.innerHTML
    };
});


let ind_headerButton = 0;

function updateNavs() {
    navNames.forEach((name) => {

        if (ind_headerButton===0) {
            //nav.style.height = "0%";
            navData[name]["link"].style.height = "0%";
            //navData[name]["element"].style.height = "0%";
            navData[name]["element"].style.border = "none";
            navData[name]["element"].querySelector("h4").innerHTML = "";
            //navElement.style.height = "0%";

        } else {
            //nav.style.height = "98px";
            navData[name]["link"].style.height = "98px";
            navData[name]["element"].style.border = navData[name]["border"];
            console.log("ELEMENT!!!!:", navData[name]["element"])
            console.log("INNERHTML!!:", navData[name]["innerHTML"])
            navData[name]["element"].querySelector("h4").innerHTML =
            navData[name]["innerHTML"];

            //navElement.style.height = "100px";
        }
    });
}

function updateShownName() {

    names.forEach((name) => {
        if (ind_headerButton===0) {
            nameData[name]["element"].style.height = "0%";
            nameData[name]["element"].innerHTML = "";
        } else {
            nameData[name]["element"].style.height = "39px";
            nameData[name]["element"].innerHTML = nameData[name]["innerHTML"];
        }
    });
}


let search_display = "none";
function on_click_headerButton() {
    if (ind_headerButton===0) {
        search_display = search.style.display;
        header.style.height = "25px";
        mainElement.style.top = "25px";
        headerLeft.style.height = "0%";
        menuIconContainer.style.height = "0%";
        menuIcon.style.height = "0%";
        headerButton.style.top = "1px";
        headerArrow.style.transform = "rotate(90deg)";
        updateShownName();
        updateNavs();
        searchContainer.style.height = "0%";
        search.style.height = "0%";
        search.style.display = "none";
        searchImg.style.height = "0%";
        searchBut.style.display = "none";
        githubBox.style.height = "0%";
        githubLogo.style.display = "none";

    } else {
        header.style.height = "100px";
        mainElement.style.top = "100px";
        headerLeft.style.height = "100px";
        menuIconContainer.style.height = "100px";
        menuIcon.style.height = "25px";
        headerButton.style.top = "74px";
        headerArrow.style.transform = "rotate(-90deg)";
        updateShownName();
        updateNavs();
        searchContainer.style.height = "70px";
        search.style.height = "44px";
        search.style.display = search_display;
        searchImg.style.height = "20px";
        searchBut.style.display = "block";

        githubBox.style.height = "33px";
        githubLogo.style.display = "block";
    }
    ind_headerButton = (ind_headerButton+1)%2
}

headerButton.addEventListener("click", on_click_headerButton);

//on_click_headerButton();
