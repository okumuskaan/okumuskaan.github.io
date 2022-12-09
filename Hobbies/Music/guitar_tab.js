const CHORDBARHEIGHT = "300px";

var theAlbum = localStorage.getItem("album");
var theSong = localStorage.getItem("song");
console.log("TheSong:", theSong);

import {artistData, albumData} from "./data/musicData.js";

document.querySelector("html").style.background =
albumData[theAlbum]["background-color"];
document.getElementById("tab-container").querySelector("h1").innerHTML =
theSong + " - Guitar Tab";

var audioPlayer = document.querySelector("audio");

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
    console.log(note.id);
}
function deselectNote(note) {
    note.style.backgroundColor = "white";
    note.style.color = "rgba(0,0,0,0.7)";
    note.classList.remove("selected");
}
function trackNote(note) {
    note.style.backgroundColor = "crimson";
    note.style.color = "white";
    note.classList.add("tracked");
}
function detrackNote(note) {
    note.style.backgroundColor = "white";
    note.style.color = "rgba(0,0,0,0.7)";
    note.classList.remove("tracked");
}

function handleNote(evt, note="") {
    // When the user presses a note box
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
    // Create Each TabLines
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
    // Update(?Create) Elements Inside TabBoxDiv
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
    // Update elements of Selected Notes
    Array.from(document.getElementsByClassName("selected")).forEach(note => {
        note.innerHTML = newNote;
    });
}

function deleteAllNotes() {
    // Delete (Make them '-') all selected notes
    Array.from(document.getElementsByClassName("note")).forEach(note => {
        note.innerHTML = "-";
    });
}

function enterNewNotes(evt) {
    // When the user presses the enter button
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

function openChordToolbar() {
    // Opens chord toolbar
    let tabContainer = document.getElementById("tab-container");
    tabContainer.style.marginBottom = "320px";
    let chordBar = document.getElementById("chord-bar");
    chordBar.style.height = CHORDBARHEIGHT;
    chordBar.style.minHeight = "270px";
    Array.from(document.getElementsByClassName("chord")).forEach((chord) => {
        chord.style.opacity = "1";
    });
    Array.from(document.getElementsByClassName("chord-type")).forEach(
    (chordType) => {
        chordType.style.opacity = "1";
    });
    closebtn.style.opacity = "0.8";
};

function keydownHandler(evt) {
    // Handles all types of keydown interaction

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
        openChordToolbar();
    }
    else if (evt.key === "Escape") {
        let tabContainer = document.getElementById("tab-container");
        tabContainer.style.marginBottom = "50px";
        let chordBar = document.getElementById("chord-bar");
        chordBar.style.height = "0px";
        chordBar.style.minHeight = "0px";
        Array.from(document.getElementsByClassName("chord")).forEach((chord) => {
            chord.style.opacity = "0";
        });
        Array.from(document.getElementsByClassName("chord-type")).forEach(
        (chordType) => {
            chordType.style.opacity = "0";
        });
        closebtn.style.opacity = "0";
    }
    else if (evt.key === " ") {
        console.log("Play the song from space");
        play_or_pause();
    }
    else if (evt.key.length === 1){
        updateNotes(evt.key);
    }


}
document.addEventListener("keydown", keydownHandler);
window.onkeydown = function(e) {
  return !(e.keyCode == 32 && e.target == document.body);
};


function getStringsIDs(noteID, firstID, lastID) {
    var resID = 0;
    var stringIDs = [];
    while (noteID >= firstID) {
        resID = noteID;
        noteID -= MAXNUMBERNOTES
    }
    while (resID <= lastID) {
        stringIDs.push(resID);
        resID += MAXNUMBERNOTES;
    }
    return stringIDs;
}


