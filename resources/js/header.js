let searchContainerElement = document.getElementById("search-container");
let searchElement = document.getElementById("search");
let searchImgElement = document.getElementById("search-img");
let searchButton = document.querySelector("button");
let searchText = document.getElementById("search-text");

var smallWindow = window.matchMedia("(max-width: 630px");

let ind_num = 0;

function search_click() {
    //ind_num = (ind_num+1)%2;
    ind_num = 1;
}
function change_cursor() {
    searchElement.style.cursor = "text";
    searchImgElement.style.cursor = "pointer";
}
function search_mouseover() {
    if (smallWindow.matches) {
        searchElement.style.width = "200px";
    }
    else {
        searchElement.style.width = "300px";
    }
    searchElement.style.backgroundColor = "white";
    searchButton.style.backgroundColor = "white";
    searchImgElement.src = "./resources/imgs/header/search-icon.png";
    searchText.style.display = "block";
    searchText.style.opacity = 1;
    change_cursor();
}
function search_mouseout() {
    if (ind_num===0) {
        searchElement.style.width = "50px";
        searchElement.style.backgroundColor = "black";
        searchButton.style.backgroundColor = "black";
        searchImgElement.src = "./resources/imgs/header/search-icon-white.png";
        searchText.style.display = "none";
        searchText.style.opacity = 0;
    }
}



searchText.addEventListener('click', search_click);
searchElement.addEventListener('mouseover', search_mouseover);
searchElement.addEventListener('mouseout', search_mouseout);


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
let menu_button = document.getElementById("menu-icon");
menu_button.addEventListener("click", openNav);