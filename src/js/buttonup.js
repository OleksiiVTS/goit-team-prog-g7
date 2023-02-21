 
window.addEventListener('scroll',function(){
    const scroll = document.querySelector('.button-up');
    scroll.classList.toggle("button-up-show", window.scrollY>300)
})
    function scrollTopTop(){
      window.scrollTo({
        top:0,
      })
    }
window.addEventListener('scroll',function(){
    const scroll = document.querySelector('.arrow-up');
    scroll.classList.toggle("button-up-show", window.scrollY>300)
  })