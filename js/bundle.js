(()=>{"use strict";(()=>{const e=document.querySelector("main"),t=document.querySelector("#error").content.querySelector(".error"),n=document.querySelector("#success").content.querySelector(".success"),o=document.querySelector(".map__pin--main"),r={x:570,y:375};window.util={initialPinCoords:r,getPinMainInitialCoords:function(){o.style.left=r.x+"px",o.style.top=r.y+"px"},getRandomNumber:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},getRandomArray:function(e){return e.slice(0,window.util.getRandomNumber(0,e.length))},getErrorMessage:function(n){const o=t.cloneNode(!0),r=o.querySelector("p"),i=o.querySelector(".error__button");r.textContent=n,e.insertAdjacentElement("afterbegin",o),i.addEventListener("click",(function(e){e.preventDefault(),window.map.deactivateMap(),o.remove()}))},getSuccessMessage:function(){const e=n.cloneNode(!0);document.body.insertAdjacentElement("afterbegin",e);const t=function(n){0!==n.button&&"Enter"!==n.key||e.remove(),document.removeEventListener("mousedown",t),document.removeEventListener("keydown",t)};document.addEventListener("mousedown",t),document.addEventListener("keydown",t)},getValidCoords:function(e,t,n){return(e=parseInt(e,10))>n?n:e<t?t:e}}})(),window.debounce=function(e){let t=null;return function(...n){t&&window.clearTimeout(t),t=window.setTimeout((function(){e(...n)}),500)}},(()=>{const e="https://21.javascript.pages.academy/keksobooking/data",t="https://21.javascript.pages.academy/keksobooking";let n=function(e,t,n,o){const r=new XMLHttpRequest;return r.responseType="json",r.addEventListener("load",(function(){let e="";switch(r.status){case 200:n(r.response);break;case 400:e="Неверный запрос";break;case 401:e="Пользователь не авторизован";break;case 404:e="Ничего не найдено";break;default:e="Cтатус ответа: "+r.status+" "+r.statusText}e&&(o=window.util.getErrorMessage(e))})),r.addEventListener("error",(function(){window.util.getErrorMessage("Произошла ошибка соединения")})),r.addEventListener("timeout",(function(){o("Запрос не успел выполниться за "+r.timeout+"мс")})),r.timeout=2e4,r.open(e,t),r};window.load={onLoad:function(t,o){n("GET",e,t,o).send()},upLoad:function(e,o,r){n("POST",t,o,r).send(e)}}})(),(()=>{const e=document.querySelector("#address");window.data={ARROW_HEIGHT:18,LIMITS:{X:{MIN:0,MAX:1200},Y:{MIN:130,MAX:630}},adAddress:function(){e.value=Math.round(window.map.mapPinMain.offsetLeft+window.map.mapPinMain.offsetWidth/2)+", "+Math.round(window.map.mapPinMain.offsetTop+window.map.mapPinMain.offsetHeight+window.data.ARROW_HEIGHT)}}})(),(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__pins"),n=t.querySelector(".map__pin--main");window.map={mapMain:e,mapPins:t,mapPinMain:n,renderPins:function(e){const n=document.createDocumentFragment(),o=function(t){t.preventDefault(),window.card.removeMapCard(),"Enter"!==t.key&&0!==t.button||!t.target.dataset.pinId||window.card.renderCard(e[t.target.dataset.pinId])};for(let r=0;r<e.length;r++)n.appendChild(window.pin.createPin(e[r],r)),t.addEventListener("mousedown",o),t.addEventListener("keydown",o);t.appendChild(n)},getMapPinMainCoords:function(){return{x:n.offsetLeft+Math.floor(n.offsetWidth/2),y:n.offsetTop+n.offsetHeight+window.data.ARROW_HEIGHT}},deactivateMap:function(){e.classList.add("map--faded"),window.pin.removePin(),window.card.removeMapCard(),n.style.top="375px",n.style.left="570px",window.filter.deactivateFilter()}}})(),(()=>{const e=document.querySelector("#pin").content.querySelector(".map__pin");window.pin={createPin:function(t,n){const o=e.cloneNode(!0),r=o.querySelector("img");return r.src=t.author.avatar,r.alt=t.offer.title,o.style.left=t.location.x+"px",o.style.top=t.location.y+"px",o.dataset.pinId=n,r.dataset.pinId=n,o},removePin:function(){const e=document.querySelector(".map__pin:not(.map__pin--main)");e&&e.remove()}}})(),(()=>{const e=document.querySelector(".map"),t=document.querySelector("#card").content.querySelector(".map__card"),n=document.querySelector(".map__filters-container");window.card={renderCard:function(o){const r=document.createDocumentFragment();r.appendChild(function(e){const n=t.cloneNode(!0);n.querySelector(".popup__avatar").src=e.author.avatar,n.querySelector(".popup__title").textContent=e.offer.title,n.querySelector(".popup__text--address").textContent=e.offer.address,n.querySelector(".popup__text--price").innerHTML=e.offer.price+"&#x20bd;/ночь",n.querySelector(".popup__text--time").textContent="Заезд после "+e.offer.checkin+", выезд до "+e.offer.checkout;const o=n.querySelector(".popup__type");"flat"===e.offer.type?o.textContent="Квартира":"bungalo"===e.offer.type?o.textContent="Бунгало":o.textContent="Дом";const r=n.querySelector(".popup__description");e.offer.description?r.textContent=e.offer.description:n.removeChild(r);const i=n.querySelector(".popup__features");e.offer.features.length?(i.textContent="",i.appendChild(function(e){const t=document.createDocumentFragment();return e.forEach((function(e){const n=document.createElement("li");n.className="popup__feature",n.classList.add("popup__feature--"+e),t.appendChild(n)})),t}(e.offer.features))):n.removeChild(i);const a=n.querySelector(".popup__photos");e.offer.photos.length?(a.textContent="",a.appendChild(function(e){const t=document.createDocumentFragment();return e.forEach((function(e){const n=document.createElement("img");n.src=e,n.width="45",n.height="45",n.alt=e.alt,t.appendChild(n)})),t}(e.offer.photos))):n.removeChild(a);const c=function(e){(e.target.dataset.class||"Escape"===e.key)&&(e.preventDefault(),n.remove()),n.removeEventListener("click",c)};return n.addEventListener("click",c),document.addEventListener("keydown",c),n}(o)),e.insertBefore(r,n)},removeMapCard:function(){const t=e.querySelector(".map__card");t&&t.remove()}}})(),(()=>{const e=document.querySelector(".ad-form"),t=e.querySelectorAll(".ad-form__element"),n=e.querySelector(".ad-form-header"),o=e.querySelector(".ad-form__reset");let r=!1;const i=function(){e.reset(),e.classList.add("ad-form--disabled"),n.disabled=!0;for(let e=0;e<t.length;e++)t[e].disabled=!0};i();const a=function(){i(),window.map.mapMain.classList.add("map--faded"),window.pin.removePin(),window.util.getPinMainInitialCoords(),document.removeEventListener("mouseup",a)};o.addEventListener("click",a);const c=function(){window.util.getSuccessMessage(),window.data.map.classList.add("map--faded"),i()},d=function(e){window.util.getErrorMessage(e)},u=function(t){window.load.upLoad(new FormData(e),c,d),t.preventDefault(),document.removeEventListener("click",u),document.removeEventListener("keydown",u)};e.addEventListener("submit",u),window.form={deActivationForm:i,isActivationForm:r,activationForm:function(){r=!0,window.map.mapMain.classList.remove("map--faded"),e.classList.remove("ad-form--disabled"),n.disabled=!1;for(let e=0;e<t.length;e++)t[e].disabled=!1}}})(),(()=>{const e={number:0,string:"0"},t={number:1e3,string:"1000"},n={number:5e3,string:"5000"},o={number:1e4,string:"10000"},r=document.querySelector(".ad-form"),i=r.querySelector("#type"),a=r.querySelector("#price"),c=r.querySelector("#room_number"),d=document.querySelector("#timein"),u=document.querySelector("#timeout"),s=r.querySelector("#capacity");i.addEventListener("change",(function(r){switch(r.target.value){case"bungalow":a.min=e.number,a.placeholder=e.string;break;case"flat":a.min=t.number,a.placeholder=t.string;break;case"house":a.min=n.number,a.placeholder=n.string;break;case"palace":a.min=o.number,a.placeholder=o.string}})),d.addEventListener("change",(function(e){u.value=e.target.value})),u.addEventListener("change",(function(e){d.value=e.target.value})),c.addEventListener("change",(function(){let e;s.value="100"===c.value?"0":c.value,e=s.value;for(let t=0;t<s.options.length;t++)s.options[t].disabled="0"===e?"0"!==s.options[t].value:s.options[t].value>e||"0"===s.options[t].value}))})(),(()=>{const e=document.querySelector("#address"),t=function(t){e.value=Math.round(t.x)+", "+Math.round(t.y)},n=function(e){0!==e.button&&"Enter"!==e.key||(window.form.activationForm(),window.load.onLoad(window.filter.activateFiltration,onerror)),window.map.mapPinMain.removeEventListener("mousedown",n),window.map.mapPinMain.removeEventListener("keydown",n)};t(window.util.initialPinCoords),window.map.mapPinMain.addEventListener("mousedown",n),window.map.mapPinMain.addEventListener("keydown",n),window.main=t})(),(()=>{const e=document.querySelector(".map__pin--main");e.addEventListener("mousedown",(function(t){const n=t.clientX,o=t.clientY,r=e.offsetTop,i=e.offsetLeft;let a=!1;const c=function(t){t.preventDefault(),a=!0;const c=n-t.clientX,d=o-t.clientY,u={TOP:window.data.LIMITS.Y.MIN-e.offsetHeight,BOTTOM:window.data.LIMITS.Y.MAX-e.offsetHeight,LEFT:window.data.LIMITS.X.MIN,RIGHT:window.data.LIMITS.X.MAX-e.offsetWidth};e.style.left=window.util.getValidCoords(i-c,u.LEFT,u.RIGHT)+"px",e.style.top=window.util.getValidCoords(r-d,u.TOP,u.BOTTOM)+"px";const s={x:i-c,y:r-d};window.main(s)},d=function(t){if(t.preventDefault(),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d),a){const t=function(n){n.preventDefault(),e.removeEventListener("click",t)};e.addEventListener("click",t)}};document.addEventListener("mousemove",c),document.addEventListener("mouseup",d)}))})(),(()=>{const e=document.querySelector(".map__filters"),t=e.querySelector("#housing-type"),n=e.querySelector("#housing-price"),o=e.querySelector("#housing-rooms"),r=e.querySelector("#housing-guests"),i=e.querySelector("#housing-features"),a=e.querySelectorAll("select, input"),c={low:{MIN:0,MAX:1e4},middle:{MIN:1e4,MAX:5e4},high:{MIN:5e4,MAX:1/0}};let d=[],u=[];const s=function(e,t,n){return"any"===e.value||e.value===t[n].toString()},l=function(e){return s(t,e.offer,"type")},m=function(e){const t=c[n.value];return!t||e.offer.price>=t.MIN&&e.offer.price<=t.MAX},f=function(e){return s(o,e.offer,"rooms")},p=function(e){return s(r,e.offer,"guests")},w=function(e){const t=i.querySelectorAll("input:checked");return Array.from(t).every((function(t){return e.offer.features.includes(t.value)}))},v=window.debounce((function(){u=d.slice(0),u=u.filter(l).filter(m).filter(f).filter(p).filter(w),window.pin.removePin(),window.card.removeMapCard(),window.map.renderPins(u.slice(0,5)),window.removeEventListener("change",v)}));window.filter={activateFiltration:function(t){return d=t.slice(0),a.forEach((function(e){e.disabled=!1})),v(),e.addEventListener("change",v),t.slice(0,5)},deactivateFilter:function(){a.forEach((function(e){e.disabled=!0})),a.forEach((function(e){e.value="any"})),i.querySelectorAll("input").forEach((function(e){e.checked=!1})),e.removeEventListener("change",v)}}})()})();