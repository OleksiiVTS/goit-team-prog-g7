import"./buttonup-362421b2.js";import"./modal-windows-7efbbaee.js";import"./modal-res-80b9f781.js";import"./sliders-ebd5b5d6.js";import"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";(function(l){typeof l.matches!="function"&&(l.matches=l.msMatchesSelector||l.mozMatchesSelector||l.webkitMatchesSelector||function(t){for(var e=this,o=(e.document||e.ownerDocument).querySelectorAll(t),r=0;o[r]&&o[r]!==e;)++r;return Boolean(o[r])}),typeof l.closest!="function"&&(l.closest=function(t){for(var e=this;e&&e.nodeType===1;){if(e.matches(t))return e;e=e.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var l=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),e=document.querySelectorAll(".js-modal-close");l.forEach(function(o){o.addEventListener("click",function(r){r.preventDefault();var n=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+n+'"]');c.classList.add("active"),t.classList.add("active")})}),e.forEach(function(o){o.addEventListener("click",function(r){var n=this.closest(".modal");n.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(o){var r=o.keyCode;r==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});$(function(t){let e=document.querySelectorAll(t.selectorImage),o=document.querySelector(t.selectorSliderLine),r=document.querySelector(t.selectorKeyNext),n=document.querySelector(t.selectorKeyPrev),c=0,i={};function m(s){let d=document.querySelector(s).offsetWidth,v=0,f={374:20,662:34,875:87};i={};let u=20;u=f[d]?f[d]:u,e.forEach((S,y)=>{i[y]=S.clientWidth+u,v+=i[y]}),i[c],o.style.width=v+"px",a()}window.addEventListener("resize",m(t.selectorSlider)),m(t.selectorSlider),r.addEventListener("click",()=>{c++,c>=e.length&&(c=0),a()}),n.addEventListener("click",()=>{c--,c<0&&(c=e.length-1),a()});function a(){let s=0;for(let d in i){if(d>=c)break;s+=i[d]}o.style.transform="translate(-"+s+"px)"}});let h={selectorSlider:".door-slider",selectorImage:".door-img",selectorSliderLine:".door-slider-list",selectorKeyNext:".door-btn-next",selectorKeyPrev:".door-btn-prev"};doorSlider(h);
