let a = document.getElementsByClassName('hog')[0]
let w = document.getElementsByClassName('box3')
let score=document.getElementsByClassName('score_box')[0]
let box = document.getElementsByClassName('rank')[0]
let rankb = document.getElementsByClassName('rank_box')[0]
let m=0
let count=0
// let x1 = w.offsetLeft
//클릭했을 때 캐릭터의 이미지를 죽은 걸로 바꾸고 점수를 저장하는 함수를 실행하도록 하는 함수
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
//사라지게 하는 함수
function fade(icon){
    icon.className='animate3'
    let fadeTimer = setTimeout(() => icon.remove(), 300)
}
function popout() {
    let x;
    //창 넓이의 크기에 따라 달라지는 랜덤의 범위
    if (window.innerWidth > 480) {
        x = Math.floor(Math.random()*360) - 180;
    } else {
        x = Math.floor(Math.random()*window.innerWidth*0.75-40) - (window.innerWidth*0.75-40)/2;
    }
    
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
    //캐릭터를 일정한 시간후에 나오게 한 후 일정한 시간이 지나면 사라지게 하는 함수 실행
    let timer1 = setTimeout(() => w[0].append(icon), delay)
    let timer2 = setTimeout(() => fade(icon), 2000+delay)
}
popout()
let timer3 = setInterval(popout, 500)
function rankBox(){
    console.log(rankb.style.display)
    // 랭크보기 버틑을 눌렀을때 나오는 화면 
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
