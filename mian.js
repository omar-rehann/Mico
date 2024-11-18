let menuel = document.querySelector(".toogle");
let alllinks = document.querySelector(".top");
let closeicon = document.querySelector(".close");
let section = document.querySelector(".continer");
let boxel = document.querySelectorAll(" .continer .box");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
const allbox = document.querySelectorAll('.boxx');
const section_two = document.querySelector('.slides');
const beforeButton = document.querySelector('.before');
const afterButton = document.querySelector('.after');
let countt = 0;
let index = 0;
let time;
let count = 0;
let timee;
let up = document.querySelector(".up");
menuel.onclick = function() {
    alllinks.classList.toggle("active")
}
closeicon.onclick = function() {
    alllinks.classList.remove("active")


}
right.onclick = function() {
    index++;
    clearTimeout(time);
    update();
}

left.onclick = function() {
    index--;
    clearTimeout(time);
    update();
}

function update() {
    if (index >= boxel.length) {
        index = 1;
    } else if (index < 1) {
        index = boxel.length;
    }
    section.style.transform = `translateX(${(index - 1) * -100}%)`;
    time = setTimeout(() => {
        index++;
        update();
    }, 2000);
}

update();
//-------------------------------------------
afterButton.onclick = function() {
    countt++;
    clearTimeout(timee);
    updatee();
}

beforeButton.onclick = function() {
    countt--;
    clearTimeout(timee);
    updatee();
}

function updatee() {
    if (countt > allbox.length) {
        countt = 1;
    } else if (countt < 1) {
        countt = allbox.length;
    }
    section_two.style.transform = `translateX(-${(countt - 1) *100}%)`;
    timee = setTimeout(() => {
        countt++;
        updatee();
    }, 2000);
}

updatee();
window.onscroll = function() {
    // console.log(this.scrollY)
    if (this.scrollY >= 300) {
        up.classList.add("active");
    } else {
        up.classList.remove("active");

    }
}
up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}