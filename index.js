const closeFace = document.querySelector('.close');
const openFace = document.querySelector('.open');

nop.addEventListener('click', () => {
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closeFace.classList.remove('active');
    }
});

yep.addEventListener('click', () => {
    if(closeFace.classList.contains('close')){
        closeFace.classList.add('active');
        openFace.classList.remove('active');
    }
});