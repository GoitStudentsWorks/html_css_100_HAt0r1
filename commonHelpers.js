(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(c){c.preventDefault();const n=this.getAttribute("href").substring(1),e=document.getElementById(n);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})})})});(()=>{const r=document.querySelector(".js-menu-container"),o=document.querySelector(".mobile-open-button"),c=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".header-link"),e=()=>{const t=r.classList.contains("is-open");r.classList.toggle("is-open",!t);const s=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};n.forEach(t=>t.addEventListener("click",()=>{e()})),o.addEventListener("click",e),c.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(r.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
