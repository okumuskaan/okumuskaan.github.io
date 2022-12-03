import {artistData} from "../Music/data/musicData.js";

console.log(artistData);

var musicianContainer = document.getElementById("musician-container");

let ind = 1;
function addArtistToBox(artist) {
console.log(ind);
console.log(Math.floor((ind-1)/12));
    var tableind = Math.floor((ind-1)/10);
    console.log((ind-1)%10);
    var rowInd = (ind-1)%10;
    var newArtist = document.createElement("a");
    newArtist.href = "../Music/artist.html";
    newArtist.classList.add("musician");
    var number = document.createElement("span");
    number.classList.add("number");
    number.innerHTML = ind;
    newArtist.innerHTML = number.outerHTML + artist;
    newArtist.style.gridColumn = (tableind+1).toString() + " / " + (tableind+2).toString();
    if (tableind>0) {
        newArtist.style.gridRow = (rowInd+1).toString() + " / " + (rowInd+2).toString();
    }
    musicianContainer.appendChild(newArtist);
    ind += 1;
}

let i = 1;
for (let artist in artistData) {
    if (i<=20) {
        addArtistToBox(artist);
    }
    i +=1;
}
