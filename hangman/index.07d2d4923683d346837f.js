!function(){"use strict";var e={d:function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};function t(e,t){const i=document.createElement(e);return i.className=t,i}e.d({},{A:function(){return ne}});const i=t("header","header"),n=t("h1","title");n.textContent="hangman";const s=t("h2","subtitle");s.textContent="Cyrus";const o=t("img","header-image");o.src="./assets/img/wood.webp",o.alt="";const a=t("img","sound-image");a.src="./assets/img/mute.png",a.alt="On  Off Sound",i.append(n,o,s,a);const l=t("div","section-gallows"),r=t("div","gallows-man"),d=y("./assets/img/1.webp","gallows"),c=[y("./assets/img/2.webp","img"),y("./assets/img/3.webp","img"),y("./assets/img/4.webp","img"),y("./assets/img/5.webp","img"),y("./assets/img/6.webp","img"),y("./assets/img/7.webp","img")],m=t("div","gallows-woman"),p=y("./assets/img/c1.webp","woman-gallows"),h=y("./assets/img/c2.webp","woman-img"),u=[y("./assets/img/c3.webp","woman-img"),y("./assets/img/c4.webp","woman-img"),y("./assets/img/c5.webp","woman-img"),y("./assets/img/c6.webp","woman-img"),y("./assets/img/c7.webp","woman-img"),y("./assets/img/c8.webp","woman-img")];function y(e,i){const n=t("img",i);return n.src=e,n.alt="",n}const b=t("button","text");b.textContent="new game?",r.append(...c),m.append(h,...u),l.append(d,r,b),o.onclick=function(){const e=l.contains(d);l.removeChild(e?d:p),l.removeChild(e?r:m),l.appendChild(e?m:r),l.appendChild(e?p:d),h.style.visibility=e?"visible":"hidden",s.style.visibility=e?"visible":"hidden",b.className=e?"text-woman":"text"};const g=t("div","modal-wrapper"),w=t("h2","title-modal");w.textContent="You win!";const v=t("div","modal-answer"),f=t("h3","modal-subtitle");f.textContent="Correct answer:";const C=t("p","modal-text");C.textContent="";const k=t("button","button-try-again");k.textContent="play again!",k.onclick=()=>K(),v.append(f,C),g.append(w,v,k);var x=JSON.parse('[{"id":"1","question":"In the Kingsman films, what is the codename of Eggsy, the former street punk turned elite spy?","answer":"Galahad"},{"id":"2","question":"Which superhero does Chris Hemsworth portray in the Marvel Cinematic Universe?","answer":"Thor"},{"id":"3","question":"Who played the lead role in \\"La La Land\\"?","answer":"Gosling"},{"id":"4","question":"In which film does Leonardo DiCaprio say, \\"I\'m king of the world!\\"?","answer":"Titanic"},{"id":"5","question":"Who directed the 2019 film \\"Joker\\"","answer":"Phillips"},{"id":"6","question":"In \\"The Shawshank Redemption,\\" what is Andy Dufresne\'s profession?","answer":"Banker"},{"id":"7","question":"Which Christopher Nolan film delves into dreams within dreams, starring Dom Cobb and Arthur?","answer":"Inception"},{"id":"8","question":"Which movie explores the origin of the iconic DC Comics character with a painted smile and chaotic nature?","answer":"Joker"},{"id":"9","question":"Who played the lead role in \\"The Devil Wears Prada\\"?","answer":"Streep"},{"id":"10","question":"In the movie \\"Shooter,\\" what is the main character Bob Lee Swagger exceptionally skilled at?","answer":"Sniping"}]');const q=new Audio("./assets/audio/click-enter.mp3"),E=new Audio("./assets/audio/click-a-z.mp3"),S=new Audio("./assets/audio/lost.mp3"),I=new Audio("./assets/audio/win.mp3");q.volume=.1,E.volume=.1,S.volume=.1,I.volume=.1;let A=!0;let L=null,N=0,Y=[],O=!1,T=[],W=!0,B=null;const D=t("div","section-logic"),M=t("ul","list"),P=t("div","question-wrapper"),F=t("h2","title-question"),J=t("div","fails"),$=t("h3","subtitle");$.textContent="Fails: ";const j=t("span","green");j.textContent=N;const G=t("span","orange"),H=t("p","slash");function z(e){C.textContent=`${e}`,g.removeEventListener("transitionend",z)}function K(){if(l.contains(d)){c.forEach((e=>{e.style.visibility="hidden"})),h.style.visibility="hidden",u.forEach((e=>{e.style.visibility="hidden"})),b.className="text",ne.style.display="none",g.style.transform="translateY(-100vh)",N=0,j.textContent=N,R(),O=!1;for(let e=65;e<=90;e++)document.getElementById("key-id-"+(e-64)).disabled=!1}else{b.className="text-woman",h.style.visibility="visible",u.forEach((e=>{e.style.visibility="hidden"})),c.forEach((e=>{e.style.visibility="hidden"})),ne.style.display="none",g.style.transform="translateY(-100vh)",N=0,j.textContent=N,R(),O=!1;for(let e=65;e<=90;e++)document.getElementById("key-id-"+(e-64)).disabled=!1}k.blur(),b.blur()}function R(){let e=x.filter((e=>!T.includes(e.id)));0===e.length&&(T=[],e=x,console.log(`This game has a total of ${x.length} questions. You have answered all ${x.length}   questions. From now on, the questions will start repeating.`));const i=Math.floor(Math.random()*e.length);for(L=e[i];B&&L.id===B.id;){const t=Math.floor(Math.random()*e.length);L=e[t]}return B=L,T.push(L.id),F.textContent=L.question,M.innerHTML="",O=!1,Y=[],L.answer.split("").forEach((e=>function(e){const i=t("li","list-item");i.textContent="",i.dataset.letter=e,M.append(i),Y.push(i)}(e))),W&&(C.textContent=`${L.answer}`,console.log("Please, don't forget to switch to the English keyboard layout."),W=!1),console.log("Answer: "+L.answer),L}function U(e,t){if(O||t.disabled)return;const i=Y.filter((t=>t.dataset.letter.toLowerCase()===e.toLowerCase()));i.length>0?i.forEach((t=>{t.textContent=e})):(N+=1,function(){switch(N){case 1:c[0].style.visibility="visible",u[0].style.visibility="visible";break;case 2:c[1].style.visibility="visible",u[1].style.visibility="visible";break;case 3:c[2].style.visibility="visible",u[2].style.visibility="visible";break;case 4:c[3].style.visibility="visible",u[3].style.visibility="visible";break;case 5:c[4].style.visibility="visible",u[4].style.visibility="visible";break;case 6:c[5].style.visibility="visible",u[5].style.visibility="visible"}}(),6===N&&(console.log("u lost"),O=!0,w.textContent="You lost!",requestAnimationFrame((()=>{ne.style.display="block",g.style.transform="translateY(0)"})),A||_())),t.disabled=!0,Y.forEach((e=>{""!==e.textContent.trim()&&(e.style.borderBottom="none")})),j.textContent=N,Y.every((e=>""!==e.textContent.trim()))&&(console.log("u win!"),O=!0,w.textContent="You win!",requestAnimationFrame((()=>{ne.style.display="block",g.style.transform="translateY(0)"})),A||_())}H.textContent="/",G.textContent=6,J.append($,j,H,G),P.append(F),D.append(M,P,J);const _=()=>{Q(!0,6===N?S:I)};function Q(e,t){e&&(t.pause(),t.currentTime=0,t.play())}document.onkeydown=e=>function(e){if(9===e.keyCode&&e.preventDefault(),13===e.keyCode&&"block"===ne.style.display)Q(!A,E),K();else if(e.keyCode>=65&&e.keyCode<=90){const t=String.fromCharCode(e.keyCode),i=document.getElementById("key-id-"+(e.keyCode-64));i.disabled||O||A||Q(!0,q),U(t,i)}}(e),g.addEventListener("transitionend",(()=>z(L.answer))),b.onclick=K;const V=localStorage.getItem("mute");null!==V&&(A=JSON.parse(V),a.src=A?"./assets/img/mute.webp":"./assets/img/sound-on.webp"),a.onclick=()=>{A=!A,a.src=A?"./assets/img/mute.webp":"./assets/img/sound-on.webp",localStorage.setItem("mute",A)},R();const X=t("footer","footer"),Z=t("p","copyright-text");Z.textContent="Copyright";const ee=t("a","copyright-link");ee.href="https://github.com/anthony-th",ee.target="_blank",ee.textContent="anthony-th";const te=t("p","copyright-text");te.textContent="© 2024",X.append(Z,ee,te);const ie=t("main","main"),ne=t("div","shadow"),se=function(){const e=t("div","keyboard-wrapper");for(let i=65;i<=90;i++){const n=String.fromCharCode(i),s=t("button","button");s.textContent=n,s.id="key-id-"+(i-64),e.append(s),s.onclick=()=>U(n,s)}return D.append(e),D}();document.body.className="body",ie.append(l,se,g),document.body.append(i,ie,X,ne)}();
//# sourceMappingURL=index.07d2d4923683d346837f.js.map