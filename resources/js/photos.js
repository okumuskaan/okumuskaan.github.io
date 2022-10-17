let shownPhoto = document.getElementById("shown-photo");
let shownPhotoTitle = document.getElementById("photo-title");
let toolbar = document.getElementById("toolbar")
let photos = toolbar.getElementsByClassName("photos");
let hide_showButton = document.getElementById("button-container");
let hide_showButton_icon = hide_showButton.getElementsByClassName("open-close-toolbar")[0];
let arrows = [toolbar.getElementsByClassName("arrows left")[0],
              toolbar.getElementsByClassName("arrows right")[0]];

let shownPhotoInfoContainer = document.getElementById("shown-photo-info-container");
let shownPhotoInfoImg = document.getElementById("info-img");

const photo_names = ["prague", "beyoglu", "stopwar", "underground", "swanlake"];
const photo_titles = ["Prague Castle", "Beyoglu'nda Insaat Calismasi",
                      "Stop War!", "Yeralti", "Swan Lake in Lausanne"];
const photo_dates = ["2019", "2019", "2019", "2019", "2021"];
const photo_places = ["Prague, Czechia", "Istanbul, Turkey", "Berlin, Germany",
                      "Ankara, Turkey", "Lausanne, Switzerland"];
let photo_infos = {}
for (i=0; i<photo_names.length; i++) {
    photo_infos[photo_names[i]] = {
        "title": photo_titles[i],
        "date": photo_dates[i],
        "place": photo_places[i]
    };
}

let photos_data = {};

photo_names.forEach((name) => {
    let box = document.getElementById(name);
    photos_data[name] = {
        "html-img": box,
        "src": box.src,
    };
});
let chosen_photo_name = ["prague"];

function on_click_photo(evt) {
    shownPhoto.src = photos_data[evt.target.id]["src"];
    photos_data[chosen_photo_name]["html-img"].setAttribute("class", "photos not-chosen");
    chosen_photo_name = evt.target.id;
    photos_data[chosen_photo_name]["html-img"].setAttribute("class", "photos chosen-down");
    shownPhotoTitle.innerHTML = photo_infos[chosen_photo_name]["title"];
}

let ind_open_close = 0;
updated_params = {
    0: {
        "toolbar-height": "0px",
        "img-height": "0px",
        "chosen-img-height": "0px",
        "arrow-height": "0px",
        "rotate-openclose": "rotate(90deg)",
        "margin-top": "30px"
    },
    1: {
        "toolbar-height": "140px",
        "img-height": "100px",
        "chosen-img-height": "120px",
        "arrow-height": "50px",
        "rotate-openclose": "rotate(-90deg)",
        "margin-top": "0px"
    }
}
function on_click_show_hide_button() {
    let params = updated_params[ind_open_close];
    toolbar.style.height = params["toolbar-height"];
    chosen_photo_name = toolbar.getElementsByClassName("photos chosen-down")[0].id;
    console.log("Chosen Photo name: ", chosen_photo_name);

    // Update Height info for the class not individual elements!!!
    photo_names.forEach((name) => {
        console.log(photos_data[name]["html-img"].classList);
        photos_data[name]["html-img"].style.height = params["img-height"];
    });
    arrows.forEach((arrow) => {
        arrow.style.height = params["arrow-height"];
    });
    hide_showButton.style.marginTop = params["margin-top"];
    hide_showButton.style.marginBottom = params["margin-bottom"];
    hide_showButton_icon.style.transform = params["rotate-openclose"];
    ind_open_close = (ind_open_close+1)%2;
}

function on_mouseover_show_info() {
    shownPhotoInfoImg.src = "./resources/imgs/my_photos/info-filled.png";
    shownPhotoInfoContainer.style.cursor = "pointer";
    shownPhotoInfoImg.style.opacity = "1";
}
function on_mouseout_show_info() {
    shownPhotoInfoImg.src = "./resources/imgs/my_photos/info.png";
    shownPhotoInfoImg.style.opacity = "0.7";
}
function on_click_show_info() {
    console.log("Clicked show info!")
}

photo_names.forEach((name) => {
    photos_data[name]["html-img"].addEventListener("click", on_click_photo);
});
hide_showButton.addEventListener("click", on_click_show_hide_button);
shownPhotoInfoContainer.addEventListener("mouseover", on_mouseover_show_info);
shownPhotoInfoContainer.addEventListener("mouseout", on_mouseout_show_info);
shownPhotoInfoContainer.addEventListener("click", on_click_show_info);
