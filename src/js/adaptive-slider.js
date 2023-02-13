
function doorSlider() {
    let images = document.querySelectorAll('.door-img');
    let sliderLine = document.querySelector('.door-slider-list');
    let keyNext = document.querySelector('.door-btn-next');
    let keyPrev = document.querySelector('.door-btn-prev');

    let count = 0;
    let width;

    function init() {
        console.log('resize');
        width = document.querySelector('.door-slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach( item => {
            item.style.width = width + 'px';
            item.style.heaght = 'auto';
        })
        console.log(width);
        rollSlider();
    }

    window.addEventListener('resize', init);
    init();

    keyNext.addEventListener('click', () => {
        count++;
        if ( count >= images.length) {
            count = 0;
        }
    
        rollSlider();
    });

    keyPrev.addEventListener('click', () => {
        count--;
        if ( count < 0 ) {
            count = images.length - 1;
        }
    
        rollSlider();
    });

    function rollSlider() {
        sliderLine.style.transform = 'translateX(-' + count * width + 'px)';
    }
}