// TODO: Add chord variants and put chordTabs Data in a separate file
let chordTabs = {
        "AMajor":   ["0", "2", "2", "2", "0", "x"],
        "AMinor":   ["0", "1", "2", "2", "0", "x"],
        "A7":       ["0", "2", "0", "2", "0", "x"],
        "A5":       ["x", "x", "2", "2", "0", "x"],
        "Adim":     ["x", "1", "2", "1", "0", "x"],
        "Adim7":    ["x", "1", "2", "1", "x", "2"],
        "Aaug":     ["1", "2", "2", "3", "0", "x"],
        "Asus2":    ["0", "0", "2", "2", "0", "x"],
        "Asus4":    ["0", "3", "2", "2", "0", "x"],
        "Amaj7":    ["0", "2", "1", "2", "0", "x"],
        "Am7":      ["0", "1", "0", "2", "0", "x"],
        "A7sus4":   ["0", "3", "0", "2", "0", "x"],

        "A#Major":   ["1", "3", "3", "3", "1", "x"],
        "A#Minor":   ["1", "2", "3", "3", "1", "x"],
        "A#7":       ["1", "3", "1", "3", "1", "x"],
        "A#5":       ["x", "x", "3", "3", "1", "x"],
        "A#dim":     ["x", "2", "3", "2", "1", "x"],
        "A#dim7":    ["x", "2", "0", "2", "1", "x"],
        "A#aug":     ["2", "3", "3", "4", "x", "x"],
        "A#sus2":    ["1", "1", "3", "3", "1", "x"],
        "A#sus4":    ["1", "4", "3", "3", "1", "x"],
        "A#maj7":    ["1", "3", "2", "3", "1", "x"],
        "A#m7":      ["1", "2", "1", "3", "1", "x"],
        "A#7sus4":   ["1", "4", "1", "3", "1", "x"],

        "BMajor":   ["2", "3", "3", "3", "2", "2"],
        "BMinor":   ["2", "2", "3", "3", "2", "2"],
        "B7":       ["2", "0", "2", "1", "2", "x"],
        "B5":       ["x", "x", "4", "4", "2", "x"],
        "Bdim":     ["x", "3", "4", "3", "2", "x"],
        "Bdim7":    ["x", "0", "1", "0", "x", "1"],
        "Baug":     ["x", "0", "0", "5", "6", "7"],
        "Bsus2":    ["2", "2", "4", "4", "2", "x"],
        "Bsus4":    ["2", "5", "4", "4", "2", "x"],
        "Bmaj7":    ["2", "0", "3", "1", "x", "x"],
        "Bm7":      ["2", "0", "2", "0", "0", "x"],
        "B7sus4":   ["2", "5", "2", "4", "2", "x"],

        "CMajor":   ["0", "1", "0", "2", "3", "x"],
        "CMinor":   ["3", "1", "0", "1", "3", "x"],
        "C7":       ["0", "1", "3", "2", "3", "x"],
        "C5":       ["x", "1", "0", "x", "x", "x"],
        "Cdim":     ["0", "4", "5", "4", "3", "x"],
        "Cdim7":    ["x", "1", "2", "1", "x", "2"],
        "Caug":     ["0", "1", "1", "2", "3", "x"],
        "Csus2":    ["3", "3", "5", "5", "3", "x"],
        "Csus4":    ["x", "1", "0", "3", "3", "x"],
        "Cmaj7":    ["3", "1", "4", "2", "x", "x"],
        "Cm7":      ["x", "1", "3", "1", "3", "x"],
        "C7sus4":   ["3", "6", "3", "5", "3", "x"],

        "C#Major":   ["2", "2", "1", "3", "4", "x"],
        "C#Minor":   ["4", "5", "6", "6", "4", "x"],
        "C#7":       ["x", "2", "4", "3", "4", "x"],
        "C#5":       ["x", "2", "1", "x", "x", "x"],
        "C#dim":     ["x", "5", "6", "5", "4", "x"],
        "C#dim7":    ["x", "2", "0", "2", "1", "x"],
        "C#aug":     ["1", "2", "2", "3", "x", "x"],
        "C#sus2":    ["4", "4", "6", "6", "4", "x"],
        "C#sus4":    ["x", "2", "1", "4", "4", "x"],
        "C#maj7":    ["1", "1", "1", "3", "4", "1"],
        "C#m7":      ["x", "2", "4", "2", "4", "x"],
        "C#7sus4":   ["4", "7", "4", "6", "4", "x"],

        "DMajor":   ["2", "3", "2", "0", "x", "x"],
        "DMinor":   ["1", "3", "2", "0", "x", "x"],
        "D7":       ["2", "1", "2", "0", "x", "x"],
        "D5":       ["x", "3", "2", "0", "x", "x"],
        "Ddim":     ["x", "6", "7", "6", "5", "x"],
        "Ddim7":    ["1", "0", "1", "0", "x", "x"],
        "Daug":     ["2", "3", "3", "0", "x", "x"],
        "Dsus2":    ["0", "3", "2", "0", "x", "x"],
        "Dsus4":    ["3", "3", "2", "0", "x", "x"],
        "Dmaj7":    ["2", "2", "2", "0", "x", "x"],
        "Dm7":      ["1", "1", "2", "0", "x", "x"],
        "D7sus4":   ["3", "1", "2", "0", "x", "x"],

        "D#Major":   ["3", "4", "3", "1", "x", "x"],
        "D#Minor":   ["2", "4", "3", "1", "x", "x"],
        "D#7":       ["3", "2", "3", "1", "x", "x"],
        "D#5":       ["x", "4", "3", "1", "x", "x"],
        "D#dim":     ["x", "7", "8", "7", "6", "x"],
        "D#dim7":    ["2", "1", "2", "1", "x", "x"],
        "D#aug":     ["3", "4", "4", "5", "x", "x"],
        "D#sus2":    ["1", "4", "3", "1", "x", "x"],
        "D#sus4":    ["4", "4", "3", "1", "x", "x"],
        "D#maj7":    ["3", "3", "3", "1", "x", "x"],
        "D#m7":      ["2", "2", "3", "1", "x", "x"],
        "D#7sus4":   ["4", "2", "3", "1", "x", "x"],

        "EMajor":   ["0", "0", "1", "2", "2", "0"],
        "EMinor":   ["0", "0", "0", "2", "2", "0"],
        "E7":       ["0", "0", "1", "0", "2", "0"],
        "E5":       ["x", "x", "x", "x", "2", "0"],
        "Edim":     ["x", "x", "0", "2", "1", "0"],
        "Edim7":    ["x", "2", "0", "2", "1", "x"],
        "Eaug":     ["0", "1", "1", "2", "3", "0"],
        "Esus2":    ["2", "5", "4", "1", "x", "x"],
        "Esus4":    ["0", "0", "2", "2", "2", "0"],
        "Emaj7":    ["x", "0", "1", "1", "x", "0"],
        "Em7":      ["0", "0", "0", "0", "1", "0"],
        "E7sus4":   ["0", "0", "1", "0", "1", "0"],

        "FMajor":   ["1", "1", "2", "3", "3", "1"],
        "FMinor":   ["1", "1", "1", "3", "3", "1"],
        "F7":       ["1", "1", "2", "1", "3", "1"],
        "F5":       ["x", "x", "x", "x", "3", "1"],
        "Fdim":     ["x", "x", "1", "3", "2", "1"],
        "Fdim7":    ["x", "3", "1", "3", "2", "x"],
        "Faug":     ["1", "2", "2", "3", "x", "x"],
        "Fsus2":    ["3", "6", "5", "3", "x", "x"],
        "Fsus4":    ["1", "1", "3", "3", "3", "1"],
        "Fmaj7":    ["0", "1", "2", "3", "x", "x"],
        "Fm7":      ["1", "1", "1", "1", "3", "1"],
        "F7sus4":   ["1", "1", "3", "1", "3", "1"],

        "F#Major":   ["2", "2", "3", "4", "4", "2"],
        "F#Minor":   ["2", "2", "2", "4", "4", "2"],
        "F#7":       ["2", "2", "3", "2", "4", "2"],
        "F#5":       ["x", "x", "x", "x", "4", "2"],
        "F#dim":     ["x", "x", "2", "4", "3", "2"],
        "F#dim7":    ["x", "1", "2", "1", "x", "2"],
        "F#aug":     ["2", "3", "3", "4", "x", "x"],
        "F#sus2":    ["4", "7", "6", "4", "x", "x"],
        "F#sus4":    ["2", "2", "4", "4", "4", "2"],
        "F#maj7":    ["1", "2", "3", "4", "x", "x"],
        "F#m7":      ["2", "2", "2", "2", "4", "2"],
        "F#7sus4":   ["2", "2", "4", "2", "4", "2"],

        "GMajor":   ["3", "0", "0", "0", "2", "3"],
        "GMinor":   ["3", "3", "3", "5", "5", "3"],
        "G7":       ["1", "0", "0", "0", "2", "3"],
        "G5":       ["x", "x", "0", "0", "x", "x"],
        "Gdim":     ["x", "x", "3", "5", "4", "3"],
        "Gdim7":    ["x", "2", "0", "2", "1", "x"],
        "Gaug":     ["3", "0", "0", "1", "2", "3"],
        "Gsus2":    ["5", "8", "7", "5", "x", "x"],
        "Gsus4":    ["3", "3", "5", "5", "5", "3"],
        "Gmaj7":    ["2", "0", "0", "0", "2", "x"],
        "Gm7":      ["3", "3", "3", "3", "5", "3"],
        "G7sus4":   ["3", "3", "5", "3", "5", "3"],

        "G#Major":   ["4", "1", "1", "1", "x", "x"],
        "G#Minor":   ["4", "4", "4", "6", "6", "4"],
        "G#7":       ["2", "1", "1", "1", "x", "x"],
        "G#5":       ["x", "x", "1", "1", "x", "x"],
        "G#dim":     ["x", "x", "4", "6", "5", "4"],
        "G#dim7":    ["x", "3", "1", "3", "2", "x"],
        "G#aug":     ["0", "1", "1", "2", "x", "x"],
        "G#sus2":    ["6", "9", "8", "6", "x", "x"],
        "G#sus4":    ["4", "2", "1", "1", "x", "x"],
        "G#maj7":    ["3", "1", "1", "1", "3", "x"],
        "G#m7":      ["2", "0", "1", "1", "x", "x"],
        "G#7sus4":   ["4", "4", "6", "4", "6", "4"],
};

