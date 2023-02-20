
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
        let totalWidth = 0;
        let gaps = { 374: 20, 662: 34, 875: 87 };

        // масив розміру картинок {0:270, 1:162, ....}
        arr = {};

        // 
        let aImageSize = {162 : 34, 270 : 34, 274 : 20};
        let gap = 20;
        gap = gaps[lenSprite] ? gaps[lenSprite] : gap; 

        images.forEach((element, key) => {

            // зміна розміру картинки під слайдер 
            for ( let item in aImageSize ) {
                if ((element.clientWidth <= item) && (aImageSize.item == gap)) {
                    element.width = item + 'px';
                    element.heidht = sliderLine.offsetHeight + 'px';
                }
            }

            arr[key] = element.width + gap; // element.clientWidth;
            
            totalWidth += arr[key];
         })

        width = arr[count];
        sliderLine.style.width = totalWidth + 'px';
        
        rollSlider();
    }

    window.addEventListener('resize', init);
    init();

    // setInterval(() => { keyNext.click() }, 3000);


    keyNext.addEventListener('click', () => {
        count++;
        if (count >= images.length) {
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
        let currWidth = 0;

        for (let item in arr) {
            if (item >= count) break;
            currWidth += arr[item];
        }

        sliderLine.style.transform = 'translate(-' + currWidth + 'px)';
        // sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}

doorSlider();