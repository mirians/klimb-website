// KLIMB website: menu, sticky nav, billing toggle, reveal on scroll
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const nav=$('.nav'),burger=$('.burger'),links=$('#links');
burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
$$('#links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10),{passive:true});
$$('.bill button').forEach(b=>b.addEventListener('click',()=>{$$('.bill button').forEach(x=>x.classList.toggle('on',x===b));$('.plans').classList.toggle('yearly',b.dataset.bill==='y')}));
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
 $$('.step,.screens figure,.kcard,.b,.plan,.uses article,.process li').forEach(el=>{el.classList.add('rv');io.observe(el)})}

// App tour: step through the phone mockup screens
const tShots=$$('.tscreen');
if(tShots.length){let ti=0;
 const showT=n=>{ti=(n+tShots.length)%tShots.length;tShots.forEach((el,k)=>el.classList.toggle('on',k===ti));$('#tCount').textContent=(ti+1)+' / '+tShots.length;$('#tourCap').textContent=tShots[ti].dataset.cap};
 $('#tPrev').addEventListener('click',()=>showT(ti-1));
 $('#tNext').addEventListener('click',()=>showT(ti+1));
 showT(0);}