function enterChords(chordName) {
    let chordTab = chordTabs[chordName];

    Array.from(document.getElementsByClassName("selected")).forEach((noteBox) => {
        let lastID = getLastId(noteBox.id);
        let firstID = getFirstId(noteBox.id);
        let stringIDs = getStringsIDs(parseInt(noteBox.id), firstID, lastID);
        let ind=0;
        stringIDs.forEach((noteID) => {
            document.getElementById(noteID.toString()).innerHTML = chordTab[ind];
            selectNote(document.getElementById(noteID.toString()));
            ind +=1;
        });
    });

}


let chords = Array.from(document.getElementsByClassName("chord"));
chords.forEach((chord) => {

    chord.addEventListener("click", (evt)=>{
        let prevSelectedChord = document.getElementById("selected-chord");
        if (prevSelectedChord) {
            if (prevSelectedChord !== chord.innerHTML) {
                prevSelectedChord.style.backgroundColor = "white";
                prevSelectedChord.id = "deselected-chord";
            }
        }
        chord.style.backgroundColor = "crimson";
        chord.id = "selected-chord";

    });

});

let chordTypes = Array.from(document.getElementsByClassName("chord-type"));
chordTypes.forEach((chordType) => {

    chordType.addEventListener("click", (evt)=>{

        let prevSelectedChordType = document.getElementById("selected-chordType");
        if (prevSelectedChordType) {
            if (prevSelectedChordType !== chordType.innerHTML) {
                prevSelectedChordType.style.backgroundColor = "white";
                prevSelectedChordType.id = "deselected-chordType";
            }
        }

        chordType.style.backgroundColor = "crimson";
        chordType.id = "selected-chordType";
    });

});

