/* empty css               */import m from"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();function y(){let l=document.querySelectorAll(".door-img"),r=document.querySelector(".door-slider-list"),d=document.querySelector(".door-btn-next"),s=document.querySelector(".door-btn-prev"),e=0,t={};function i(){let o=document.querySelector(".door-slider").offsetWidth,n=0,u={374:20,662:34,875:87};t={};let a=20;a=u[o]?u[o]:a,l.forEach((p,f)=>{t[f]=p.clientWidth+a,n+=t[f]}),t[e],r.style.width=n+"px",c()}window.addEventListener("resize",i),i(),d.addEventListener("click",()=>{e++,e>=l.length&&(e=0),c()}),s.addEventListener("click",()=>{e--,e<0&&(e=l.length-1),c()});function c(){let o=0;for(let n in t){if(n>=e)break;o+=t[n]}r.style.transform="translate(-"+o+"px)"}}y();new m(".swiper-maks",{direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".right-btn-swiper",prevEl:".left-btn-swiper"},spaceBetween:40,loop:!1,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1.4},1024:{slidesPerView:2}}});