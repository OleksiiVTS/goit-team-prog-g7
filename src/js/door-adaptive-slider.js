
function doorSlider() {
    let images = document.querySelectorAll('.door-img');
    let sliderLine = document.querySelector('.door-slider-list');
    let keyNext = document.querySelector('.door-btn-next');
    let keyPrev = document.querySelector('.door-btn-prev');

    let count = 0;
    let width;

    function init() {
        console.log('resize');
        let lenSprite = document.querySelector('.door-slider').offsetWidth;
        let totalWidth = 0;
        let gaps = { 384: 20, 662: 34, 875: 87 };
        let gap = 20;

        images.forEach(item => { 
            totalWidth += item.clientWidth;
            console.log(item.clientWidth);
        })
        console.log(gap);
        gap = gap[lenSprite] ? gap[lenSprite] : 20; 

        width = totalWidth / images.length + gap;
        sliderLine.style.width = totalWidth + gap * (images.length - 1) + 'px';

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
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}

doorSlider();