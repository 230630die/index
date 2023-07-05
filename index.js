
// 첫페이지 움직임 코드
const news = document.querySelector("main .first-page-container .text-wrapper");
const fp = document.querySelector("main .first-page-container");
const fph = document.querySelector("main .first-page-container").clientHeight;
const scrolled = () => {
  const fpsh = fph - scrollY;
  if(scrollY > 1) {
    $('nav').addClass('active');
    fp.style.height = fpsh + 'px';
  } else{
    $('nav').removeClass('active');
    fp.style.height = 92 +'vh';
  }
  if(scrollY > 100) {
    news.style.transform = `translate(-50% , ${scrollY-100}%)`;
  } else {
    news.style.transform = `translate(-50%, 0)`
  }
};
addEventListener("scroll", scrolled);
