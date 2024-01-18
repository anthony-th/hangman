!function(){"use strict";var t={d:function(e,i){for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}};function e(t,e){const i=document.createElement(t);return i.className=e,i}t.d({},{A:function(){return Z}});const i=e("header","header"),s=e("h1","title"),n=e("h2","subtitle");n.textContent="wo",s.textContent="hangman";const o=e("img","header-image");o.src="./assets/img/wood.webp",o.alt="",i.append(s,o,n);const l=e("div","section-gallows"),a=e("div","gallows-man"),r=e("img","gallows");r.src="./assets/img/1.webp",r.alt="";const d=e("img","img");d.src="./assets/img/2.webp",d.alt="";const c=e("img","img");c.src="./assets/img/3.webp",c.alt="";const y=e("img","img");y.src="./assets/img/4.webp",y.alt="";const h=e("img","img");h.src="./assets/img/5.webp",h.alt="";const m=e("img","img");m.src="./assets/img/6.webp",m.alt="";const b=e("img","img");b.src="./assets/img/7.webp",b.alt="";const p=e("div","gallows-woman"),g=e("img","woman-gallows");g.src="./assets/img/c1.webp",g.alt="";const v=e("img","woman-img");v.src="./assets/img/c2.webp",v.alt="";const w=e("img","woman-img");w.src="./assets/img/c3.webp",w.alt="";const u=e("img","woman-img");u.src="./assets/img/c4.webp",u.alt="";const f=e("img","woman-img");f.src="./assets/img/c5.webp",f.alt="";const C=e("img","woman-img");C.src="./assets/img/c6.webp",C.alt="";const k=e("img","woman-img");k.src="./assets/img/c7.webp",k.alt="";const x=e("img","woman-img");x.src="./assets/img/c8.webp",x.alt="",a.append(d,c,y,h,m,b),p.append(v,w,u,f,C,k,x),l.append(r,a),o.onclick=function(){l.contains(r)?(l.removeChild(r),l.removeChild(a),l.appendChild(p),l.appendChild(g),v.style.visibility="visible",n.style.visibility="visible"):(v.style.visibility="hidden",n.style.visibility="hidden",l.removeChild(g),l.removeChild(p),l.appendChild(a),l.appendChild(r))};const q=e("div","modal-wrapper"),E=e("h2","title-modal");E.textContent="You win!";const L=e("p","subtitle-modal");L.textContent="Correct answer:";const I=e("button","button-try-again");I.textContent="play again!",I.onclick=()=>K(),q.append(E,L,I);var S=JSON.parse('[{"id":"1","question":"In the Kingsman films, what is the codename of Eggsy, the former street punk turned elite spy?","answer":"Galahad"},{"id":"2","question":"Which superhero does Chris Hemsworth portray in the Marvel Cinematic Universe?","answer":"Thor"},{"id":"3","question":"Who played the lead role in \\"La La Land\\"?","answer":"Gosling"},{"id":"4","question":"In which film does Leonardo DiCaprio say, \\"I\'m king of the world!\\"?","answer":"Titanic"},{"id":"5","question":"Who directed the 2019 film \\"Joker\\"","answer":"Phillips"},{"id":"6","question":"In \\"The Shawshank Redemption,\\" what is Andy Dufresne\'s profession?","answer":"Banker"},{"id":"7","question":"What Christopher Nolan film explores the concept of dreams within dreams, featuring characters like Dom Cobb and Arthur?","answer":"Inception"},{"id":"8","question":"Which film, based on a comic book, follows the origin story of the iconic DC Comics character known for his chaotic nature and painted smile?","answer":"Joker"},{"id":"9","question":"Who played the lead role in \\"The Devil Wears Prada\\"?","answer":"Streep"},{"id":"10","question":"In the movie \\"Shooter,\\" what is the main character Bob Lee Swagger exceptionally skilled at?","answer":"Sniping"}]');let Y=null,W=0,A=[],B=!1,M=[],T=!0,D=null;const P=e("div","section-logic"),F=e("ul","list"),N=e("h2","title-question"),O=e("div","fails"),$=e("h3","subtitle");$.textContent="Fails: ";const J=e("span","green");J.textContent=W;const j=e("span","orange"),G=e("p","slash");function H(t){L.textContent=`Corrent answer: ${t}`,q.removeEventListener("transitionend",H)}function K(){if(l.contains(r)){d.style.visibility="hidden",c.style.visibility="hidden",y.style.visibility="hidden",h.style.visibility="hidden",m.style.visibility="hidden",b.style.visibility="hidden",v.style.visibility="hidden",w.style.visibility="hidden",u.style.visibility="hidden",f.style.visibility="hidden",C.style.visibility="hidden",k.style.visibility="hidden",x.style.visibility="hidden",Z.style.display="none",q.style.transform="translateY(-100vh)",W=0,J.textContent=W,R(),B=!1;for(let t=65;t<=90;t++)document.getElementById("key-id-"+(t-64)).disabled=!1}else{v.style.visibility="visible",w.style.visibility="hidden",u.style.visibility="hidden",f.style.visibility="hidden",C.style.visibility="hidden",k.style.visibility="hidden",x.style.visibility="hidden",d.style.visibility="hidden",c.style.visibility="hidden",y.style.visibility="hidden",h.style.visibility="hidden",m.style.visibility="hidden",b.style.visibility="hidden",Z.style.display="none",q.style.transform="translateY(-100vh)",W=0,J.textContent=W,R(),B=!1;for(let t=65;t<=90;t++)document.getElementById("key-id-"+(t-64)).disabled=!1}}function R(){let t=S.filter((t=>!M.includes(t.id)));0===t.length&&(M=[],t=S,console.log(`This game has a total of ${S.length} questions. You have answered all ${S.length}   questions. From now on, the questions will start repeating.`));const i=Math.floor(Math.random()*t.length);for(Y=t[i];D&&Y.id===D.id;){const e=Math.floor(Math.random()*t.length);Y=t[e]}return D=Y,M.push(Y.id),N.textContent=Y.question,F.innerHTML="",B=!1,A=[],Y.answer.split("").forEach((t=>function(t){const i=e("li","list-item");i.textContent="",i.dataset.letter=t,F.append(i),A.push(i)}(t))),T&&(L.textContent=`Corrent answer: ${Y.answer}`,console.log("Please, don't forget to switch to the English keyboard layout."),T=!1),console.log("Answer: "+Y.answer),Y}function U(t,e){if(B||e.disabled)return;const i=A.filter((e=>e.dataset.letter.toLowerCase()===t.toLowerCase()));i.length>0?i.forEach((e=>{e.textContent=t})):(W+=1,function(){switch(W){case 1:d.style.visibility="visible",w.style.visibility="visible";break;case 2:c.style.visibility="visible",u.style.visibility="visible";break;case 3:y.style.visibility="visible",f.style.visibility="visible";break;case 4:h.style.visibility="visible",C.style.visibility="visible";break;case 5:m.style.visibility="visible",k.style.visibility="visible";break;case 6:b.style.visibility="visible",x.style.visibility="visible"}}(),6===W&&(console.log("u lost"),B=!0,E.textContent="You lost!",requestAnimationFrame((()=>{Z.style.display="block",q.style.transform="translateY(0)"})))),e.disabled=!0,A.forEach((t=>{""!==t.textContent.trim()&&(t.style.borderBottom="none")})),J.textContent=W,A.every((t=>""!==t.textContent.trim()))&&(console.log("u win!"),B=!0,E.textContent="You win!",requestAnimationFrame((()=>{Z.style.display="block",q.style.transform="translateY(0)"})))}G.textContent="/",j.textContent=6,O.append($,J,G,j),P.append(F,N,O),document.onkeydown=t=>function(t){13===t.keyCode&&"block"===Z.style.display?K():t.keyCode>=65&&t.keyCode<=90&&U(String.fromCharCode(t.keyCode),document.getElementById("key-id-"+(t.keyCode-64)))}(t),q.addEventListener("transitionend",(()=>H(Y.answer))),R();const _=e("footer","footer"),z=e("p","copyright-text");z.textContent="Copyright";const Q=e("a","copyright-link");Q.href="https://github.com/anthony-th",Q.target="_blank",Q.textContent="anthony-th";const V=e("p","copyright-text");V.textContent="© 2024",_.append(z,Q,V);const X=e("main","main"),Z=e("div","shadow"),tt=function(){const t=e("div","keyboard-wrapper");for(let i=65;i<=90;i++){const s=String.fromCharCode(i),n=e("button","button");n.textContent=s,n.id="key-id-"+(i-64),t.append(n),n.onclick=()=>U(s,n)}return P.append(t),P}();document.body.className="body",X.append(l,tt,q),document.body.append(i,X,_,Z)}();
//# sourceMappingURL=index.8fdc1893b0423a014e56.js.map