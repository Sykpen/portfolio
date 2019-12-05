let mobile = document.querySelector('.mobile_button');

let mobileframe = document.querySelector('.frame');

// let main = document.querySelector('main');
let body = document.querySelector('body');
// let deleteblock = document.querySelector('.deletesection');
// let ultratest = document.querySelector('.ultramegagigatest');
let i = 0;
let textinbutton = ['Desktop','Mobile'];

mobile.addEventListener('click', () =>{
body.prepend(mobileframe);
mobileframe.classList.toggle('mobile_width');
if(i === 1){
    mobile.textContent = textinbutton[i];
    i = 0;
    return
}
mobile.textContent = textinbutton[i];
i ++;
});