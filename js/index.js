let button = document.querySelector('.yes-button');
let consent = document.querySelector('.consent');
let giga1 = document.querySelector('.giga1');
let giga2 = document.querySelector('.giga2');
let giga3 = document.querySelector('.giga3');
let giga4 = document.querySelector('.giga4');
let gigaImg1 = document.querySelector('.giga1 img');
let gigaImg2 = document.querySelector('.giga2 img');
let gigaImg3 = document.querySelector('.giga3 img');
let gigaImg4 = document.querySelector('.giga4 img');
let credits = document.querySelector('.credits');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const playMusic = () => {
let music = new Audio('./audio/gigachad.mp3');
music.volume = 0.05;
music.play();
consent.style.display = 'none';
giga1.style.display = 'block';
//setTimeout(() => { giga1.classList.add('toRight');}, 1);
//setTimeout(() => { gigaImg1.classList.add('fade-out');}, 9000);
//setTimeout(() => { giga2.style.display = 'block'; giga2.classList.add('fade-in'); }, 14801);
}

async function gigaAnimation() {
await sleep(1);
giga1.classList.add('toRight');
await sleep(9000);
gigaImg1.classList.add('fade-out');
await sleep(6000);
giga2.style.display = 'block';
giga2.classList.add('fade-in');
await sleep(100);
giga2.classList.add('toTop');
await sleep(9000);
giga1.style.display = 'none';
gigaImg2.classList.add('fade-out');
await sleep(6000);
giga3.style.display = 'block';
giga3.classList.add('fade-in');
await sleep(100);
giga3.classList.add('toLeft');
await sleep(9000);
giga2.style.display = 'none';
gigaImg3.classList.add('fade-out');
await sleep(6000);
giga4.style.display = 'block';
giga4.classList.add('fade-in');
await sleep(100);
giga4.classList.add('toTop2');
await sleep(9000);
giga3.style.display = 'none';
giga1.classList.remove('toRight');
gigaImg1.classList.remove('fade-out');
giga2.classList.remove('fade-in');
giga2.classList.remove('toTop');
gigaImg2.classList.remove('fade-out');
giga3.classList.remove('fade-in');
giga3.classList.remove('toLeft');
gigaImg3.classList.remove('fade-out');
gigaImg4.classList.add('fade-out');
await sleep(6000);
giga1.style.display = 'block';
giga1.classList.add('fade-in');
await sleep(100);
giga1.classList.add('toRight');
//repeat
await sleep(9000);
gigaImg1.classList.add('fade-out');
await sleep(6000);
credits.style.display = 'flex';
credits.classList.add('fade-in');
}

button.addEventListener('click', playMusic);
button.addEventListener('click', gigaAnimation);