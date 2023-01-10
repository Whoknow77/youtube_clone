const moreBtn = document.querySelector('.info .titleAndInfo .moreBtn');
const title = document.querySelector('.info .titleAndInfo .title');


moreBtn.addEventListener('click', () =>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});