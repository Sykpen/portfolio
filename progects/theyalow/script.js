let mobile = document.querySelector('.mobile_button');
let mobileframe = document.querySelector('.media_simulator');
let main = document.querySelector('main');
let body = document.querySelector('body');

mobile.addEventListener('click', () =>{
    if (mobile.textContent === "Mobile"){
        let mobileiframe = document.createElement('iframe');
        body.prepend(mobileiframe);
        mobileiframe.append(main);
        mobileiframe.src = 'index.html'; 
        mobileiframe.style.width = '640px';
        mobileiframe.classList.add('media_simulator');
        mobile.textContent = ('Desktop');
    }
});


// document.querySelector('#iframe2').classList.toggle('change_width_rpr');
// const btnMobile = document.querySelector('.mobile');
//  mobile.textContent = (mobile.textContent === "Desktop") ? "Mobile" : "Desktop";