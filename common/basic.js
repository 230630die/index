const spo = document.querySelector("main .second-page-container").offsetTop;
const footer = document.querySelector('footer');

const Navscrolled = () => {
  if(scrollY > 1) {
    $('nav').addClass('active');
  } else{
    $('nav').removeClass('active');
  }
};


// 공용 하단바 위치 조절 
const footerscroll = () => {
  if(scrollY > spo) { /* spo 부분에는 자신이 원하는 크기 */
    footer.style.opacity = 1;
  }else {
    footer.style.opacity = 0;
  }
}

addEventListener("scroll", Navscrolled);
addEventListener("scroll", footerscroll);