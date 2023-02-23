// sliderObj = {
//     selectorSlider    : '.door-slider',
//     selectorImage     : '.door-img',
//     selectorSliderLine: '.door-slider-list',
//     selectorKeyNext   : '.door-btn-next',
//     selectorKeyPrev   : '.door-btn-prev'
// }
function doorSlider(obj) {
    let images = document.querySelectorAll(obj.selectorImage);
    console.log(images);

    let sliderLine = document.querySelector(obj.selectorSliderLine);
    let keyNext = document.querySelector(obj.selectorKeyNext);
    let keyPrev = document.querySelector(obj.selectorKeyPrev);
    let count = 0;
    let width;
    let arr = {};


    function init(selectorSlider) {
        // console.log('resize');
        console.log(selectorSlider);
        let lenSprite = document.querySelector(selectorSlider).offsetWidth;
        console.log(lenSprite);

        let totalWidth = 0;
        let gaps = { 374: 20, 662: 34, 875: 87, 930: 34, 1143: 86 };
        // масив розміру картинок {0:270, 1:162, ....}
        arr = {};
        // 
        let aImageSize = { 162: 34, 270: 34, 274: 20 };
        let gap = 20;
        gap = gaps[lenSprite] ? gaps[lenSprite] : gap;

        if (obj.reverse === true) {
            for (let i = images.length-1, j = 0; i >= 0; i--, j++) {
                arr[j] = images[i].clientWidth + gap;
                totalWidth += arr[j];
            }
        }
        else {
                images.forEach((element, key) => {
                    // зміна розміру картинки під слайдер
                    // for ( let item in aImageSize ) {
                    //     if ((element.clientWidth <= item) && (aImageSize.item == gap)) {
                    //         element.width = item + 'px';
                    //         element.heidht = sliderLine.offsetHeight + 'px';
                    //     }
                    // }
                    // arr[key] = element.width + gap;
                    arr[key] = element.clientWidth + gap;
        
                    totalWidth += arr[key];
                })
        }

        width = arr[count];
        sliderLine.style.width = totalWidth + 'px';
    
        rollSlider();
    }
    window.addEventListener('resize', init(obj.selectorSlider));
    init(obj.selectorSlider);
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
        if (count < 0) {
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
    
// slider для D-o-o-r
const sliderObj = {
    selectorSlider:     '.door-slider',
    selectorImage:      '.door-img',
    selectorSliderLine: '.door-slider-list',
    selectorKeyNext:    '.door-btn-next',
    selectorKeyPrev:    '.door-btn-prev',
    reverse:            false
}
doorSlider(sliderObj);

// Для 2го слайдеру.
// Розкоментувати та прописати свої селектори (класи)
const sliderObj2 = {
    selectorSlider:     '.hotel-slider-max',       // div слайдера
    selectorImage:      '.hotel-img-max',    // всі картинки одного класу
    selectorSliderLine: '.service-img-list',          // div чи ul які огортають всі картинки
    selectorKeyNext:    '.icon-right',           // кнопка, картинка з стрілкою ->
    selectorKeyPrev: '.icon-left',
    reverse:            true             // кнопка, картинка з стрілкою <-
}
doorSlider(sliderObj2);


