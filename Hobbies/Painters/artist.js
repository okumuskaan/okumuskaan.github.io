import {painterData, paintingData} from "./data/paintersData.js"

var theArtist = localStorage.getItem("artist");
var title = document.querySelector("title");
title.innerHTML = theArtist;

console.log(theArtist);

var painterTitle = document.getElementById("artist-title");
painterTitle.innerHTML = theArtist;
painterTitle.parentNode.style.backgroundImage = "url(./imgs/painters/" + painterData[theArtist]["artist-img"] + ".jpeg)";

var paintingContainer = document.getElementById("painting-container");
var paintingContainerCols = document.getElementsByClassName
("painting-container-column");

function createNewAlbumBox(theArtwork) {
    var newWorkBox = document.createElement("a");
    newWorkBox.classList.add("painting-box");
    newWorkBox.href = "./artwork.html";
    var newWorkCover = document.createElement("img");
    newWorkCover.classList.add("painting-cover");
    newWorkCover.src = "./imgs/paintings/" + paintingData[theArtwork]["img-name"];
    var newWorkTitle = document.createElement("h3");
    newWorkTitle.classList.add("painting-title");
    newWorkTitle.innerHTML = paintingData[theArtwork]["name"];
    newWorkBox.appendChild(newWorkCover);
    newWorkBox.appendChild(newWorkTitle);
    return newWorkBox;
}

function handleClick(evt) {
    var target = evt.target;
    var targetH3 = target.querySelector("h3");
    if (targetH3) {
        var thePaintingName = targetH3.innerHTML;
    }
    else {
        var thePaintingName = target.parentNode.querySelector("h3").innerHTML;
    }
    Object.keys(paintingData).forEach(work => {
        if (albumData[work]["name"] === thePaintingName) {
            localStorage.setItem("artwork", work);
        }
    })
}

let ind=0;
painterData[theArtist]["works"].forEach(work => {
    var newWorkBox = createNewAlbumBox(work);
    paintingContainerCols[ind].appendChild(newWorkBox);
    newWorkBox.addEventListener("mousedown", handleClick);
    ind = (ind+1)%3;
});