function popupWarning(msg) {
    let chordBar = document.getElementById("chord-bar");
    let warningMsg = createAddElement("p", "warning-msg", true, chordBar,
                     msg);

    let myInterval = setInterval(() => {
        if (warningMsg.style.opacity==="1") {
            warningMsg.style.opacity = "0.6";
        }
        else {
            warningMsg.style.opacity = "1";
        }
    }, 500);

    setTimeout(() => {
        clearInterval(myInterval);
        chordBar.removeChild(warningMsg);
    }, 3000);
}

let addChordButton = document.getElementById("addChordButton");
addChordButton.addEventListener("click", (evt) => {
    let selectedChord = document.getElementById("selected-chord");
    let selectedChordType = document.getElementById("selected-chordType");

    if (selectedChord && selectedChordType) {
        if (document.getElementsByClassName("selected").length > 0) {
            console.log("Entered Chord Name: ", selectedChord.innerHTML +selectedChordType.innerHTML);
            enterChords(selectedChord.innerHTML +selectedChordType.innerHTML);
        }
        else {
            popupWarning("Please select the notebox where you want to enter the chord");
        }

    }
    else {
        popupWarning("Please select the chord that you want to enter");
    }


});


// UPDATE WIDTH OF PROGRESS AND THUMB TO BE RESPONSIVE

