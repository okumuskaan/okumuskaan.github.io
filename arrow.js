let arrows = Array.from(document.getElementsByClassName("arrow"));

arrows.forEach((arrow) => {
    console.log(arrow);
    arrow.style.borderRadius = "10px";
    arrow.style.cursor = "pointer";
    arrow.addEventListener("mouseover", (evt) => {
        arrow.style.backgroundColor = "whitesmoke";
    });
    arrow.addEventListener("mouseout", (evt) => {
        arrow.style.backgroundColor = "white";
    });
    arrow.addEventListener("mousedown", (evt) => {
        arrow.style.opacity = "0.4";
    });
    arrow.addEventListener("mouseup", (evt) => {
        arrow.style.opacity = "1";
    });
})