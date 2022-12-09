import {artistData, albumData} from "./data/musicData.js";

var theAlbum = localStorage.getItem("album");
var theArtist = localStorage.getItem("artist");

var title = document.querySelector("title");
title.innerHTML = albumData[theAlbum]["name"];
var html = document.querySelector("html");
html.style.background = albumData[theAlbum]["background-color"];
var albumCover = document.getElementById("album-cover");
albumCover.src = "./imgs/albums/" + albumData[theAlbum]["img-name"];
var albumTitle = document.getElementById("album-title");
albumTitle.innerHTML = albumData[theAlbum]["name"] + " - <em>" + theArtist + "</em>";
albumTitle.style.color = albumData[theAlbum]["title-color"];

var songContainer = document.getElementById("song-container");
function addGuitarIcon(songBox, type="electric") {
    if (type==="electric") {
        var src_guitar = "./imgs/misc/electric-guitar.png";
        var class_guitar = "electric-guitar-icon";
    } else {
        var src_guitar = "./imgs/misc/guitar.png";
        var class_guitar = "guitar-icon";
    }
    var aElement = document.createElement("a");
    var guitar = document.createElement("img");
    guitar.src = src_guitar;
    guitar.classList.add(class_guitar);
    aElement.appendChild(guitar);
    aElement.href = "./guitar_tab.html";
    var songBoxEnding = songBox.getElementsByClassName("ending")[0];
    songBoxEnding.appendChild(aElement);
}

function createNewSongBox(i, songName) {
    var newSongBox = document.createElement("div");
    newSongBox.classList.add("song-box");
    newSongBox.style.backgroundColor = albumData[theAlbum]["song-box-background-color"];
    var newSongBoxTitle = document.createElement("h6");
    var newSongBoxNumber = document.createElement("span");
    newSongBoxNumber.classList.add("song-box-number");
    newSongBoxNumber.style.color = albumData[theAlbum]["song-number-color"];
    newSongBoxNumber.innerHTML = i;
    newSongBoxTitle.innerHTML = newSongBoxNumber.outerHTML + songName;
    newSongBoxTitle.style.color = albumData[theAlbum]["song-title-color"];
    var newSongBoxEnding = document.createElement("div");
    newSongBoxEnding.classList.add("ending");
    newSongBox.appendChild(newSongBoxTitle);
    newSongBox.appendChild(newSongBoxEnding);
    return newSongBox;
}



var ind=1;
albumData[theAlbum]["songs"].forEach(song => {
    var newSongBox = createNewSongBox(ind, song);
    songContainer.appendChild(newSongBox);
    if (albumData[theAlbum]["guitar-inds"].indexOf(ind) !== -1) {
        addGuitarIcon(newSongBox);
    }
    ind++;
})

Array.from(document.getElementsByClassName("electric-guitar-icon")).forEach(
(guitar)=> {
    guitar.addEventListener("mouseenter", (evt)=>{
        console.log(evt.target.parentNode.parentNode.parentNode.querySelector
        ("h6").innerHTML.split(">").pop());
        let songName = evt.target.parentNode.parentNode.parentNode.querySelector
                               ("h6").innerHTML.split(">").pop();
        localStorage.setItem("song", songName);
    });
})