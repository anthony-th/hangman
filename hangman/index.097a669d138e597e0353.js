!function(){"use strict";var e={d:function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};function t(e,t){const n=document.createElement(e);return n.className=t,n}e.d({},{A:function(){return O}});const n=t("div","section-gallows"),i=t("div","gallows-man"),o=t("img","gallows");o.src="./assets/img/1.webp",o.alt="";const s=t("img","img");s.src="./assets/img/2.webp",s.alt="";const a=t("img","img");a.src="./assets/img/3.webp",a.alt="";const r=t("img","img");r.src="./assets/img/4.webp",r.alt="";const l=t("img","img");l.src="./assets/img/5.webp",l.alt="";const d=t("img","img");d.src="./assets/img/6.webp",d.alt="";const c=t("img","img");c.src="./assets/img/7.webp",c.alt="",i.append(s,a,r,l,d,c),n.append(o,i);const h=t("div","modal-wrapper"),m=t("h2","title-modal");m.textContent="You win!";const p=t("p","subtitle-modal");p.textContent="Correct answer:";const u=t("button","button-try-again");u.textContent="play again!",u.onclick=()=>Y(),h.append(m,p,u);var y=JSON.parse('[{"id":"1","question":"In the Kingsman films, what is the codename of Eggsy, the former street punk turned elite spy?","answer":"Galahad"},{"id":"2","question":"Which superhero does Chris Hemsworth portray in the Marvel Cinematic Universe?","answer":"Thor"},{"id":"3","question":"Who played the lead role in \\"La La Land\\"?","answer":"Gosling"},{"id":"4","question":"In which film does Leonardo DiCaprio say, \\"I\'m king of the world!\\"?","answer":"Titanic"},{"id":"5","question":"Who directed the 2019 film \\"Joker\\"","answer":"Phillips"},{"id":"6","question":"In \\"The Shawshank Redemption,\\" what is Andy Dufresne\'s profession?","answer":"Banker"},{"id":"7","question":"What Christopher Nolan film explores the concept of dreams within dreams, featuring characters like Dom Cobb and Arthur?","answer":"Inception"},{"id":"8","question":"Which film, based on a comic book, follows the origin story of the iconic DC Comics character known for his chaotic nature and painted smile?","answer":"Joker"},{"id":"9","question":"Who played the lead role in \\"The Devil Wears Prada\\"?","answer":"Streep"},{"id":"10","question":"In the movie \\"Shooter,\\" what is the main character Bob Lee Swagger exceptionally skilled at?","answer":"Sniping"}]');let g=null,b=0,w=[],f=!1,C=[],v=!0,k=null;const x=t("div","section-logic"),q=t("ul","list"),L=t("h2","title-question"),E=t("div","fails"),I=t("h3","subtitle");I.textContent="Fails: ";const S=t("span","green");S.textContent=b;const M=t("span","orange"),T=t("p","slash");function W(e){p.textContent=`Corrent answer: ${e}`,h.removeEventListener("transitionend",W)}function Y(){s.style.visibility="hidden",a.style.visibility="hidden",r.style.visibility="hidden",l.style.visibility="hidden",d.style.visibility="hidden",c.style.visibility="hidden",O.style.display="none",h.style.transform="translateY(-100vh)",b=0,S.textContent=b,A(),f=!1;for(let e=65;e<=90;e++)document.getElementById("key-id-"+(e-64)).disabled=!1}function A(){let e=y.filter((e=>!C.includes(e.id)));0===e.length&&(C=[],e=y,console.log(`This game has a total of ${y.length} questions. You have answered all ${y.length}   questions. From now on, the questions will start repeating.`));const n=Math.floor(Math.random()*e.length);for(g=e[n];k&&g.id===k.id;){const t=Math.floor(Math.random()*e.length);g=e[t]}return k=g,C.push(g.id),L.textContent=g.question,q.innerHTML="",f=!1,w=[],g.answer.split("").forEach((e=>function(e){const n=t("li","list-item");n.textContent="",n.dataset.letter=e,q.append(n),w.push(n)}(e))),v&&(p.textContent=`Corrent answer: ${g.answer}`,console.log("Please, don't forget to switch to the English keyboard layout."),v=!1),console.log("Answer: "+g.answer),g}function B(e,t){if(f||t.disabled)return;const n=w.filter((t=>t.dataset.letter.toLowerCase()===e.toLowerCase()));n.length>0?n.forEach((t=>{t.textContent=e})):(b+=1,function(){switch(b){case 1:s.style.visibility="visible";break;case 2:a.style.visibility="visible";break;case 3:r.style.visibility="visible";break;case 4:l.style.visibility="visible";break;case 5:d.style.visibility="visible";break;case 6:c.style.visibility="visible"}}(),6===b&&(console.log("u lost"),f=!0,m.textContent="You lost!",requestAnimationFrame((()=>{O.style.display="block",h.style.transform="translateY(0)"})))),t.disabled=!0,w.forEach((e=>{""!==e.textContent.trim()&&(e.style.borderBottom="none")})),S.textContent=b,w.every((e=>""!==e.textContent.trim()))&&(console.log("u win!"),f=!0,m.textContent="You win!",requestAnimationFrame((()=>{O.style.display="block",h.style.transform="translateY(0)"})))}T.textContent="/",M.textContent=6,E.append(I,S,T,M),x.append(q,L,E),document.onkeydown=e=>function(e){13===e.keyCode&&"block"===O.style.display?Y():e.keyCode>=65&&e.keyCode<=90&&B(String.fromCharCode(e.keyCode),document.getElementById("key-id-"+(e.keyCode-64)))}(e),h.addEventListener("transitionend",(()=>W(g.answer))),A();const D=t("header","header"),P=t("h1","title");P.innerHTML="hangman";const F=t("img","header-image");F.src="./assets/img/wood.webp",F.alt="",D.append(P,F);const N=t("main","main"),O=t("div","shadow"),$=function(){const e=t("div","keyboard-wrapper");for(let n=65;n<=90;n++){const i=String.fromCharCode(n),o=t("button","button");o.textContent=i,o.id="key-id-"+(n-64),e.append(o),o.onclick=()=>B(i,o)}return x.append(e),x}();document.body.className="body",N.append(n,$,h),document.body.append(D,N,O)}();
//# sourceMappingURL=index.097a669d138e597e0353.js.map