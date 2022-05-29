//getting refrence to the nav button
const nav= document.getElementById('nav-parent');
const toggleBtn = document.querySelector('.nav-toggle-btn');

toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('show-nav');
    // console.log('cliced')
})

// resizing the image

const image_size = document.querySelector('.slider-img');
const crousal_container = document.querySelector('.slider-box');

const resizeCarosel = ()=>{
    let test = image_size.offsetHeight+10 ;
    console.log(test);
    crousal_container.style.height = test+"px";
}


window.addEventListener("resize", resizeCarosel);
