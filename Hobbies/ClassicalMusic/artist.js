import {composerData, workData} from "./data/classicalmusicData.js"

console.log(workData);

var theArtist = localStorage.getItem("artist");
var title = document.querySelector("title");
title.innerHTML = theArtist;

var artistTitle = document.getElementById("artist-title");
artistTitle.innerHTML = theArtist;
artistTitle.parentNode.style.backgroundImage = "url(./imgs/composers/" +
composerData[theArtist]["artist-img"] + ".jpeg)";

var albumContainer = document.getElementById("album-container");

function handleClickAlbumBox(evt) {

    console.log("clicked");
    var cNsmB;

    var currentNode = evt.target;
    var temp = currentNode.classList[0];
    if (temp==="album-box") {
        currentNode.style.marginBottom = "0px";
    }
    while (temp !== "album-box-and-part-box") {
        currentNode = currentNode.parentNode;
        temp = currentNode.classList[0];
        if (temp==="album-box") {
            currentNode.style.marginBottom = "0px";
        }
        console.log(temp);
    }
    console.log(currentNode);
    currentNode.style.height = (currentNode.getElementsByClassName("part-box").length * 50 + 130) + "px";
    Array.from(currentNode.getElementsByClassName("part-box")).forEach(partbox => {
        console.log("voila. ", partbox);
        partbox.style.height = "50px";
        partbox.style.opacity = "1";
    });

    if(currentNode.getElementsByClassName("part-box")[0]) {
        console.log("Increment")
        console.log(currentNode)
    };
    //workData[]
}

function createNewWorkBox(theWork) {

    var newAlbumBoxAndPartBox = document.createElement("div");
    newAlbumBoxAndPartBox.classList.add("album-box-and-part-box");

    var newAlbumBox = document.createElement("a");
    newAlbumBox.classList.add("album-box");
    //newAlbumBox.href = "./album.html";
    var newAlbumTitle = document.createElement("h3");
    newAlbumTitle.classList.add("album-title");
    newAlbumTitle.innerHTML = workData[theWork]["name"];
    newAlbumBox.appendChild(newAlbumTitle);
    newAlbumBoxAndPartBox.appendChild(newAlbumBox);


    if (workData[theWork]["parts"].length > 0) {
        newAlbumBox.addEventListener("click", handleClickAlbumBox);

        var arrowContainer = document.createElement("div");
        arrowContainer.classList.add("arrow-container");
        var arrowIcon = document.createElement("img");
        arrowIcon.classList.add("arrow-icon");
        arrowIcon.src = "./imgs/misc/arrow.png";
        arrowContainer.appendChild(arrowIcon);
        newAlbumBox.appendChild(arrowContainer);

        var partBoxContainer = document.createElement("div");
        partBoxContainer.classList.add("part-box-container");
        workData[theWork]["parts"].forEach(part => {
            var partBox = document.createElement("div")
            partBox.classList.add("part-box");
            partBox.innerHTML = part;
            partBoxContainer.appendChild(partBox);
        });
        console.log(partBoxContainer);
        newAlbumBoxAndPartBox.appendChild(partBoxContainer);

    }

    return newAlbumBoxAndPartBox;
}

function createNewWorkTypeBox(theWorkType) {
    var newWorkTypeBox = document.createElement("div");
    newWorkTypeBox.classList.add("work-type-box");
    var newWorkTypeBoxTitle = document.createElement("h2");
    newWorkTypeBoxTitle.classList.add("work-type-box-title");
    newWorkTypeBoxTitle.innerHTML = theWorkType;
    newWorkTypeBox.appendChild(newWorkTypeBoxTitle);
    return newWorkTypeBox;
}

function handleClick(evt) {
/*
    var target = evt.target;
    var targetH3 = target.querySelector("h3");
    if (targetH3) {
        var theWorkName = targetH3.innerHTML;
    }
    else {
        var theWorkName = target.parentNode.querySelector("h3").innerHTML;
    }
    Object.keys(workData).forEach(work => {
        if (workData[album]["name"] === theWorkName) {
            localStorage.setItem("album", work);
        }
    })
*/
}

for (let workType in composerData[theArtist]["works"]) {
    var newWorkTypeBox = createNewWorkTypeBox(workType);
    composerData[theArtist]["works"][workType].forEach(work => {
        var newWorkBox = createNewWorkBox(work);
        newWorkTypeBox.appendChild(newWorkBox);
        newWorkBox.addEventListener("mousedown", handleClick);
    });
    albumContainer.appendChild(newWorkTypeBox);
}


