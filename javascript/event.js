document.addEventListener('DOMContentLoaded', () =>{
    let menubar = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    menubar.onclick = () =>{
        navbar.classList.toggle('active');
    
        if (navbar.classList.contains('active')) {
            menubar.src = '/asset/icon/close.png';
        } else {
            menubar.src = '/asset/icon/menu.png';
        }
    }
});

