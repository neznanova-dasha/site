const open_button = document.querySelector('.header__button');
const close_button = document.querySelector('.menu__button_cross');
const menu_block = document.querySelector('.header__menu');
const header = document.querySelector('.header');
var button = {
    active: false
};
function open(){ 
    menu_block.style.display="flex";
    header.style.position="fixed";
    header.style.height=100+"%";
    document.body.style.overflow="hidden";
}
function close(){
    menu_block.style.display = "none";
    document.body.style.overflow = "auto";
    header.style.height = "auto";
    setInterval(query, 100);
}
function query(){
    const mq = window.matchMedia("(max-width: 550px)");
    if (mq.matches) {
        header.style.position = "absolute";
    }
    else header.style.position = "fixed";
}
setInterval(() => window.matchMedia("(max-width: 450px)").matches ? document.querySelector('.promo-block__photo').setAttribute("src", "img/designer-photo-s.jpg") : document.querySelector('.promo-block__photo').setAttribute("src", "img/designer-photo.jpg"), 100)
open_button.addEventListener("click", open);
close_button.addEventListener("click", close);
//
// const en = document.querySelectorAll('.switch__en');
// const ru = document.querySelectorAll('.switch__ru');
// var state;
// en.onclick = () => state = "en";
// ru.onclick = () => state = "ru";
// switch(state){
//     case "en":
//         en.style.color = "#090909";
//         ru.style.color = "#828282";
//         break;
//     case "ru":
//         ru.style.color = "#090909";
//         en.style.color = "#828282";
//         break;
//     default:
//         en.style.color = "#090909";
//         ru.style.color = "#828282";
//         break;
// }
