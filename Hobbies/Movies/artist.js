import {directorData, movieData} from "./data/movieData.js"

var theArtist = localStorage.getItem("artist");
var title = document.querySelector("title");
title.innerHTML = theArtist;

var artistTitle = document.getElementById("artist-title");
artistTitle.innerHTML = theArtist;
artistTitle.parentNode.style.backgroundImage = "url(./imgs/directors/" + directorData[theArtist]["artist-img"] + ".jpeg)";

var movieContainer = document.getElementById("movie-container");


function createNewBox(theData,
                      data,
                      boxClassName,
                      boxHref,
                      coverSrcPath,
                      coverClassName,
                      titleClassName) {
    var newBox = document.createElement("a");
    newBox.classList.add(boxClassName);
    newBox.href = boxHref;
    var newCover = document.createElement("img");
    newCover.classList.add(coverClassName);
    newCover.src = "./imgs/" + coverSrcPath + "/" + data[theData]["img-name"];
    console.log(newCover.src);
    var newTitle = document.createElement("h3");
    newTitle.classList.add(titleClassName);
    newTitle.innerHTML = data[theData]["name"];
    newBox.appendChild(newCover);
    newBox.appendChild(newTitle);
    return newBox;
}

function handleClick(evt) {
    var target = evt.target;
    var targetH3 = target.querySelector("h3");
    if (targetH3) {
        var theMovieName = targetH3.innerHTML;
    }
    else {
        var theMovieName = target.parentNode.querySelector("h3").innerHTML;
    }
    Object.keys(movieData).forEach(movie => {
        if (movieData[movie]["name"] === theMovieName) {
            localStorage.setItem("movie", movie);
        }
    })
}

directorData[theArtist]["movies"].forEach(movie => {
    var newMovieBox = createNewBox(movie,
                                   movieData,
                                   "movie-box",
                                   "./movie.html",
                                   "movies",
                                   "movie-cover",
                                   "movie-title");
    movieContainer.appendChild(newMovieBox);
    newMovieBox.addEventListener("mousedown", handleClick);
});