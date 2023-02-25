// Слайдер
function doorSlider(obj) {
    let images = document.querySelectorAll(obj.selectorImage);
    // console.log(images);

    let sliderLine = document.querySelector(obj.selectorSliderLine);
    let keyNext = document.querySelector(obj.selectorKeyNext);
    let keyPrev = document.querySelector(obj.selectorKeyPrev);
    let count = 0;
    let totalLine = 0;
    let lenViewSprite = 0;
    let width;
    let arr = {};

    function init() {
        // console.log('resize');
        lenViewSprite = document.querySelector(obj.selectorSlider).offsetWidth;
        // console.log(lenViewSprite);

        totalLine = 0;
        let gaps = { 374: 20, 662: 34, 875: 87, 930: 34, 1143: 86 };
        arr = {};

        let gap = 20;
        gap = gaps[lenViewSprite] ? gaps[lenViewSprite] : gap;

        images.forEach((element, key) => {
            // считаем ширину каждой картинки + растояние между ними
            arr[key] = element.clientWidth + gap;
        
            totalLine += arr[key];
        })

        // console.log('arr', arr);
        // console.log('totalLine', totalLine);

        width = arr[count];
        sliderLine.style.width = totalLine + 'px';
    
        rollSlider();
    }

    window.addEventListener('resize', init);
    init();

    // изменяем счетчик картинки при нажатии клавиши Next
    keyNext.addEventListener('click', () => {
        count++;
        if (count >= images.length) {
            count = 0;
        }

        rollSlider();
    });

    // изменяем счетчик картинки при нажатии клавиши Prev
    keyPrev.addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = images.length - 1;
        }

        rollSlider();
    });

    // Прокручиваем строку слайдера на нужный интервал
    function rollSlider() {
        let currWidth = 0;
        
        // Перебираем массив с индекс_картинки : координата
        for (let item in arr) {
            if (item >= count) break;

            currWidth -= arr[item];
        }

        // console.log('totalLine', totalLine);
        // console.log('currWidth', currWidth);

        // Пересчет для реверсивного отображеня
        if (obj.reverse) {
            currWidth = -(totalLine - lenViewSprite + currWidth);
        }
        // console.log('currWidth', currWidth);

        sliderLine.style.transform = 'translate(' + currWidth + 'px)';
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
    selectorSlider:     '.hotel-slider-max',          // div слайдера
    selectorImage:      '.hotel-img-max',             // всі картинки одного класу
    selectorSliderLine: '.service-img-list',          // div чи ul які огортають всі картинки
    selectorKeyNext:    '.icon-right',                // кнопка, картинка з стрілкою ->
    selectorKeyPrev:    '.icon-left',                 // кнопка, картинка з стрілкою <-
    reverse:            true             
}
doorSlider(sliderObj2);


