(()=>{var e={542:()=>{var e,t,o,n;e="acure-header-mobile__menu-item",t=document.querySelector("body"),o=document.querySelector(".acure-header-mobile__menu-button"),n=document.querySelectorAll("."+e),o.addEventListener("click",(function(){t.classList.toggle("acure-menu-opened")})),n.forEach((function(t){var o,n=Array.prototype.find.call(t.querySelectorAll(".acure-header-mobile__submenu"),(function(e){return e.parentNode===t}));Array.prototype.find.call(t.querySelectorAll(".acure-header-mobile__menu-link"),(function(e){return e.parentNode===t})).addEventListener("click",(function(){t.classList.toggle(e+"--opened");var r=t.classList.contains(e+"--opened");clearTimeout(o),r?(n.style.display="block",n.style.opacity=1,n.style.height=n.scrollHeight+"px",o=setTimeout((function(){n.style.height="auto"}),300)):(n.style.height=n.offsetHeight+"px",setTimeout((function(){n.style.opacity=0,n.style.height="0px"}),0),o=setTimeout((function(){n.style.display="none"}),300))}))})),function(){var e,t="acure-header-desktop__navigation-item",o="acure-header-desktop__navigation-submenu-item",n="acure-header-desktop__navigation-submenu-icon-item",r=document.querySelectorAll("."+t);document.querySelectorAll("."+o+", ."+n).forEach((function(r){var a=r.getAttribute("href");window.location.pathname.includes(a)&&((e=r.closest("."+t)).classList.add(t+"--active"),r.classList.contains(o)?r.classList.add(o+"--active"):r.classList.contains(n)&&r.classList.add(n+"--active"))})),e&&r.forEach((function(o){o.addEventListener("mouseenter",(function(){e.classList.remove(t+"--active")})),o.addEventListener("mouseleave",(function(){e.classList.add(t+"--active")}))}))}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(542)})()})();