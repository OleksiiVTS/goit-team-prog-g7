 
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.button-up');
    scroll.classList.toggle("button-up-show", window.scrollY>300)
})
    function scrollTopTop(){
      window.scrollTo({
        top:0,
      })
    }
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.arrow-up');
    scroll.classList.toggle("button-up-show", window.scrollY>300)
  })

    
  // (() => {
  //   const refs = {
  //     openModalBtn: document.querySelector("[data-modal-open]"),
  //     closeModalBtn: document.querySelector("[data-modal-close]"),
  //     modal: document.querySelector("[data-modal]"),
  //   };
  
  //   refs.openModalBtn.addEventListener("click", toggleModal);
  //   refs.closeModalBtn.addEventListener("click", toggleModal);
  
  //   function toggleModal() {
  //     refs.modal.classList.toggle("is-hidden");
  //   }
  // })();

  
   

//   $("#openmodal").on("change", function () {        
//     if($(this).val() === 'openmodaloption'){
//        $('#modal').modal('show');
//    }
// });