let logoTitle = document.getElementById("logo-title");
let headerNav = document.getElementById("header-nav");
let headerNav2 = document.getElementById("header-nav-2");

let mobileNav = document.getElementById("mobile-nav");
let mobileMenuContainer = document.getElementById("mobile-menu-container");


function updateHeader() {
    if (window.innerWidth <  1100)//(logoTitle.clientWidth+headerNav.clientWidth*1.2))
    {
        headerNav.style.display = "none";
        headerNav2.style.display = "flex";

    }
    else {
        if (mobileNav.style.display==="block") {
            mobileMenuContainer.classList.toggle("change");
            mobileNav.style.display = "none";
        }
        headerNav2.style.display = "none";
        headerNav.style.display = "flex";
    }
}

updateHeader();
window.addEventListener("resize", (evt) => {
    updateHeader();
})

let mobileNavH5s = Array.from(mobileNav.querySelectorAll("h5"))

let ind = 1;
function myFunction(x) {
    x.classList.toggle("change");
    if (ind%2==0) {
        mobileNavH5s.forEach((el) => {
            el.style.opacity = "0";
        })
        mobileNav.style.height = "0px";
        setTimeout(() => {
            mobileNav.style.display = "none";
        }, 300);
    }
    else {
        mobileNav.style.display = "block";
        setTimeout(() => {
            mobileNav.style.height = "220px";

        }, 10);
        setTimeout(() => {
            mobileNavH5s.forEach((el) => {
                el.style.opacity = "1";
            })
        }, 200);
    }
    ind = (ind+1)%2;
}
