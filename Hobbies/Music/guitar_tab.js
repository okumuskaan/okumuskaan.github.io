var theAlbum = localStorage.getItem("album");

import {artistData, albumData} from "./data/musicData.js";

document.querySelector("html").style.background =
albumData[theAlbum]["background-color"];

var closebtn = document.getElementById("close-button");

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

let MAXNUMBERNOTES = tabs[0][0].length;
let TOTALNUMBERNOTES = [];

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

function selectNote(note) {
    note.style.backgroundColor = "#719EEF";
    note.style.color = "white";
    note.classList.add("selected");
}
function deselectNote(note) {
    note.style.backgroundColor = "white";
    note.style.color = "rgba(0,0,0,0.7)";
    note.classList.remove("selected");
}

function handleNote(evt, note="") {
    if (note==="") {
        note = evt.target;
    }
    let data = note.style.backgroundColor;
    if (data==="white" || data==="") {
        selectNote(note);
    }
    else {
        deselectNote(note);
    }
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
    TOTALNUMBERNOTES.push(tab.length*MAXNUMBERNOTES);
    tabInd++;
})


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


function getLastId(idNumber) {
    let sum = 0;
    TOTALNUMBERNOTES.forEach(num => {
        if (sum <= idNumber) {
            sum += num;
        }
    });
    return sum;
}
function getFirstId(idNumber) {
    let sum = 0;
    TOTALNUMBERNOTES.forEach(num => {
        sum += num;
        if (sum > idNumber) {
            sum -= num;
        }
    });
    return sum;
}

function shiftNotes(evt, mode) {
    var checkPos = function(){};
    var getNewId = function(){};
    if (evt.key === "ArrowRight") {
        getNewId = function (noteId) {
            return parseInt(noteId)+1;
        };
        checkPos = function (noteId) {
            return getNewId(noteId)%MAXNUMBERNOTES !== 0;
        };
    }
    else if (evt.key === "ArrowLeft") {
        getNewId = function (noteId) {
            return parseInt(noteId)-1;
        };
        checkPos = function (noteId) {
            return parseInt(noteId)%MAXNUMBERNOTES !== 0;
        };
    }
    else if (evt.key === "ArrowUp") {
        getNewId = function (noteId) {
            return parseInt(noteId)-MAXNUMBERNOTES;
        };
        checkPos = function (noteId) {
            return getNewId(noteId) > getFirstId(parseInt(noteId));
        };
    }
    else if (evt.key === "ArrowDown") {
        getNewId = function (noteId) {
            return parseInt(noteId)+MAXNUMBERNOTES;
        };
        checkPos = function (noteId) {
            return getNewId(noteId) < getLastId(parseInt(noteId));
        };
    }
    Array.from(document.getElementsByClassName("selected")).forEach(note => {
        if (checkPos(note.id)) {
            if (evt.shiftKey === false) {
                handleNote(evt, note);
            }
            var newNote = document.getElementById(getNewId(note.id).toString());
            newNote.classList.add("selected");
            handleNote(evt, newNote);
        }
    });
}


function keydownHandler(evt) {

    if (evt.key === "Enter") {
        enterNewNotes(evt);
    }
    else if (evt.key === "Backspace") {
        updateNotes("-");
    }
    else if (evt.key === "ArrowRight" || evt.key === "ArrowLeft" ||
             evt.key === "ArrowUp"    || evt.key === "ArrowDown") {
        shiftNotes(evt);
    }
    else if (evt.key === "c" && evt.ctrlKey) {
        let chordBar = document.getElementById("chord-bar");
        chordBar.style.width = "15%";
        chordBar.style.minWidth = "200px";
        Array.from(document.getElementsByClassName("chord")).forEach((chord) => {
            chord.style.opacity = "1";
        });
        closebtn.style.opacity = "0.8"
    }
    else if (evt.key === "Escape") {
        let chordBar = document.getElementById("chord-bar");
        chordBar.style.width = "0%";
        chordBar.style.minWidth = "0px";
        Array.from(document.getElementsByClassName("chord")).forEach((chord) => {
            chord.style.opacity = "0";
        });
        closebtn.style.opacity = "0";
    }
    else if (evt.key.length === 1){
        updateNotes(evt.key);
    }


}

document.addEventListener("keydown", keydownHandler);



function getStringsIDs(noteID, firstID, lastID) {
    var resID = 0;
    var stringIDs = [];
    while (noteID >= firstID) {
        resID = noteID;
        noteID -= MAXNUMBERNOTES
    }
    while (resID <= lastID) {
        console.log("resID: ", resID);
        stringIDs.push(resID);
        resID += MAXNUMBERNOTES;
        console.log("resID: ", resID);
    }
    return stringIDs;
}

let chordTabs = {
        "A":  ["0", "2", "2", "2", "0", "0"],
        "Am": ["0", "1", "2", "2", "0", "0"],
        "B":  ["2", "4", "4", "4", "2", "x"],
        "Bm": ["2", "2", "3", "4", "4", "x"],
        "C":  ["0", "1", "0", "2", "3", "0"],
        "Cm": ["3", "4", "5", "5", "3", "x"],
        "D":  ["2", "3", "2", "0", "0", "0"],
        "Dm": ["1", "3", "2", "0", "0", "0"],
        "E":  ["0", "0", "1", "2", "2", "0"],
        "Em": ["0", "0", "0", "2", "2", "0"],
        "F":  ["1", "1", "2", "3", "3", "1"],
        "Fm": ["1", "1", "1", "3", "3", "1"],
        "G":  ["3", "0", "0", "0", "2", "3"],
        "Gm": ["3", "3", "3", "5", "5", "3"],
    };

let chords = Array.from(document.getElementsByClassName("chord"));
chords.forEach((chord) => {
    console.log(chord.innerHTML);
    console.log(chordTabs[chord.innerHTML]);
    chord.addEventListener("click", (evt)=>{
        let chordName = evt.target.innerHTML;
        let chordTab = chordTabs[chordName];
        console.log(document.getElementsByClassName("selected"));
        Array.from(document.getElementsByClassName("selected")).forEach((noteBox) => {
            let lastID = getLastId(noteBox.id);
            let firstID = getFirstId(noteBox.id);
            console.log(lastID);
            console.log(firstID);
            let stringIDs = getStringsIDs(parseInt(noteBox.id), firstID, lastID);
            console.log(stringIDs);
            let ind=0;
            stringIDs.forEach((noteID) => {
                document.getElementById(noteID.toString()).innerHTML = chordTab[ind];
                selectNote(document.getElementById(noteID.toString()));
                ind +=1;
            });
        });
    })
});


closebtn.addEventListener("click", (evt)=> {
    let chordBar = document.getElementById("chord-bar");
    chordBar.style.width = "0%";
    chordBar.style.minWidth = "0px";
    Array.from(document.getElementsByClassName("chord")).forEach((chord) => {
        chord.style.opacity = "0";
    });
    closebtn.style.opacity = "0";
})





// Deactivation of Arrow keys for browser scrolling
var arrow_keys_handler = function(e) {
    switch(e.code){
        case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
        e.preventDefault(); break;
        default: break;
    }
};
window.addEventListener("keydown", arrow_keys_handler, false);