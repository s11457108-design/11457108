const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
function answerQuiz(value){
  const msg=document.getElementById('quiz-msg');
  const hidden=document.getElementById('hidden-photo');
  if(!msg||!hidden)return;
  if(value==='longtan-canal'){
    msg.textContent='答對！公開資料記載龍潭圳又名「石門大圳龍潭分渠」，並連接龍潭大池。隱藏版地景照已開啟。';
    msg.style.color='#315947';
    hidden.classList.add('show');
  }else{
    msg.textContent='再想一下：線索在「龍潭圳」與「石門大圳龍潭分渠」。';
    msg.style.color='#9a3e34';
    hidden.classList.remove('show');
  }
}
window.answerQuiz=answerQuiz;
