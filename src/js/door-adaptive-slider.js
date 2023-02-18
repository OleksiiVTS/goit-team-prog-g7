
function doorSlider() {
    let images = document.querySelectorAll('.door-img');
    let sliderLine = document.querySelector('.door-slider-list');
    let keyNext = document.querySelector('.door-btn-next');
    let keyPrev = document.querySelector('.door-btn-prev');

    let count = 0;
    let width;
    let arr = {};

    function init() {
        // console.log('resize');
        let lenSprite = document.querySelector('.door-slider').offsetWidth;
        console.log('lenSprite:', lenSprite);

        let totalWidth = 0;
        let gaps = { 374: 20, 662: 34, 875: 87 };
        arr = {};
        let aImageSize = {162 : 34, 270 : 34, 274 : 20};
        let gap = 20;
        gap = gaps[lenSprite] ? gaps[lenSprite] : gap; 
        
        console.log('gap:', gap);
        images.forEach((element, key) => {
            // зміна розміру картинки під слайдер 
            for ( let item in aImageSize ) {
                if ((element.clientWidth <= item) && (aImageSize.item == gap)) {
                    element.width = item + 'px';
                    element.heidht = sliderLine.offsetHeight + 'px';
                }

                console.log('e.width:', element.width);
            }

            arr[key] = element.width + gap;
            
            totalWidth += arr[key];
         })

        width = arr[count];
        console.log('arr', arr);
        console.log('width', width);

        sliderLine.style.width = totalWidth + 'px';
        console.log('sliderLine-0:', sliderLine.style.width);
        
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
        console.log('sliderLine-1:', sliderLine.style.width, arr[count]);

        let currWidth = 0;
        for (let item in arr) {
            if (item >= count) break;
            currWidth += arr[item];
        }
        console.log('currWidth:',  currWidth);
        sliderLine.style.transform = 'translate(-' + currWidth + 'px)';

        console.log('sliderLine-2:', sliderLine.style.width, arr[count]);
        // sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}

doorSlider();