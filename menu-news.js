let logoTitle = document.getElementById("logo-title");
let headerNav = document.getElementById("header-nav");
let headerNav2 = document.getElementById("header-nav-2");

let banner = document.getElementsByClassName("banner")[0];
let bannerImgSource = document.getElementById("banner-img-source")
let greetTitle = document.getElementById("greet-title");

let mobileNav = document.getElementById("mobile-nav");
let mobileMenuContainer = document.getElementById("mobile-menu-container");


function updateHeader() {
    if (window.innerWidth <  1100)//(logoTitle.clientWidth+headerNav.clientWidth*1.2))
    {
        headerNav.style.display = "none";
        headerNav2.style.display = "flex";
        banner.style.height = "275px";
        bannerImgSource.style.top = "242px";
        bannerImgSource.style.fontSize = "8px";
        bannerImgSource.style.height = "25px";
        bannerImgSource.style.width = "175px";

        greetTitle.style.padding = "50px 40px";
        greetTitle.style.width = "260px";
        greetTitle.style.fontSize = "16px";


    }
    else {
        if (mobileNav.style.display==="block") {
            mobileMenuContainer.classList.toggle("change");
            mobileNav.style.display = "none";
        }
        headerNav2.style.display = "none";
        headerNav.style.display = "flex";
        banner.style.height = "510px";
        bannerImgSource.style.top = "472px";
        bannerImgSource.style.fontSize = "10px";
        bannerImgSource.style.height = "28px";
        bannerImgSource.style.width = "200px";
        greetTitle.style.padding = "100px 50px";
        greetTitle.style.width = "400px";
        greetTitle.style.fontSize = "26px";

    }
}

updateHeader();
window.addEventListener("resize", (evt) => {
    updateHeader();
})

let mobileNavH5s = Array.from(mobileNav.querySelectorAll("h5"));




let mobileDropdowns = Array.from(document.getElementsByClassName("mobile-dropdown"));
console.log(mobileDropdowns);
let inds = {
    "Notes": 0,
    "Art Archive": 0,
};
let heightChanges = {
    "Notes": 0,
    "Art Archive": 210,
};
let artsInd = 0;
mobileDropdowns.forEach((el) => {
    el.style.fontWeight = "300";
    el.addEventListener("click", () => {
        let mobileSubdropdown = Array.from(el.parentNode.getElementsByClassName
        ("mobile-subdropdown"))[0];
        console.log(el.innerHTML);
        inds[el.innerHTML] = (inds[el.innerHTML]+1)%2;
        let intMobileNavHeight = parseInt(mobileNav.style.height.split("px")[0]);
        if (inds[el.innerHTML]%2 === 1) {
            el.style.fontWeight = "700";
            mobileSubdropdown.style.display = "block";
            setTimeout(() => {
                mobileNav.style.height = (intMobileNavHeight+heightChanges[el.innerHTML]) + "px";
            }, 10);
            setTimeout(() => {
                let subh5s = Array.from(mobileSubdropdown.querySelectorAll("h5"));
                subh5s.forEach((elem) => {
                    console.log("I'm heree...");
                    elem.style.opacity = "1";
                })
            }, 100);
        }
        else {
            el.style.fontWeight = "300";
            let subh5s = Array.from(mobileSubdropdown.querySelectorAll("h5"));
            subh5s.forEach((elem) => {
                console.log("I'm heree...")
                elem.style.opacity = "0";
            })
            mobileNav.style.height = (intMobileNavHeight-heightChanges[el.innerHTML]) + "px";
            mobileSubdropdown.style.display = "none";
        }

    });

    el.addEventListener("mouseover", () => {
        el.style.fontWeight = "700";
    });
    el.addEventListener("mouseout", () => {
        let mobileSubdropdown = Array.from(el.parentNode.getElementsByClassName
            ("mobile-subdropdown"))[0]
        if (mobileSubdropdown.style.display === "none") {
            el.style.fontWeight = "300";
        }
    })
})





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

        mobileDropdowns.forEach((el) => {
            let mobileSubdropdown = Array.from(el.parentNode.getElementsByClassName("mobile-subdropdown"))[0];
            inds[el.innerHTML] = (inds[el.innerHTML]+1)%2;
            let intMobileNavHeight = parseInt(mobileNav.style.height.split("px")[0]);
            el.style.fontWeight = "300";
            let subh5s = Array.from(mobileSubdropdown.querySelectorAll("h5"));
            subh5s.forEach((elem) => {
                console.log("I'm heree...")
                elem.style.opacity = "0";
            })
            mobileNav.style.height = (intMobileNavHeight-heightChanges[el.innerHTML]) + "px";
            mobileSubdropdown.style.display = "none";
        })

        inds["Notes"] = 0;
        inds["Art Archive"] = 0;

    }
    else {
        mobileNav.style.display = "block";
        setTimeout(() => {
            mobileNav.style.height = "260px";
        }, 10);
        setTimeout(() => {
            mobileNavH5s.forEach((el) => {
                el.style.opacity = "1";
            })
        }, 200);
    }
    ind = (ind+1)%2;
}