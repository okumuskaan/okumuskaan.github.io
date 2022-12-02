import {artistData} from "../Music/data/musicData.js";
import {directorData} from "../Movies/data/movieData.js";
import {composerData} from "../ClassicalMusic/data/classicalmusicData.js";
import {painterData} from "../Painters/data/paintersData.js";

var artistType = document.querySelector("title").innerHTML.split(" ").pop();
if (artistType==="Musicians") {
    var rootPath = "../Music";
    var imgPath = rootPath + "/imgs/artists/";
    var data = artistData;
}
else if (artistType==="Directors") {
    var rootPath = "../Movies";
    var imgPath = rootPath + "/imgs/directors/";
    var data = directorData;
}
else if (artistType==="Composers") {
    var rootPath = "../ClassicalMusic";
    var imgPath = rootPath + "/imgs/composers/";
    var data = composerData;
}
else if (artistType==="Painters") {
    var rootPath = "../Painters";
    var imgPath = rootPath + "/imgs/painters/";
    var data = painterData;
}

var artistContainer = document.getElementById("artist-container");

function handleClick(evt) {
    var target = evt.target;
    var targetP = target.querySelector("p")
    if (targetP) {
        localStorage.setItem("artist", targetP.innerHTML);
    }
    else {
        localStorage.setItem("artist", target.innerHTML);
    }
}

function createArtistBox(artist) {
    var newArtistBox = document.createElement("a");
    newArtistBox.classList.add("artist-box");
    newArtistBox.href = rootPath + "/artist.html";
    var newArtistBoxTitle = document.createElement("p");
    newArtistBoxTitle.innerHTML = artist;
    newArtistBox.appendChild(newArtistBoxTitle);
    newArtistBox.style.backgroundImage = "url(" + imgPath +
    data[artist]["artist-img"] + ".jpeg)";
    return newArtistBox;
}

Object.keys(data).forEach(artist => {
    var newArtistBox = createArtistBox(artist);
    newArtistBox.addEventListener("mousedown", handleClick);
    artistContainer.appendChild(newArtistBox);
})
