
// 첫페이지 움직임 코드
const news = document.querySelector(".news");
const fp = document.querySelector("main .first-page");
const fph = document.querySelector("main .first-page").clientHeight;
const scrolled = () => {
  const fpsh = fph - scrollY;
  const nwsh = fpsh - fph - scrollY;
  fp.style.height = 300 + fpsh + 'px';
  if(scrollY > 300) {
    news.style.transform = `translate(-50% , ${-nwsh - 700}px)`;
  }else{
    fp.style.height = 90+'vh';
    news.style.transform = `translate(-50%, 0)`
  }
};
addEventListener("scroll", scrolled);
