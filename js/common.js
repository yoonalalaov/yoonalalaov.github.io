const header = document.getElementById('hd');
let lastScroll = 0;

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

if (currentScroll > lastScroll && currentScroll > 50) {
    // 스크롤 내릴 때
    header.classList.add('--hide');
} else {
    // 스크롤 올릴 때
    header.classList.remove('--hide');
}

lastScroll = currentScroll;
});