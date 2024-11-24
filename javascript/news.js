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

let loadMore = document.querySelector('#load-more');
let currItem = 0;

loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll('body .news .card')];

    for (let i=currItem; i<currItem+4 && i<boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currItem += 4;

    if(currItem >= boxes.length){
        loadMore.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let boxes = [...document.querySelectorAll('body .news .card')];

    for (let i=0; i<8 && i<boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currItem = 8;
});