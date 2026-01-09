let seeMores = document.querySelectorAll(".see-more");
let viewLess_s = document.querySelectorAll(".view-less");


seeMores.forEach(
    (el) => {
        if (el) {
            el.addEventListener("mouseover", (evt) => {
                seeMoreIcon = el.parentElement.querySelector(".see-more-icon");
                seeMoreIcon.style.display = "inline";
            })
            el.addEventListener("mouseout", (evt) => {
                seeMoreIcon = el.parentElement.querySelector(".see-more-icon");
                seeMoreIcon.style.display = "none";
            })
            el.addEventListener("click", (evt) => {
                extraContainer = el.parentElement.parentElement.parentElement.querySelector(".edu-container-row-extra");                
                el.style.display = "none";
                extraContainer.style.display = "block";
                viewLess = el.parentElement.parentElement.parentElement.querySelector(".view-less");
                viewLess.style.display = "inline";
            })
        }
    }  
)

viewLess_s.forEach(
    (el) => {
        if (el) {
            el.addEventListener("mouseover", (evt) => {
                seeMoreIcon = el.parentElement.querySelector(".view-less-icon");
                seeMoreIcon.style.display = "inline";
            })
            el.addEventListener("mouseout", (evt) => {
                seeMoreIcon = el.parentElement.querySelector(".view-less-icon");
                seeMoreIcon.style.display = "none";
            })
            el.addEventListener("click", (evt) => {
                extraContainer = el.parentElement.parentElement.parentElement.querySelector(".edu-container-row-extra");                
                el.parentElement.parentElement.parentElement.style.height = "";
                el.style.display = "none";
                extraContainer.style.display = "none";
                seeMore = el.parentElement.parentElement.parentElement.querySelector(".see-more");
                seeMore.style.display = "inline";
            })
        }
    }  
)