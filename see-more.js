let seeMores = document.querySelectorAll(".see-more");
let viewLess_s = document.querySelectorAll(".view-less");


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Take the user to a different screen here.
    console.log("It's a phone!")

    seeMores.forEach(
        (el) => {
            if (el) {
                seeMoreIcon = el.parentElement.querySelector(".see-more-icon");
                seeMoreIcon.style.display = "none";
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
                viewLessIcon = el.parentElement.querySelector(".view-less-icon");
                viewLessIcon.style.display = "none";
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
}
else {
    console.log("Not a phone!")
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
                    viewLessIcon = el.parentElement.querySelector(".view-less-icon");
                    viewLessIcon.style.display = "inline";
                })
                el.addEventListener("mouseout", (evt) => {
                    viewLessIcon = el.parentElement.querySelector(".view-less-icon");
                    viewLessIcon.style.display = "none";
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

}


