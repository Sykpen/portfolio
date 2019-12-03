let mobile = document.querySelector('.mobile_button');
let mobileframe = document.querySelector('.media_simulator');
let main = document.querySelector('main');

1847
mobile.addEventListener('click', () =>{
    mobileframe.style.height = '1847px';
    main.style.display = 'none';
    console.log(main.style.height)
    
});


// document.querySelector('#iframe2').classList.toggle('change_width_rpr');
// const btnMobile = document.querySelector('.mobile');
// btnMobile.textContent = (btnMobile.textContent === "Desktop") ? "Mobile" : "Desktop";