closebtn.addEventListener("click", (evt)=> {
    let tabContainer = document.getElementById("tab-container");
    tabContainer.style.marginBottom = "50px";
    let chordBar = document.getElementById("chord-bar");
    chordBar.style.height = "0%";
    chordBar.style.minHeight = "0px";
    Array.from(document.getElementsByClassName("chord")).forEach((chord) => {
        chord.style.opacity = "0";
    });
    closebtn.style.opacity = "0";
})


let chordToolBarButton = document.getElementById("chordToolbarButton");
chordToolBarButton.addEventListener("click", (evt)=>{openChordToolbar();});

let playTabsButton = document.getElementById("playToolbarButton");
function play_or_pause() {
    let imgel = playTabsButton.querySelector("img");
    if (imgel.id==="play") {
        playTabsButton.style.backgroundColor = "darkorange";
        imgel.src = "./imgs/misc/pause.png";
        imgel.id = "pause";
        console.log("Volume: ",audioPlayer.volume);
        intervalTimer = setInterval(setTimer, 1000);
        intervalFastTimer = setInterval(setFastTimer, 10);
        intervalKeepTrack = setInterval(setTracker, 50);
        audioPlayer.play();
    }
    else {
        playTabsButton.style.backgroundColor = "white";
        imgel.src = "./imgs/misc/play.png";
        imgel.id = "play";
        audioPlayer.pause();
        clearInterval(intervalTimer);
        clearInterval(intervalFastTimer);
        clearInterval(intervalKeepTrack);
    }
}
playTabsButton.addEventListener("click", (evt) => {
    play_or_pause();
});
playTabsButton.addEventListener("mouseenter", (evt) => {
    let imgel = playTabsButton.querySelector("img");
    if (imgel.id==="play") {
        playTabsButton.style.backgroundColor = "darkorange";
    }
});
playTabsButton.addEventListener("mouseleave", (evt) => {
    let imgel = playTabsButton.querySelector("img");
    if (imgel.id==="play") {
        playTabsButton.style.backgroundColor = "white";
    }
});

let toolbarButtons = Array.from(document.getElementsByClassName
("toolbar-button"));

let myTimeout = "";
toolbarButtons.forEach((toolbarButton) => {
    toolbarButton.addEventListener("mouseenter", (evt) => {
        myTimeout = setTimeout(()=>{
            document.getElementById(toolbarButton.id.split("ToolbarButton")
            [0]+"Tooltip").style.visibility = "visible";
        }, 500);
    });
    toolbarButton.addEventListener("mouseleave", (evt) => {
        clearTimeout(myTimeout);
        document.getElementById(toolbarButton.id.split("ToolbarButton")
        [0]+"Tooltip").style.visibility = "hidden";
    });
});

