var modal = document.getElementById("myModal");
var toolbar = document.getElementById("toolbar");

var imgs = Array.from(document.getElementsByClassName("photo-box"));
var imgBottoms = [];
const numberOfImgs = imgs.length;

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var arrowRight = document.getElementById("arrow-right");
var arrowLeft = document.getElementById("arrow-left");

function updateModalImg(srcElement, chosenImgBottom, mode="not-first") {
    modalImg.src = srcElement.src;
    captionText.innerHTML = srcElement.alt;
    if (mode!=="first") {
        let chosenElement = document.getElementsByClassName("chosen-img")[0];
        chosenElement.classList.remove("chosen-img");
    }
    chosenImgBottom.classList.add("chosen-img");
    modalImg.ind = chosenImgBottom.ind;
}

var ind=0;
// Where Images for Toolbar are added:
imgs.forEach((img) => {
    img.ind = ind;
    let imgBottom = document.createElement("img");
    imgBottom.classList.add("toolbar-img");
    imgBottom.src = img.src;
    imgBottom.alt = img.alt;
    imgBottom.ind = img.ind;
    imgBottoms.push(imgBottom);
    toolbar.appendChild(imgBottom);
    img.onclick = function() {
        modal.style.display = "block";
        resizeHandler()
        updateModalImg(this, imgBottom, mode="first");
    }
    imgBottom.onclick = function() {
        updateModalImg(this, this);
    }
    ind++;
})

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {

    modal.style.display = "none";
}

var toolbarButton = document.getElementById("toolbar-button");
var toolbarButtonImg = document.getElementById("toolbar-button-img");

let deg = 90;
ind = 0;
toolbarButton.onclick = function() {
    toolbar.style.display = (ind===0 ? "none" : "flex");
    deg += 180;
    toolbarButtonImg.style.transform = "rotate("+deg+"deg)";
    toolbarButton.style.marginTop = (ind===0 ? "0px" : "0px");
    modalImg.style.maxHeight = (ind===0 ? "70%" : "60%");
    ind = (ind+1)%2;
}

function nextPhoto() {
    let srcElement = imgs[modalImg.ind+1];
    let bottomElement = imgBottoms[modalImg.ind+1];
    updateModalImg(srcElement, bottomElement);
}
function prevPhoto() {
    let srcElement = imgs[modalImg.ind-1];
    let bottomElement = imgBottoms[modalImg.ind-1];
    updateModalImg(srcElement, bottomElement);
}
function pressedFunc(helper_func, arrowElement, checkVal, key=false) {
    if (modalImg.ind !== checkVal) {
        helper_func();
        if (key || modalImg.ind===checkVal) {
            arrowElement.style.opacity = 0.7;
            arrowElement.style.backgroundColor = "rgb(23,23,23)";
            arrowElement.style.cursor = "default";
        }
    }
}
function hoverFunc(arrowElement, checkVal) {
    if (modalImg.ind !== checkVal) {
        arrowElement.style.opacity = 1;
        arrowElement.style.backgroundColor = "#313233";
        arrowElement.style.cursor = "pointer";
    }
}
function outFunc(arrowElement, checkVal) {
    if (modalImg.ind !== checkVal) {
        arrowElement.style.opacity = 0.7;
        arrowElement.style.backgroundColor = "rgb(23,23,23)";
        arrowElement.style.cursor = "default";
    }
}

arrowRight.addEventListener("mouseover", (evt) => {

    hoverFunc(arrowRight, numberOfImgs-1);
})
arrowLeft.addEventListener("mouseover", (evt) => {

    hoverFunc(arrowLeft, 0);
})
arrowRight.addEventListener("mouseout", (evt) => {

    outFunc(arrowRight, numberOfImgs-1);
})
arrowLeft.addEventListener("mouseout", (evt) => {

    outFunc(arrowLeft, 0);
})
arrowRight.addEventListener("mouseup", (evt) => {

    pressedFunc(nextPhoto, arrowRight, numberOfImgs-1);
})
arrowLeft.addEventListener("mouseup", (evt) => {

    pressedFunc(prevPhoto, arrowLeft, 0);
})
document.addEventListener("keydown", (evt) => {
    const keyName = evt.key;
    if (keyName==="ArrowRight") {
        hoverFunc(arrowRight, numberOfImgs-1);
    }
    else if (keyName==="ArrowLeft") {
        hoverFunc(arrowLeft, 0);
    }

})
document.addEventListener("keyup", (evt) => {
    const keyName = evt.key;
    if (keyName==="ArrowRight") {
        pressedFunc(nextPhoto, arrowRight, numberOfImgs-1, true);
    }
    else if (keyName==="ArrowLeft") {
        pressedFunc(prevPhoto, arrowLeft, 0, true);
    }
    else if (keyName==="Escape") {
        span.click();
    }
})


