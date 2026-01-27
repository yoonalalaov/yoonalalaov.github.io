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

$('#mob__btn').on('click', function(){
  $('#mob__btn, #gnb.--mob').toggleClass('--active')


  if($(this).hasClass('--active')){
    $(this).text('CLOSE')
  } else {
    $(this).text('MENU')
  }
})

$(document).keydown(function(event) {
    if ( event.keyCode == 27 || event.which == 27 ) {
        // esc 입력
        $('#mob__btn, #gnb.--mob').removeClass('--active')
    $('#mob__btn').text('MENU')
    }
});


$(function(){
    $('#gnb .gnb__item a').on('click', function(){
        $('#mob__btn, #gnb.--mob').removeClass('--active')
    $('#mob__btn').text('MENU')
    })
})
