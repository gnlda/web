let menu_lists = document.getElementsByClassName("menu_list");
let menu_arrow_container = document.getElementsByClassName("menu_arrow_container");

for (let i = 0; i < menu_lists.length; i++) {
    menu_lists[i].style.height = "32px";
}

for (let i = 0; i < menu_lists.length; i++) {
    if(i != 1)
    {
        menu_lists[i].addEventListener("click", (e) => {
            if(menu_lists[i].style.height == "32px") {
                menu_lists[i].style.height = "120px";
                menu_arrow_container[i].style.transform = "rotate(180deg)";
            } else {
                menu_lists[i].style.height = "32px";
                menu_arrow_container[i].style.transform = "rotate(360deg)";
            }
        });
    } else {
        menu_lists[i].addEventListener("click", (e) => {
            if(menu_lists[i].style.height == "32px") {
                menu_lists[i].style.height = "164px";
                menu_arrow_container[i].style.transform = "rotate(180deg)";
            } else {
                menu_lists[i].style.height = "32px";
                menu_arrow_container[i].style.transform = "rotate(360deg)";
            }
        });
    }
}

let connect_wallet_window = document.getElementById("connect_wallet_window");
let connect_btn = document.getElementById("connect_btn");
let body = document.getElementById("body");

connect_btn.addEventListener("click", (e) => {
    connect_wallet_window.style.opacity = "1";
    connect_wallet_window.style.zIndex = "1";
    body.style.filter = "blur(12px)";
});


let cross_img = document.getElementById("cross_img");
cross_img.addEventListener("click", (e) => {
    connect_wallet_window.style.opacity = "0";
    connect_wallet_window.style.zIndex = "-1";
    body.style.filter = "none";
});


let connect_wallet_choose_item = document.getElementsByClassName("connect_wallet_choose_item");
for(let i = 0; i < connect_wallet_choose_item.length; i++) {
    connect_wallet_choose_item[i].addEventListener("click", (e) => {
        for(let j = 0; j < connect_wallet_choose_item.length; j++) {
            connect_wallet_choose_item[j].style.border = "1px solid transparent";
        }
        connect_wallet_choose_item[i].style.border = "1px solid var(--pink-ci)";
    });
}


let connect_wallet_choose_item2 = document.getElementsByClassName("connect_wallet_choose_item2");
for(let i = 0; i < connect_wallet_choose_item2.length; i++) {
    connect_wallet_choose_item2[i].addEventListener("click", (e) => {
        for(let j = 0; j < connect_wallet_choose_item2.length; j++) {
            connect_wallet_choose_item2[j].style.background = "transparent";
        }
        connect_wallet_choose_item2[i].style.background = "var(--pink-ci)";
    });
}

const fdsaf =docxsca;

fdsaf