let chordToolBarButtonImg = document.getElementById("chord");
chordToolBarButton.addEventListener
("mouseover", (evt)=>{chordToolBarButtonImg.src="./imgs/misc/add-note-orange.png";
});
chordToolBarButton.addEventListener
("mouseleave", (evt)=>{chordToolBarButtonImg.src="./imgs/misc/add-note.png";
});

let deleteToolbarButton = document.getElementById("deleteToolbarButton");
deleteToolbarButton.addEventListener("click", (evt)=>{
    if (Array.from(document.getElementsByClassName("selected")).length>0) {
        updateNotes("-");
    }
    else {
        deleteAllNotes();
    }
});

// Deactivation of Arrow keys for browser scrolling
var arrow_keys_handler = function(e) {
    switch(e.code){
        case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
        e.preventDefault(); break;
        default: break;
    }
};
window.addEventListener("keydown", arrow_keys_handler, false);


let apCurrentTime = document.getElementById("currentTime");
let apDuration = document.getElementById("duration");
apDuration.innerHTML = ((audioPlayer.duration)/100).toFixed(2);

let customSlider = document.getElementById("customSlider");
let thumb = document.getElementById("thumb");
let progress = document.getElementById("progress");
dragThumb(thumb);

function calculateTime(sliderVal) {
    let time = audioPlayer.duration*sliderVal/(document.getElementById
    ("customSlider").clientWidth - 21);
    return time.toFixed(2);
}

function calculateTVal(cTime) {
    let tval = (document.getElementById
                   ("customSlider").clientWidth - 21)*cTime/audioPlayer
                   .duration;
    return Math.floor(tval);
}

function getHTMLcTime(cT) {
    return (cT/100).toFixed(2);
}

customSlider.addEventListener("mousedown", (evt)=>{
    evt = evt || window.event;
    evt.preventDefault();
    let newValue = evt.clientX-customSlider.offsetLeft
    thumb.style.left = (newValue)+"px";
    progress.style.width = (newValue+14)+"px";
    let cTime = calculateTime(newValue);
    apCurrentTime.innerHTML = getHTMLcTime(cTime);
    audioPlayer.currentTime = cTime;
    //TODO: Update currentNodeInd as well
})


let intervalTimer;
let intervalFastTimer;
let intervalKeepTrack;
function setTimer() {
    apCurrentTime.innerHTML = (parseFloat(apCurrentTime.innerHTML)+0.01)
    .toFixed(2);
}
function setFastTimer() {
    let newTVal = calculateTVal(audioPlayer.currentTime);
    thumb.style.left = (newTVal) + "px";
    progress.style.width = (newTVal+14) + "px";
}

let currentNodeInd = 0;
let trackedNoteIDs = ["282", "285", "287", "233", "235", "181", "127", "129",
                      "188", "190", "191", "310", "312", "314", "260", "262",
                      "264", "210", "212", "270", "272", "218", "220"];
let notePlaces = [
[0.27, 0.55], [0.55, 0.8], [0.8, 1.15], [1.3, 1.55], [1.55, 1.8],
[1.82, 2.1], [2.1, 2.4], [2.4, 2.8], [3.1, 3.5], [3.65, 3.9], [3.9, 4.2],
[4.4, 4.7], [4.7, 4.9], [5.0, 5.2], [5.45, 5.75], [5.75, 6.0], [6.0, 6.2],
[6.22, 6.5], [6.5, 7], [7.0, 7.2], [7.2, 7.52], [7.52, 7.77], [7.77, 8.3]];
let trackMode = 0;
function setTracker() {
    let ct = audioPlayer.currentTime;
    //console.log("Keeping track...", ct);
    if (ct > notePlaces[currentNodeInd][0] && ct <
    notePlaces[currentNodeInd][1]) {
        trackNote(document.getElementById(trackedNoteIDs[currentNodeInd]));
        trackMode = 1;
    }
    else {
        detrackNote(document.getElementById(trackedNoteIDs[currentNodeInd]));
        if (trackMode===1) {
            currentNodeInd++;
            if (currentNodeInd===trackedNoteIDs.length) {
                currentNodeInd = 0;
            }
        }
        trackMode=0;
    }
}