let infoPhotoIcon = document.getElementById("info-photo-icon");
let infoBox = document.getElementById("info-box");

let infos = 0;

let infoInd = 0;
infoPhotoIcon.onmouseover = function() {
    if (infoInd===0) {
        infoPhotoIcon.src = "./resources/imgs/my_photos/info-filled.png";
        infoPhotoIcon.style.cursor = "pointer";
    }
}
infoPhotoIcon.onmouseout = function() {
    if (infoInd===0) {
        infoPhotoIcon.src = "./resources/imgs/my_photos/info.png";
        infoPhotoIcon.style.cursor = "default";
    }
}
infoClose = document.getElementById("info-close");
infoTitle = document.getElementById("info-title");
infoText = document.getElementById("info-text");
infoPhotoIcon.onclick = function() {
    if (infoInd===0) {
        infoPhotoIcon.src = "./resources/imgs/my_photos/info-filled.png";
        infoBox.style.width = "400px";
        infoTitle.style.display = "block";
        infoClose.style.display = "block";
        infoText.style.display = "block";
    } else {
        infoPhotoIcon.src = "./resources/imgs/my_photos/info.png";
        infoBox.style.width = "0%";
        infoTitle.style.display = "none";
        infoClose.style.display = "none";
        infoText.style.display = "none";
    }
    infoInd = (infoInd+1)%2;
}
infoClose.onclick = function() {
    infoPhotoIcon.src = "./resources/imgs/my_photos/info.png";
    infoBox.style.width = "0%";
    infoTitle.style.display = "none";
    infoClose.style.display = "none";
    infoText.style.display = "none";
    infoInd = 0;
}



toolbarImgs = Array.from(document.getElementsByClassName("toolbar-img"));
let indFirst = 0;
let indLength = toolbarImgs.length;
function toolbarLength() {
    let res = 0;
    for (i=indFirst; i<indFirst+indLength; i++) {
        res += toolbarImgs[i].clientWidth;
        res += 10;
    }
    res -= 10;
    return res;
}
function myPop(arr) {
    if (indLength>0) {
        arr[indLength-1].style.display = "none";
        indLength--;
    }
}
function myPush(arr) {
    console.log(indLength);
    if (indLength<7) {
        arr[indLength].style.display = "block";
        indLength++;
        console.log("pushed");
    }
}
function resizeHandler() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    //console.log(toolbar.clientWidth);

    if (w > 1100) {
        modalImg.style.height = "550px";
    }
    else {
        modalImg.style.height = "450px";
    }

    let toolbarWidth = toolbar.clientWidth;
    let toolbarImgsWidth = toolbarLength();

    console.log("w*0.7", w*0.7);
    console.log("a:", toolbarWidth);
    console.log("b:", toolbarImgsWidth);
    if (toolbarWidth!==0) {
        let notPopped = true;
        while ((toolbarImgsWidth > w*0.7)) {
            toolbarImgsWidth -= toolbarImgs[indFirst+indLength-1].clientWidth;
            myPop(toolbarImgs);
            notPopped = false;
        }
        if (notPopped) {
            while (true) {
                if (indLength===7) {
                    break;
                }
                toolbarImgsWidth += toolbarImgs[indFirst+indLength].clientWidth;
                if ((toolbarImgsWidth > w*0.7)) {
                    console.log("BROKEN");
                    break;
                }
                console.log("toolbarWidth:", toolbarWidth);
                myPush(toolbarImgs);
            }
        }
    }



}

resizeHandler()
window.addEventListener("resize", resizeHandler);

