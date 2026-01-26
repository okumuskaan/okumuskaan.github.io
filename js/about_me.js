let edu_names = ["kandou-box", "pycsou-box", "havelsan-box", "aselsan-box",
"msc-box",
"bsc-box"];

let edu_data = {};
edu_names.forEach((name) => {
    edu_data[name] = {
        "box": document.getElementById(name),
        "info-box": document.getElementById(name.split('-')[0]+"-info"),
        "ind-num": 0
    };
});

function addInfoElement(contentID, parent) {
    let element = document.createElement("div");
    element.classList.add("info-box");
    element.setAttribute("id", contentID);
    let content =
    element.appendChild(d)
    parent.appendChild(content);
}

function edu_box_handler(name) {
    let edu_box = edu_data[name]["box"];
    let edu_info_box = edu_data[name]["info-box"];
    let edu_ind_num = edu_data[name]["ind-num"];
    function show_arrow_right() {
        let arrow_right = edu_box.getElementsByClassName("arrow-right")[0];
        if (arrow_right !== undefined) {
            arrow_right.style.opacity = '1';
            edu_box.style.backgroundColor = 'black';
            edu_box.style.color = "seashell";
            edu_box.style.cursor = "pointer";
        }
    }
    function remove_arrow_right() {
        let arrow_right = edu_box.getElementsByClassName("arrow-right")[0];
        if (arrow_right !== undefined) {
            arrow_right.style.opacity = '0';
            if (edu_ind_num===0) {
                edu_box.style.backgroundColor = 'whitesmoke';
                edu_box.style.color = "black";
            }
        }
    }
    function open_info_box() {
        edu_ind_num++;
        edu_ind_num%=2;
        if (edu_ind_num===1) {
            edu_info_box.style.display = 'block';
            edu_box.getElementsByClassName("arrow-right")[0].style
            .transform = 'rotate(0deg)';
            edu_box.style.boxShadow = "none";
        } else {
            edu_info_box.style.display = 'none';
            //edu_info_box.style.height = '0px';
            edu_box.getElementsByClassName("arrow-right")[0].style
                    .transform = 'rotate(90deg)';
            edu_box.style.boxShadow = "0px 5px 10px rgba(0,0,0,0.5)";
        }
        edu_data[name]["ind-num"]=edu_ind_num;
    }
    edu_box.addEventListener('mouseover', show_arrow_right);
    edu_box.addEventListener('mouseleave', remove_arrow_right);
    edu_box.addEventListener("click", open_info_box);
}

edu_names.forEach(edu_box_handler)
