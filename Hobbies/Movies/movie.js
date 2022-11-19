import {movieData} from "./data/movieData.js";

var movie = localStorage.getItem("movie");

function getBackgroundImage() {
    var imgCode = movieData[movie]["img-code"];
    return 'url("./imgs/movies/' + imgCode + '0.jpeg")'
}
function getCountryYear() {
    var result = "";
    movieData[movie]["country"].forEach((ctr) => {
        result += ctr + ", "
    })
    result += movieData[movie]["year"];
    return result;
}

function updateBasicHTML() {
    document.querySelector("header").style.backgroundImage = getBackgroundImage();
    document.querySelector("header").style.backgroundPosition = movieData[movie]["background-position"];
    document.getElementById("movie-title").innerHTML = movieData[movie]["name"];
    document.getElementById("grade-number").innerHTML = movieData[movie]["grade"] + '<span id="out-of">/10</span>';
    document.getElementById("director-name").innerHTML = movieData[movie]["director"];
    document.getElementById("country-year").innerHTML = getCountryYear();
    document.getElementById("comments").querySelector("p").innerHTML = movieData[movie]["my-comments"];
}

function updateShowAll() {
    var showAllData = ["See In Detail",
                       "Show all(" + movieData[movie]["poster-number"] + ")",
                       "Show all(" + movieData[movie]["photo-number"] + ")"];
    var showAlls = document.getElementsByClassName("show-all");
    for (let i = 0; i < showAllData.length; i++) {
        showAlls[i].innerHTML = showAllData[i];
    }
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    var overlayContent = myNav.getElementsByClassName("overlay-content")[0];
    overlayContent.removeChild(overlayContent.lastChild);
}
document.getElementsByClassName("closebtn")[0].addEventListener("click", closeNav);

function updateOverlay(boxType, boxSrc) {
    var myNav = document.getElementById("myNav");
    myNav.querySelector("h1").innerHTML = "P" + boxType.slice(1) + "s";
    var newContent = document.createElement("img");
    if (boxType==="poster") {
        newContent.style.height = "800px";
        newContent.style.marginTop = "15px";
    }
    else if (boxType==="photo") {
        newContent.style.maxWidth = "80%";
        newContent.style.maxHeight = window.innerHeight;
        newContent.style.marginTop = "15px";
    }
    newContent.classList.add("overlay-content-img");
    newContent.src = boxSrc;
    myNav.getElementsByClassName("overlay-content")[0].appendChild(newContent);
}
function handleOverlayClick(evt) {
    updateOverlay(evt.target.classList[0], evt.target.src);
    document.getElementById("myNav").style.width = "100%";
}


function createNewPosPhoBox(boxClass, code, ind) {
    var newBox = document.createElement("img");
    newBox.classList.add(boxClass);
    var newBoxSrc = "./imgs/movies/" + code;
    if (boxClass==="poster") {
        newBoxSrc += "_main";
        if (ind!==1) {
            newBoxSrc += ind.toString();
        }
    } else if (boxClass==="photo") {
        newBoxSrc += (ind-1).toString();
    }
    newBoxSrc += ".jpeg";
    newBox.src = newBoxSrc;
    newBox.addEventListener("click", handleOverlayClick);
    return newBox;
}
function addPostersPhotos() {
    var posters = document.getElementsByClassName("posters")[0];
    var photos = document.getElementsByClassName("photos")[0];
    for (let i = 1; i <= movieData[movie]["poster-number"]; i++) {
        posters.appendChild(createNewPosPhoBox("poster", movieData[movie]["img-code"], i));
    }
    for (let i = 1; i <= movieData[movie]["photo-number"]; i++) {
        photos.appendChild(createNewPosPhoBox("photo", movieData[movie]["img-code"], i));
    }
}

updateBasicHTML();
updateShowAll();
addPostersPhotos();