function dragThumb(tb) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    tb.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        let newpos3 = e.clientX;
        let newValue = tb.offsetLeft - pos1 - customSlider.offsetLeft;
        if (newValue<0) {
            newValue = 0;
        }
        else {
            if (newValue>document.getElementById
            ("customSlider").clientWidth-21) {
                newValue = document.getElementById
                ("customSlider").clientWidth-21;
            }
            else {
                pos3 = newpos3;
            }
        }
        tb.style.left = (newValue) + "px";
        progress.style.width = (newValue+14) + "px";
        let cTime = calculateTime(newValue);
        apCurrentTime.innerHTML = getHTMLcTime(cTime);
        audioPlayer.currentTime = cTime;
        //TODO: Update currentNoteInd as well
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

audioPlayer.addEventListener("ended", (evt) => {
    let imgel = playTabsButton.querySelector("img");
    playTabsButton.style.backgroundColor = "white";
    imgel.src = "./imgs/misc/play.png";
    imgel.id = "play";
    clearInterval(intervalTimer);
    clearInterval(intervalFastTimer);
    clearInterval(intervalKeepTrack);
    thumb.style.left = (0)+"px";
    progress.style.width = (14)+"px";
    apCurrentTime.innerHTML = "0.00";
    audioPlayer.currentTime = 0;
});

window.addEventListener("resize", (evt)=>{
    setFastTimer();
})


let volumeToolbarButton = document.getElementById("volumeToolbarButton");
let volumeSlider = document.getElementById("volumeSlider");
volumeToolbarButton.addEventListener("click", (evt) => {
    let vol = document.getElementById("volume");
    let type = vol.src.split("/").pop();
    if (type==="volume-on.png") {
        //vol.src = "./imgs/misc/volume-off.png";
    }
    else {
        //vol.src = "./imgs/misc/volume-on.png";
    }
});
volumeToolbarButton.addEventListener("mouseenter", (evt) => {
    volumeToolbarButton.style.backgroundColor = "white";
    volumeSlider.style.display = "block";
    volumeToolbarButton.style.height = "70px";
    dragVolume(volumeToolbarButton, volumeSlider);
});

let isMouseOn = 0;
window.addEventListener("mousedown", (evt)=>{
    isMouseOn = 1;
});
window.addEventListener("mouseup", (evt)=>{
    isMouseOn = 0;
});

volumeToolbarButton.addEventListener("mouseleave", (evt) => {
    if (isMouseOn===0) {
        volumeSlider.style.display = "none";
        volumeToolbarButton.style.height = "45px";
    }
});


function dragVolume(vs, vslider) {
    vs.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        let newVal = 55-(e.clientY-107);
        let heightVal = Math.floor(80*newVal/55)
        console.log(heightVal);
        if (heightVal<5) {
            vslider.style.height = "0px";
            vslider.style.top = "80px";
            audioPlayer.volume = 0;
            document.getElementById("volume").src = "./imgs/misc/volume-off.png";
        }
        else {
            if (heightVal<70 && heightVal>10) {
                vslider.style.height = (heightVal) + "px";
                vslider.style.top = (80-heightVal) + "px";
                audioPlayer.volume = (heightVal)/80;
                console.log("Volume:",audioPlayer.volume);
                vslider.style.borderRadius = "0px";
                vslider.style.borderBottomLeftRadius = "10px";
                vslider.style.borderBottomRightRadius = "10px";
                document.getElementById("volume").src = "./imgs/misc/volume-on.png";
            }
            else {
                if (heightVal>75) {
                    vslider.style.height = "80px";
                    vslider.style.top = "0px";
                    audioPlayer.volume = 1;
                    vslider.style.borderRadius = "10px";
                    document.getElementById("volume").src = "./imgs/misc/volume-on.png";
                }
            }
        }


    }

    function closeDragElement() {
        volumeSlider.style.display = "none";
        volumeToolbarButton.style.height = "45px";
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
