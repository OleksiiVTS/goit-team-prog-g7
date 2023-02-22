window.addEventListener('scroll',function(){
    const scroll = document.querySelector('.button-up');
    scroll.classList.toggle("button-up-show", window.scrollY>300)
})
    
// Функція, що прокручує сторінку до верхньої частини
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const scrollToTopBtn=document.qwerySelector("#scrollToTopBtn");
// Додаємо обробник події на кнопку для підняття вгору
scrollToTopBtn.addEventListener("click", scrollToTop);
    

window.addEventListener('scroll',function(){
    const scroll = document.querySelector('.arrow-up');
    scroll.classList.toggle("button-up-show", window.scrollY>300)
  })