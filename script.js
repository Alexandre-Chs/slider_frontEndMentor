let left = document.querySelector('.left-arrow');
let right = document.querySelector('.right-arrow');
let img = document.querySelector('.img__tanya');
let slide = new Array ("images/image-tanya.jpg", "images/image-john.jpg");
let count = 0;
let contentTanya = document.querySelector('.content_Tanya');
let contentJohn = document.querySelector('.content_John');
let nameTanya = document.querySelector(".card__name-job_Tanya");
let nameJohn = document.querySelector(".card__name-job_John");

function nextSlide() {

    if (count < slide.length -1) {
        count ++
        contentTanya.style.display = "none";
        nameTanya.style.display = "none";
        contentJohn.style.display = "block";
        nameJohn.style.display = "flex";

    } else {
        count = 0;
        contentTanya.style.display = "block";
        nameTanya.style.display = "flex";
        contentJohn.style.display = "none";
        nameJohn.style.display = "none";

    }
    img.src = slide[count];
}



function prevSlide() {
    if (count < slide.length -1) {
        count ++
        contentTanya.style.display = "none";
        nameTanya.style.display = "none";
        contentJohn.style.display = "block";
        nameJohn.style.display = "flex";
    } else {
        count = 0;
        contentTanya.style.display = "block";
        nameTanya.style.display = "flex";
        contentJohn.style.display = "none";
        nameJohn.style.display = "none";
    }
    img.src = slide[count];
}


right.addEventListener('click', nextSlide);
left.addEventListener('click', prevSlide);