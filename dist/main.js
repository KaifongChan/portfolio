(()=>{"use strict";let e=document.querySelector(".background-text");function t(){"Welcome."===e.textContent?e.textContent="Feel free to browse my projects.":e.textContent="Welcome."}setInterval(t,5e3);const n=t;window.addEventListener("scroll",(()=>{!function(){let e=document.querySelector(".projects-div"),t=document.querySelector(".project-header"),n=e.getBoundingClientRect();n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)?(t.classList.add("header-noblur"),t.classList.remove("header-blur")):(t.classList.add("header-blur"),t.classList.remove("header-noblur"));let o=document.querySelector(".about-div"),d=document.querySelector(".about-header"),r=o.getBoundingClientRect();r.top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)?(d.classList.add("header-noblur"),d.classList.remove("header-blur")):(d.classList.add("header-blur"),d.classList.remove("header-noblur"))}()})),function(){let e=document.querySelector(".nav-container");window.addEventListener("scroll",(function(){0==this.window.scrollY?(e.classList.add("at-top"),e.classList.remove("not-at-top")):(e.classList.remove("at-top"),e.classList.add("not-at-top"))}))}(),n()})();