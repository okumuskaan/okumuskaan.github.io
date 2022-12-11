import {artistData, albumData, favsongData} from "./data/musicData.js"

var theArtist = localStorage.getItem("artist");
var title = document.querySelector("title");
title.innerHTML = theArtist;

var artistTitle = document.getElementById("artist-title");
artistTitle.innerHTML = theArtist;
artistTitle.parentNode.style.backgroundImage = "url(./imgs/artists/" + artistData[theArtist]["artist-img"] + ".jpeg)";

var albumContainer = document.getElementById("album-container");
var songContainer = document.getElementById("song-container");

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

function createNewSongBox(theSong, idNumber) {
    var newSongBox = document.createElement("div");
    newSongBox.classList.add("song-box");
    //var newAlbumCover = document.createElement("img");
    //newAlbumCover.classList.add("album-cover");
    //newAlbumCover.src = "./imgs/albums/" + albumData[theAlbum]["img-name"];
    var songNumber = document.createElement("p");
    songNumber.classList.add("song-number");
    songNumber.innerHTML = idNumber;
    var newSongTitle = document.createElement("a");
    newSongTitle.classList.add("song-title");
    newSongTitle.innerHTML = favsongData[theSong]["name"];
    var newSongBoxLeft = document.createElement("div");
    newSongBoxLeft.classList.add("song-box-left");
    newSongBoxLeft.appendChild(songNumber);
    newSongBoxLeft.appendChild(newSongTitle);
    newSongBox.appendChild(newSongBoxLeft);
    if (favsongData[theSong]["guitar"]===1) {
        var guitarBox = document.createElement("a");
        guitarBox.classList.add("guitar-box");
        guitarBox.href = "./guitar_tab.html";
        var guitar = document.createElement("img");
        guitar.classList.add("guitar-icon");
        guitar.src = "./imgs/misc/electric-guitar-white.png";
        guitar.id = theSong;
        guitarBox.addEventListener("mousedown", (evt)=>{
            console.log(evt.target.id);
            localStorage.setItem("album", favsongData[evt.target.id]["album"]);
            localStorage.setItem("song", favsongData[evt.target.id]["name"]);
        });
        guitarBox.appendChild(guitar);
        newSongBox.appendChild(guitarBox);
    }
    return newSongBox;
}

function handleAlbumClick(evt) {
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
    newAlbumBox.addEventListener("mousedown", handleAlbumClick);
});

function getSongRanks(favSongs) {
    var rankedFavSongs = [];
    favSongs.forEach(favsong => {
        var newArr = [];
        newArr.push(favsong);
        newArr.push(favsongData[favsong]["rank"]);
        rankedFavSongs.push(newArr);
    })
    rankedFavSongs.sort(function(first, second) {
        return first[1] - second[1];
    });
    return rankedFavSongs;
}

var rankedFavSongs = getSongRanks(artistData[theArtist]["fav-songs"]);
for (let i=0; i<rankedFavSongs.length; i++) {
    var newSongBox = createNewSongBox(rankedFavSongs[i][0], i+1);
    songContainer.appendChild(newSongBox);
}

