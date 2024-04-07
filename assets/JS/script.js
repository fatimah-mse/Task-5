let nav= document.getElementById('to-top');

let nav_btn = document.getElementById('btn');

let nav_links = document.querySelector('.nav-links');

let nav_icons = document.querySelector('.nav-icons');

let img_slide = document.getElementById('img-slide');

let slider_icon_1 = document.getElementById('slider-icon-1');
let slider_icon_2 = document.getElementById('slider-icon-2');
let slider_icon_3 = document.getElementById('slider-icon-3');

let brand_1 = document.getElementById('brand-1');
let brand_2 = document.getElementById('brand-2');
let brand_3 = document.getElementById('brand-3');
let brand_4 = document.getElementById('brand-4');

let text = document.getElementById('text');
let map = document.getElementById('map');

window.onscroll = function () {
    window.scrollY > 50 ? nav.style.top = '0' : nav.style.top = 'initial';
}

function show () {
    if (nav_links.style.display == 'flex' & nav_icons.style.display == 'flex') {
        nav_links.style.display = 'none';
        nav_icons.style.display = 'none';
        nav_btn.style.border = 'none';
    }
    else {
        nav_links.style.display = 'flex';
        nav_icons.style.display = 'flex';
        nav_btn.style.border = '4px solid #59ab6e';
    }
}
function next () {
    if (img_slide.src.includes('banner_img_01.jpg')) {
        img_slide.src ='./assets/img/banner_img_02.jpg';
        slider_icon_2.style.color= '#59ab6e';
        slider_icon_1.style.color= '#59ab6ea2';
        slider_icon_3.style.color = '#59ab6ea2';
    }
    else if (img_slide.src.includes('banner_img_02.jpg')) {
        img_slide.src ='./assets/img/banner_img_03.jpg';
        slider_icon_3.style.color= '#59ab6e';
        slider_icon_1.style.color= '#59ab6ea2';
        slider_icon_2.style.color = '#59ab6ea2';
    }
    else {
        img_slide.src ='./assets/img/banner_img_01.jpg';
        slider_icon_1.style.color= '#59ab6e';
        slider_icon_2.style.color= '#59ab6ea2';
        slider_icon_3.style.color = '#59ab6ea2';
    }
}
function previous () {
    if (img_slide.src.includes('banner_img_03.jpg')) {
        img_slide.src ='./assets/img/banner_img_02.jpg';
        slider_icon_2.style.color= '#59ab6e';
        slider_icon_1.style.color= '#59ab6ea2';
        slider_icon_3.style.color = '#59ab6ea2';
    }
    else if (img_slide.src.includes('banner_img_02.jpg')) {
        img_slide.src ='./assets/img/banner_img_01.jpg';
        slider_icon_1.style.color= '#59ab6e';
        slider_icon_2.style.color= '#59ab6ea2';
        slider_icon_3.style.color = '#59ab6ea2';
    }
    else {
        img_slide.src ='./assets/img/banner_img_03.jpg';
        slider_icon_3.style.color= '#59ab6e';
        slider_icon_1.style.color= '#59ab6ea2';
        slider_icon_2.style.color = '#59ab6ea2';
    }
}
function changeImgRight () {
    if (brand_4.style.display == 'flex') {
        brand_1.style.display = 'flex';
        brand_2.style.display = 'none';
        brand_3.style.display = 'none';
        brand_4.style.display = 'none';
    }
    else if (brand_2.style.display == 'flex') {
        brand_1.style.display = 'none';
        brand_2.style.display = 'none';
        brand_3.style.display = 'flex';
        brand_4.style.display = 'none';
    }
    else if (brand_3.style.display == 'flex') {
        brand_1.style.display = 'none';
        brand_2.style.display = 'none';
        brand_3.style.display = 'none';
        brand_4.style.display = 'flex';
    }
    else {
        brand_1.style.display = 'none';
        brand_2.style.display = 'flex';
        brand_3.style.display = 'none';
        brand_4.style.display = 'none';
    }
}
function changeImgLeft () {
    if (brand_4.style.display == 'flex') {
        brand_1.style.display = 'none';
        brand_2.style.display = 'none';
        brand_3.style.display = 'flex';
        brand_4.style.display = 'none';
    }
    else if (brand_2.style.display == 'flex') {
        brand_1.style.display = 'flex';
        brand_2.style.display = 'none';
        brand_3.style.display = 'none';
        brand_4.style.display = 'none';
    }
    else if (brand_3.style.display == 'flex') {
        brand_1.style.display = 'none';
        brand_2.style.display = 'flex';
        brand_3.style.display = 'none';
        brand_4.style.display = 'none';
    }
    else {
        brand_1.style.display = 'none';
        brand_2.style.display = 'none';
        brand_3.style.display = 'none';
        brand_4.style.display = 'flex';
    }
}

function showmap() {
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11935.301159631941!2d35.92236473335379!3d35
    .35850965675029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523fe3b216d9809%3A0x5f2b01a0fb9029d1!2sAl%
    20Jarkas%20Neighborhood%2C%20Jableh%2C%20Syria!5e0!3m2!1sen!2s!4v1707920354699!5m2!1sen!2s`;
    text.style.display = 'none';
}