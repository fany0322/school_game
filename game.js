let a = document.getElementsByClassName('hog')[0]
let w = document.getElementsByClassName('box3')
let score=document.getElementsByClassName('score_box')[0]
let box = document.getElementsByClassName('rank')[0]
let rankb = document.getElementsByClassName('rank_box')[0]
let m=0
let count=0
// let x1 = w.offsetLeft
async function click(e){
    if (e.target.className !== 'animate') {
        e.target.src = 'dead.png'
        e.target.className = 'animate'
        let result1 = await postScore()
        let result2 = await insertScore()
    } else {
        return
    }


}
function fade(icon){
    icon.className='animate3'
    let fadeTimer = setTimeout(() => icon.remove(), 300)
}
function popout() {
    window.innerWidth // 가로길이
    window.innerHeight // 세로길이
    let x = Math.floor(Math.random()*window.innerWidth*0.8-40) - (window.innerWidth*0.8-40)/2;
    let y = Math.floor(Math.random()*480) - 240;
    let icon = document.createElement('img')
    icon.src = 'hog.png';
    icon.style.width = '40px';
    icon.style.height = '40px';
    icon.style.position = 'absolute';
    icon.className = 'animate2';
    icon.style.left = 'calc(50vw - 20px)';
    icon.style.top = 'calc(50vh - 20px)';
    icon.style.transform = `translate(${x}px, ${y}px)`;
    // icon.style.transition = 'width 0.5s, height 0.5s';
    icon.addEventListener('click', click)
    let delay = Math.random()*1000
    let timer1 = setTimeout(() => w[0].append(icon), delay)
    let timer2 = setTimeout(() => fade(icon), 2000+delay)
}
popout()
let timer3 = setInterval(popout, 500)
function rankBox(){
    console.log(rankb.style.display)
    if(rankb.style.display==="none"){
        rankb.style.display="flex"; 
        box.innerText="랭크닫기"
        box.style.left="59vw";
    }else{
        rankb.style.display="none"; 
        box.innerText="랭크보기"
        box.style.left="";
    }
}
