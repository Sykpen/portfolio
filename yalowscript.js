let mobile = document.querySelector('.mobile_button');

let mobileframe = document.querySelector('.asshole');

// let main = document.querySelector('main');
let body = document.querySelector('body');
// let deleteblock = document.querySelector('.deletesection');
// let ultratest = document.querySelector('.ultramegagigatest');

mobile.addEventListener('click', () =>{
body.prepend(mobileframe);
// mobileframe.style.width = '375px';
// mobileframe.allow="fullscreen";
mobile.textContent = ('Desktop');
mobileframe.classList.toggle('.mobile_width');
});