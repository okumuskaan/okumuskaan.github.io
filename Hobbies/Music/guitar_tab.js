var theAlbum = localStorage.getItem("album");

import {artistData, albumData} from "./data/musicData.js";

document.querySelector("html").style.background =
albumData[theAlbum]["background-color"];

var tabs = [["--------------------------------------------------------",
             "--------------------------------------------------------",
             "---------------4-2--------------------------------------",
             "-------------2------5-7~------------------5-3-----3-3---",
             "---------2-3------------------------2-0-3-----5-3-------",
             "--5--3-5----------------------5-3-5---------------------"
            ],
            ["--------------------------------------------------------",
             "--------------------------------------------------------",
             "--------------------------------------------------------",
             "------------2-0---------------------------5-3-----3-3---",
             "--------2-3-----2-------------------2-0-3-----5-3-------",
             "--5-3-5-------------3-5-------5-3-5---------------------"
            ],
            ["--------------------------------------------x-x-x-x-----",
             "--------------------------------------------x-x-x-x-----",
             "--------------4-2---------------------------x-x-x-x-----",
             "------------2-----------------------------5-3-3-3-3-----",
             "--------2-3-------------------------2-0-3---x-x-x-x-----",
             "--5-3-5-------------3-5-------5-3-5---------x-x-x-x-----"
             ],
             ["--0---0-0---0---0----------------------------------------",
              "--0---0-0---1---1--------1---------3---------------------",
              "--0---0-0---2---2------2---2-----4---4-------------------",
              "--2---2-2---2---2---/3--------/5-------------------------",
              "--2---2-2---0---2----------------------------------------",
              "--0---0-0---0---0----------------------------------------"
             ]
             ];

var tabBoxTitles = ["Intro", "Intro 2", "Verse 1", "Chorus 1"];

var tabLineNames = ["E", "B", "G", "D", "A", "E"]
let noteInd = 0;

function createAddElement(elType, className, returnEl=false, container="",
                          innerHTML="", handleEvent="", event="", id="") {
    var el = document.createElement(elType);
    el.classList.add(className);
    if (id!=="") {
        el.setAttribute("id", id);
    }
    if (innerHTML!=="") {
        el.innerHTML = innerHTML;
    }
    if (container!=="") {
        container.appendChild(el);
    }
    if (handleEvent!=="") {
        el.addEventListener(event, handleEvent);
    }
    if (returnEl) {
        return el;
    }
}

let evt_ind = 0;
function handleNote(evt, note="") {
    if (note==="") {
        note = evt.target;
    }
    console.log(note);
    let data = note.style.backgroundColor;
    console.log(data);
    if (data==="white" || data==="") {
        note.style.backgroundColor = "#719EEF";
        note.style.color = "white";
        note.classList.add("selected");
    }
    else {
        note.style.backgroundColor = "white";
        note.style.color = "rgba(0,0,0,0.7)";
    }
    evt_ind = (evt_ind+1)%2;
}

function createTabLineDiv(tab, tabLineName) {
    var tabLineDiv = createAddElement("div", "tab-line", true);
    createAddElement("span", "tab-line-name", false, tabLineDiv, tabLineName);
    createAddElement("span", "tab-line-separator", false, tabLineDiv, "|");
    for (let i in tab) {
        createAddElement("span", "note", false, tabLineDiv, tab[i], handleNote,
        "mousedown", noteInd);
        noteInd++;
    }
    createAddElement("span", "tab-line-separator", false, tabLineDiv, "|");
    return tabLineDiv;
}

function updateTabBoxDiv(tabs, tabBox, tabBoxTitle="") {
    createAddElement("p", "tab-box-title", false, tabBox, tabBoxTitle)
    let i=0;
    tabs.forEach(tab => {
        tabBox.appendChild(createTabLineDiv(tab, tabLineNames[i]));
        i++;
    });
}

var tabContainer = document.getElementById("tab-container");

let tabInd = 0;
tabs.forEach(tab => {
    var tabBoxDiv = createAddElement("div", "tab-box", true);
    updateTabBoxDiv(tab, tabBoxDiv, tabBoxTitles[tabInd]);
    tabContainer.appendChild(tabBoxDiv);
    tabInd++;
})

function deleteNewNotes() {

}

function updateNotes(newNote) {
    Array.from(document.getElementsByClassName("selected")).forEach(note => {
        note.innerHTML = newNote;
    });
}

function enterNewNotes(evt) {
    Array.from(document.getElementsByClassName("selected")).forEach(note => {
        handleNote(evt, note);
        note.classList.remove("selected");
    });
}


function shiftNotes(evt) {
console.log("Hey");
    Array.from(document.getElementsByClassName("selected")).forEach(note => {
        handleNote(evt, note);
        note.classList.remove("selected");
        console.log((note.id+1).toString());
        var newNote = document.getElementById((note.id+1).toString());
        console.log(newNote);
        newNote.classList.add("selected");
        handleNote(newNote);
    });
}


function keydownHandler(evt) {
    console.log(evt.key);
    console.log(document.getElementsByClassName("selected"));

    if (evt.key === "Enter") {
        enterNewNotes(evt);
    }
    else if (evt.key === "Backspace") {
        updateNotes("-");
    }
    else if (evt.key === "ArrowRight") {
        shiftNotes(evt);
    }
    else if (evt.key.length === 1){
        updateNotes(evt.key);
    }


}

document.addEventListener("keydown", keydownHandler);

