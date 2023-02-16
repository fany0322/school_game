let a = document.getElementsByClassName('hog')[0]
let w = document.getElementsByClassName('box3')
let score=document.getElementsByClassName('score_box')[0]
let m=0
let count=0
// let x1 = w.offsetLeft
function click(e){
    m++;
    e.target.src = 'dead.png'
    e.target.className = 'animate'
    score.innerText = `${m}`
}
function popout() {
    let x = Math.floor(Math.random()*410) - 205;
    let y = Math.floor(Math.random()*510) - 255;
    let icon = document.createElement('img')
    icon.src = 'hog.png';
    icon.style.width = '40px';
    icon.style.height = '40px';
    icon.style.position = 'absolute';
    icon.style.left = 'calc(50vw - 20px)';
    icon.style.top = 'calc(50vh - 20px)';
    icon.style.transform = `translate(${x}px, ${y}px)`;
    // icon.style.transition = 'width 0.5s, height 0.5s';
    icon.addEventListener('click', click)
    let delay = Math.random()*1000
    let timer1 = setTimeout(() => w[0].append(icon), delay)
    let timer2 = setTimeout(() => icon.remove(), 2000+delay)
}
popout()
let timer3 = setInterval(popout, 500)

