
// 첫페이지 움직임 코드
const news = document.querySelector("main .first-page-container .text-wrapper");
const fp = document.querySelector("main .first-page-container");
const fph = document.querySelector("main .first-page-container").clientHeight;
const sp = document.querySelector("main .second-page-container");
const tp = document.querySelector("main .third-page-container");
const scrolled = () => {
  const fpsh = fph - scrollY;
  if(scrollY > 1) {
    $('nav').addClass('active');
    fp.style.height = fpsh + 'px';
  } else{
    $('nav').removeClass('active');
    fp.style.height = 92 +'vh';
  }
};
const newscroll = () => {
  if(scrollY > 100) {
    news.style.transform = `translate(-50% , ${scrollY-100}%)`;
  } else {
    news.style.transform = `translate(-50%, 0)`
  }
}
if (scrollY < 1200) {
  addEventListener('scroll',newscroll);
} else {

}
// if (scrollY < sp.offsetTop){
//   addEventListener("scroll", scrolled);
// } else {
//   removeEventListener ('scroll',scrolled);
// }
addEventListener("scroll",scrolled);

const circle = document.querySelector('main .third-page-container .circle-wrapper');
const scc = circle.scroll({behavior:"smooth"})
function cs1() {
  const cs = () => {
    console.log(scrollY-circle.offsetTop);
    if (scrollY > circle.offsetTop) {
      circle.style.width = scrollY + 'px';
    } else {
      circle.style.width = 0 + 'px';
    }
  }
  addEventListener('scroll',cs);
}
setInterval(cs1, 1000);

// document.addEventListener("scroll",(e) => {
//   document.querySelector('main .third-page-container .circle-wrapper')
// })