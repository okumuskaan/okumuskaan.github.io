import {artistData, albumData} from "./data/musicData.js"

var theArtist = localStorage.getItem("artist");
var title = document.querySelector("title");
title.innerHTML = theArtist;

var artistTitle = document.getElementById("artist-title");
artistTitle.innerHTML = theArtist;
artistTitle.parentNode.style.backgroundImage = "url(./imgs/artists/" + artistData[theArtist]["artist-img"] + ".jpeg)";

var albumContainer = document.getElementById("album-container");

function createNewAlbumBox(theAlbum) {
    var newAlbumBox = document.createElement("a");
    newAlbumBox.classList.add("album-box");
    newAlbumBox.href = "./album.html";
    var newAlbumCover = document.createElement("img");
    newAlbumCover.classList.add("album-cover");
    newAlbumCover.src = "./imgs/albums/" + albumData[theAlbum]["img-name"];
    var newAlbumTitle = document.createElement("h3");
    newAlbumTitle.classList.add("album-title");
    newAlbumTitle.innerHTML = albumData[theAlbum]["name"];
    newAlbumBox.appendChild(newAlbumCover);
    newAlbumBox.appendChild(newAlbumTitle);
    return newAlbumBox;
}

function handleClick(evt) {
    var target = evt.target;
    var targetH3 = target.querySelector("h3");
    if (targetH3) {
        var theAlbumName = targetH3.innerHTML;
    }
    else {
        var theAlbumName = target.parentNode.querySelector("h3").innerHTML;
    }
    Object.keys(albumData).forEach(album => {
        if (albumData[album]["name"] === theAlbumName) {
            localStorage.setItem("album", album);
        }
    })
}

artistData[theArtist]["albums"].forEach(album => {
    var newAlbumBox = createNewAlbumBox(album);
    albumContainer.appendChild(newAlbumBox);
    newAlbumBox.addEventListener("mousedown", handleClick);
});

