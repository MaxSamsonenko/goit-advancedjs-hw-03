import{a as d,i as p}from"./assets/vendor-6dfc800f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();d.defaults.headers.common["x-api-key"]="live_gKDn3kA07EMhY9XYnx6LYVxXMiOOFfs26E6XTFhhaA4s3IwDwa9OExRibozNaEE3";async function m(){return(await d.get("https://api.thecatapi.com/v1/breeds")).data}async function f(e){return(await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data}const u=document.querySelector("body"),r=document.querySelector(".select"),i=document.querySelector(".loader"),l=document.querySelector(".cat-info");r.style.display="none";document.addEventListener("DOMContentLoaded",h);r.addEventListener("change",y);async function y(){const e=r.children.selectElement,o=e.options[e.selectedIndex].value;try{l.style.display="none",i.style.display="block";const s=await f(o);i.style.display="none",b(s)}catch(s){u.innerHTML="Ooops, something went wrong!... Check internet connection and refresh page and/or try again later",p.error({message:"Failed to load content",position:"topRight"}),console.log(`${s.message}`)}}async function h(){try{const e=await m();i.style.display="none",g(e),r.style.display="flex"}catch(e){u.innerHTML="Ooops, something went wrong!... Check internet connection and refresh page and/or try again later",p.error({message:"Failed to load content",position:"topRight"}),console.log(`${e.message}`)}}function g(e){const o=e.map(({id:s,name:a})=>`<option value="${s}">${a}</option>`).join("");r.innerHTML=`<select class="breed-select" id="selectElement">${o}</select>`}function b(e){l.style.display="flex";const o=`<img class="cat-img" src="${e[0].url}" alt="${e[0].breeds[0].name}"  />
    <div class="breed-info">
      <h1 class="cat-name">${e[0].breeds[0].name}</h1>
      <p class="description">${e[0].breeds[0].description}</p>
      <h2 class="temperament">Temperament:</h2>
      <p class="temp-descr">${e[0].breeds[0].temperament}</p>
    </div>
    `;return l.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
