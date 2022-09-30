(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Source+Code+Pro:ital@1&display=swap);"]),i.push([e.id,"body {\r\n  font-family: 'Oswald', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #fff;\r\n  align-items: center;\r\n  position: relative;\r\n  top: 150px;\r\n  height: 100vh;\r\n}\r\n\r\n#todo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 70vw;\r\n  padding: 10px 5px;\r\n  padding-bottom: 30px;\r\n  box-shadow: rgb(38, 57, 77) 0 20px 30px -10px;\r\n}\r\n\r\n#todo-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-left: 40px;\r\n  justify-content: space-between;\r\n}\r\n\r\n#todo-lists {\r\n  list-style-type: none;\r\n  margin-top: 40px;\r\n  font-family: 'Source Code Pro', monospace;\r\n}\r\n\r\n.todo-list-container {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  margin-top: 20px;\r\n  justify-content: stretch;\r\n  border-bottom: 1px solid silver;\r\n}\r\n\r\n.todo-list-container i {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 3px;\r\n  font-size: 25px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 16px;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n.inputs-holder {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.inputs-holder .add {\r\n  padding-right: 5px;\r\n  position: absolute;\r\n  right: 0;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  opacity: 0.5;\r\n}\r\n\r\n.input-form {\r\n  margin-left: 40px;\r\n  width: 800px;\r\n  border: none;\r\n}\r\n\r\ninput:focus {\r\n  outline: none !important;\r\n  border: 1px solid #fff;\r\n  box-shadow: 0 0 10px #719ece;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  font-family: 'Oswald', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 18px;\r\n  background: rgb(255, 234, 222);\r\n  width: 100%;\r\n  height: 70px;\r\n  border: none;\r\n  color: #000;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: rgb(218, 181, 163);\r\n  border: 1px solid salmon;\r\n  color: #fff;\r\n}\r\n\r\n.alt-fa {\r\n  display: none;\r\n}\r\n\r\n.trash-active {\r\n  display: block;\r\n}\r\n\r\n.checked-holder {\r\n  background: rgb(255, 234, 222);\r\n}\r\n\r\n.line-through {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.dots-remove {\r\n  display: none;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),d=n.n(c),p=n(589),u=n.n(p),f=n(424),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class m{constructor(e,t,n){this.description=e,this.completed=t,this.index=n}}const g=document.querySelector("#todo-lists"),v=document.querySelector("button");class y{static createTask=()=>{const e=document.createElement("div");e.className="todo-list-container",g.appendChild(e);const t=document.createElement("input");t.type="checkbox";const n=document.createElement("p");n.className="content";const r=document.createElement("i");r.className="dots fa-solid fa-ellipsis-vertical";const o=document.createElement("i");o.className="alt-fa fa-solid fa-trash",e.append(t,n,r,o),t.addEventListener("click",(()=>{e.classList.toggle("checked-holder"),n.classList.toggle("line-through"),o.classList.toggle("trash-active"),r.classList.toggle("dots-remove");const t=JSON.parse(localStorage.getItem("todo")),a=[],i=document.querySelectorAll(".todo-list-container");for(let e=0;e<t.length;e+=1)i[e].classList.contains("checked-holder")?t[e].completed=!0:t[e].completed=!1,a.push(t[e]),localStorage.setItem("todo",JSON.stringify(a))})),v.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("todo")),t=document.querySelectorAll(".checked-holder"),n=[];for(let e=0;e<t.length;e+=1)g.removeChild(t[e]);for(let t=0;t<e.length;t+=1)!0!==e[t].completed&&n.push(e[t]);localStorage.setItem("todo",JSON.stringify(n))})),o.addEventListener("click",(()=>{g.removeChild(e);const t=JSON.parse(localStorage.getItem("todo")),r=t.filter((e=>e.description===n.textContent)),o=[];for(let e=0;e<t.length;e+=1)r[0].description!==t[e].description&&o.push(t[e]);let a=0;for(;a<o.length;)o[a].index=a,a+=1;localStorage.setItem("todo",JSON.stringify(o))})),r.addEventListener("click",(()=>{const t=document.createElement("input");t.type="text",t.className="contentEditor",t.style.background="#fff",e.style.background="#fff",t.value=n.textContent,e.replaceChild(t,n),t.addEventListener("keypress",(e=>{if("Enter"===e.key&&t.value){const e=JSON.parse(localStorage.getItem("todo"));let r=[];for(let t=0;t<e.length;t+=1)if(e[t].description===n.textContent){r=e[t];break}const o=[];for(let n=0;n<e.length;n+=1)e[n].index===r.index&&(e[n].description=t.value),o.push(e[n]),localStorage.setItem("todo",JSON.stringify(o));window.location.reload()}}))}))}}const x=document.querySelector(".input-form"),b=[];x.addEventListener("keypress",(e=>{if("Enter"===e.key&&x.value){const e=new m(x.value,!1,b.length);b.push(e),y.createTask(b);const t=document.querySelectorAll(".content");for(let e=0;e<t.length;e+=1)t[e].textContent=b[e].description;x.value=null,class{static addToLocalDataStorage=e=>{localStorage.setItem("todo",JSON.stringify(e))}}.addToLocalDataStorage(b)}})),JSON.parse(localStorage.getItem("todo")).forEach((e=>{b.push(e)})),class{static loadWindow=()=>{window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("todo"));if(null!==e)for(let t=0;t<e.length;t+=1)y.createTask(),document.querySelectorAll(".content")[t].textContent=e[t].description}))}}.loadWindow(b)})()})();