
// 첫페이지 움직임 코드
const news = document.querySelector("main .first-page-container .first-page-container-txt-wrapper");
const fp = document.querySelector("main .first-page-container");
const fph = document.querySelector("main .first-page-container").clientHeight;
const scrolled = () => {
  const fpsh = fph - scrollY;
  fp.style.height = fpsh + 'px';
  if(scrollY > 100) {
    // news.style.bottom = -scrollY + 100 + 'px';
    news.style.transform = `translate(-50% , ${scrollY-100}%)`;
  }else{
    fp.style.height = 90+'vh';
    news.style.transform = `translate(-50%, 0)`
  }
};
addEventListener("scroll", scrolled);
