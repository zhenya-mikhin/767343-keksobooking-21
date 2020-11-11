(()=>{"use strict";(()=>{const e=document.querySelector("#error").content.querySelector(".error"),t=document.querySelector("#success").content.querySelector(".success"),n=document.querySelector("main");window.util={getRandomNumber:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},getRandomArray:function(e){return e.slice(0,window.util.getRandomNumber(0,e.length))},getErrorMessage:function(t){const o=e.cloneNode(!0),r=o.querySelector("p"),a=o.querySelector(".error__button");r.textContent=t,n.insertAdjacentElement("afterbegin",o),a.addEventListener("click",(function(e){e.preventDefault(),window.map.deactivateMap(),o.remove()}))},getSuccessMessage:function(){const e=t.cloneNode(!0);document.body.insertAdjacentElement("afterbegin",e)},getValidCoords:function(e,t,n){return(e=parseInt(e,10))>n?n:e<t?t:e}}})(),window.debounce=function(e){let t=null;return function(...n){t&&window.clearTimeout(t),t=window.setTimeout((function(){e(...n)}),500)}},(()=>{let e=function(e,t,n,o){const r=new XMLHttpRequest;return r.responseType="json",r.addEventListener("load",(function(){let e="";switch(r.status){case 200:n(r.response);break;case 400:e="Неверный запрос";break;case 401:e="Пользователь не авторизован";break;case 404:e="Ничего не найдено";break;default:e="Cтатус ответа: : "+r.status+" "+r.statusText}e&&o(e)})),r.addEventListener("error",(function(){o("Произошла ошибка соединения")})),r.addEventListener("timeout",(function(){o("Запрос не успел выполниться за "+r.timeout+"мс")})),r.timeout=2e4,r.open(e,t),r};window.load={onLoad:function(t,n){e("GET","https://21.javascript.pages.academy/keksobooking/data",t,n).send()},upLoad:function(t,n,o){e("POST","https://21.javascript.pages.academy/keksobooking",n,o).send(t)}}})(),(()=>{const e=document.querySelector("#address");window.data={ARROW_HEIGHT:18,LIMITS:{X:{MIN:0,MAX:1200},Y:{MIN:130,MAX:630}},map:document.querySelector(".map"),adAddress:function(){e.value=Math.round(window.map.mapPinMain.offsetLeft+window.map.mapPinMain.offsetWidth/2)+", "+Math.round(window.map.mapPinMain.offsetTop+window.map.mapPinMain.offsetHeight+window.data.ARROW_HEIGHT)}}})(),(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__pins"),n=t.querySelector(".map__pin--main");window.map={mapMain:e,mapPins:t,mapPinMain:n,renderPins:function(e){const n=document.createDocumentFragment(),o=function(t){t.preventDefault(),window.card.removeMapCard(),"Enter"!==t.key&&0!==t.button||!t.target.dataset.pinId||window.card.renderCard(e[t.target.dataset.pinId])};for(let r=0;r<e.length;r++)n.appendChild(window.pin.createPin(e[r],r)),t.addEventListener("mousedown",o),t.addEventListener("keydown",o);t.appendChild(n)},getMapPinMainCoords:function(){return{x:n.offsetLeft+Math.floor(n.offsetWidth/2),y:n.offsetTop+n.offsetHeight+window.data.ARROW_HEIGHT}},deactivateMap:function(){e.classList.add("map--faded"),window.pin.removePin(),window.card.removeMapCard(),n.style.top="375px",n.style.left="570px",window.filter.deactivateFilter()}}})(),(()=>{const e=document.querySelector("#pin").content.querySelector(".map__pin");window.pin={createPin:function(t,n){const o=e.cloneNode(!0),r=o.querySelector("img");return r.src=t.author.avatar,r.alt=t.offer.title,o.style.left=t.location.x+"px",o.style.top=t.location.y+"px",o.dataset.pinId=n,r.dataset.pinId=n,o},removePin:function(){const e=document.querySelector(".map__pin:not(.map__pin--main)");e&&e.remove()}}})(),(()=>{const e=document.querySelector(".map"),t=document.querySelector("#card").content.querySelector(".map__card"),n=document.querySelector(".map__filters-container");window.card={renderCard:function(o){const r=document.createDocumentFragment();r.appendChild(function(e){const n=t.cloneNode(!0);n.querySelector(".popup__avatar").src=e.author.avatar,n.querySelector(".popup__title").textContent=e.offer.title,n.querySelector(".popup__text--address").textContent=e.offer.adress,n.querySelector(".popup__text--price").innerHTML=e.offer.price+"&#x20bd;/ночь",n.querySelector(".popup__text--time").textContent="Заезд после "+e.offer.checkin+", выезд до "+e.offer.checkout;const o=n.querySelector(".popup__type");"flat"===e.offer.type?o.textContent="Квартира":"bungalo"===e.offer.type?o.textContent="Бунгало":o.textContent="Дом";const r=n.querySelector(".popup__description");e.offer.description?r.textContent=e.offer.description:n.removeChild(r);const a=n.querySelector(".popup__features");e.offer.features.length?(a.textContent="",a.appendChild(function(e){const t=document.createDocumentFragment();return e.forEach((function(e){const n=document.createElement("li");n.className="popup__feature",n.classList.add("popup__feature--"+e),t.appendChild(n)})),t}(e.offer.features))):n.removeChild(a);const i=n.querySelector(".popup__photos");e.offer.photos.length?(i.textContent="",i.appendChild(function(e){const t=document.createDocumentFragment();return e.forEach((function(e){const n=document.createElement("img");n.src=e,n.width="45",n.height="45",n.alt=e.alt,t.appendChild(n)})),t}(e.offer.photos))):n.removeChild(i);const c=function(e){e.preventDefault(),(e.target.dataset.class||"Escape"===e.key)&&n.remove(),n.removeEventListener("click",c)};return n.addEventListener("click",c),document.addEventListener("keydown",c),n}(o)),e.insertBefore(r,n)},removeMapCard:function(){const t=e.querySelector(".map__card");t&&t.remove()}}})(),(()=>{const e=document.querySelector(".ad-form"),t=e.querySelectorAll(".ad-form__element"),n=e.querySelector(".ad-form-header");let o=!1;const r=function(){e.reset(),e.classList.add("ad-form--disabled"),n.disabled=!0;for(let e=0;e<t.length;e++)t[e].disabled=!0};r();const a=function(){window.util.getSuccessMessage(),window.data.map.classList.add("map--faded"),r()},i=function(e){window.util.getErrorMessage(e)};e.addEventListener("submit",(function(t){window.load.upLoad(new FormData(e),a,i),t.preventDefault()})),window.form={deActivationForm:r,isActivationForm:o,activationForm:function(){o=!0,window.map.mapMain.classList.remove("map--faded"),e.classList.remove("ad-form--disabled"),n.disabled=!1;for(let e=0;e<t.length;e++)t[e].disabled=!1}}})(),(()=>{const e=document.querySelector(".ad-form"),t=e.querySelector("#type"),n=e.querySelector("#price"),o=e.querySelector("#room_number"),r=document.querySelector("#timein"),a=document.querySelector("#timeout"),i=e.querySelector("#capacity");t.addEventListener("change",(function(e){switch(e.target.value){case"bungalo":n.min=0,n.placeholder="0";break;case"flat":n.min=1e3,n.placeholder="1000";break;case"house":n.min=5e3,n.placeholder="5000";break;case"palace":n.min=1e4,n.placeholder="10000"}})),r.addEventListener("change",(function(e){a.value=e.target.value})),a.addEventListener("change",(function(e){r.value=e.target.value})),o.addEventListener("change",(function(){let e;i.value="100"===o.value?"0":o.value,e=i.value;for(let t=0;t<i.options.length;t++)i.options[t].disabled="0"===e?"0"!==i.options[t].value:i.options[t].value>e||"0"===i.options[t].value}))})(),(()=>{const e=function(t){0!==t.button&&"Enter"!==t.key||(window.form.activationForm(),window.load.onLoad(window.filter.activateFiltration,onerror)),window.map.mapPinMain.removeEventListener("mousedown",e),window.map.mapPinMain.removeEventListener("keydown",e)};window.map.mapPinMain.addEventListener("mousedown",e),window.map.mapPinMain.addEventListener("keydown",e)})(),(()=>{const e=document.querySelector(".map__pin--main"),t=document.querySelector("#address");e.addEventListener("mousedown",(function(n){const o=n.clientX,r=n.clientY,a=e.offsetTop,i=e.offsetLeft;let c=!1;const d=function(n){n.preventDefault(),c=!0;const d=o-n.clientX,u=r-n.clientY,s={TOP:window.data.LIMITS.Y.MIN-e.offsetHeight,BOTTOM:window.data.LIMITS.Y.MAX-e.offsetHeight,LEFT:window.data.LIMITS.X.MIN,RIGHT:window.data.LIMITS.X.MAX-e.offsetWidth};var l;e.style.left=window.util.getValidCoords(i-d,s.LEFT,s.RIGHT)+"px",e.style.top=window.util.getValidCoords(a-u,s.TOP,s.BOTTOM)+"px",l={x:i-d,y:a-u},t.value=Math.round(l.x)+", "+Math.round(l.y)},u=function(t){if(t.preventDefault(),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",u),c){const t=function(n){n.preventDefault(),e.removeEventListener("click",t)};e.addEventListener("click",t)}};document.addEventListener("mousemove",d),document.addEventListener("mouseup",u)}))})(),(()=>{const e=document.querySelector(".map__filters"),t=e.querySelector("#housing-type"),n=e.querySelector("#housing-price"),o=e.querySelector("#housing-rooms"),r=e.querySelector("#housing-guests"),a=e.querySelector("#housing-features"),i=e.querySelectorAll("select, input"),c={low:{MIN:0,MAX:1e4},middle:{MIN:1e4,MAX:5e4},high:{MIN:5e4,MAX:1/0}};let d=[],u=[];const s=function(e,t,n){return"any"===e.value||e.value===t[n].toString()},l=function(e){return s(t,e.offer,"type")},f=function(e){const t=c[n.value];return!t||e.offer.price>=t.MIN&&e.offer.price<=t.MAX},p=function(e){return s(o,e.offer,"rooms")},m=function(e){return s(r,e.offer,"guests")},w=function(e){const t=a.querySelectorAll("input:checked");return Array.from(t).every((function(t){return e.offer.features.includes(t.value)}))},v=window.debounce((function(){u=d.slice(0),u=u.filter(l).filter(f).filter(p).filter(m).filter(w),window.pin.removePin(),window.card.removeMapCard(),window.map.renderPins(u.slice(0,5))}));window.filter={activateFiltration:function(t){return d=t.slice(0),i.forEach((function(e){e.disabled=!1})),v(),e.addEventListener("change",v),t.slice(0,5)},deactivateFilter:function(){i.forEach((function(e){e.disabled=!0})),i.forEach((function(e){e.value="any"})),a.querySelectorAll("input").forEach((function(e){e.checked=!1})),e.removeEventListener("change",v)}}})()})();