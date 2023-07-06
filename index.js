const news = document.querySelectorAll("main .first-page-slide .text-wrapper");
const fp = document.querySelectorAll("main .first-page-slide");
const fip = document.querySelectorAll("main .first-page-slide .img-wrapper");
const fpo = document.querySelector("main .first-page-container").offsetTop;
const fph = document.querySelectorAll("main .first-page-slide").clientHeight;
const sp = document.querySelector("main .second-page-container");
const spo = document.querySelector("main .second-page-container").offsetTop;
const tp = document.querySelector("main .third-page-container");
const tpo = document.querySelector("main .third-page-container").offsetTop;
const fourp = document.querySelector("main .fourth-page-container")
const fouro = document.querySelector("main .fourth-page-container").offsetTop;
const footer = document.querySelector('footer');

const page = document.querySelectorAll('main .first-page-container .first-page-slide');
const next1 = document.querySelector('.next1'); 
const next2 = document.querySelector('.next2'); 
const next3 = document.querySelector('.next3'); 
const prev1 = document.querySelector('.prev1'); 
const prev2 = document.querySelector('.prev2'); 
const prev3 = document.querySelector('.prev3'); 
const counts = document.querySelectorAll('.counts');
const count11 = document.querySelector('.count1-1');
const count12 = document.querySelector('.count1-2');
const count13 = document.querySelector('.count1-3');
const count21 = document.querySelector('.count2-1');
const count22 = document.querySelector('.count2-2');
const count23 = document.querySelector('.count2-3');
const count31 = document.querySelector('.count3-1');
const count32 = document.querySelector('.count3-2');
const count33 = document.querySelector('.count3-3');
// $('a').on('click', e => {
//   e.preventDefault();
// })
const scroll1 = () => {
  if(scrollY > 1) {
    $('nav').addClass('active');
  } else{
    $('nav').removeClass('active');
  }
};
const scroll2 = () => {
  if(scrollY > 1) {
    news.forEach((a)=> {
      a.style.transform = `translate(-50% , ${scrollY-10}%)`;
    });
  } else if (scrollY < fpo) {
    news.forEach((a)=> {
      a.style.transform = `translate(-50% , 0%)`;
    });
  } else {
    news.forEach((a)=> {
      a.style.transform = `translate(-50% , 0%)`;
    });
  }
};
const scroll3 = () => {
  if(scrollY > fpo) {
    fip.forEach((a) => {
      a.style.transform = `translate(0,${-100}px)`;
    });

  }else {
    fip.forEach((a) => {
      a.style.transform = `translate(0,0)`;
    });

  }
}
const scroll4 = () => {
  if(scrollY > spo) {
    footer.style.opacity = 1;
  }else {
    footer.style.opacity = 0;
  }
}
addEventListener("scroll", scroll1);
addEventListener("scroll", scroll2);
addEventListener("scroll", scroll3);
addEventListener("scroll", scroll4);

const clicks = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[2].classList.remove('active');
    arr[1].classList.add('active');
  })
}
const clicks2 = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[1].classList.remove('active');
    arr[2].classList.add('active');
  })
}
const clicks3 = () => {
  page.forEach((a,idx,arr) =>{
    arr[1].classList.remove('active');
    arr[2].classList.remove('active');
    arr[0].classList.add('active');
  })
}
const clicks4 = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[1].classList.remove('active');
    arr[2].classList.add('active');
  })
}
const clicks5 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[1].classList.remove('active');
    arr[0].classList.add('active');
  })
}
const clicks6 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[0].classList.remove('active');
    arr[1].classList.add('active');
  })
}
const clicks11 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[1].classList.remove('active');
    arr[0].classList.add('active');
  })
}
const clicks12 = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[2].classList.remove('active');
    arr[1].classList.add('active');
  })
}
const clicks13 = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[1].classList.remove('active');
    arr[2].classList.add('active');
  })
}
const clicks21 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[1].classList.remove('active');
    arr[0].classList.add('active');
  })
}
const clicks22 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[1].classList.remove('active');
    arr[1].classList.add('active');
  })
}
const clicks23 = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[1].classList.remove('active');
    arr[2].classList.add('active');
  })
}
const clicks31 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[1].classList.remove('active');
    arr[0].classList.add('active');
  })
}
const clicks32 = () => {
  page.forEach((a,idx,arr) =>{
    arr[2].classList.remove('active');
    arr[0].classList.remove('active');
    arr[1].classList.add('active');
  })
}
const clicks33 = () => {
  page.forEach((a,idx,arr) =>{
    arr[0].classList.remove('active');
    arr[1].classList.remove('active');
    arr[2].classList.add('active');
  })
}
next1.addEventListener('click',clicks);
next2.addEventListener('click',clicks2);
next3.addEventListener('click',clicks3);

prev1.addEventListener('click',clicks4);
prev2.addEventListener('click',clicks5);
prev3.addEventListener('click',clicks6);

count11.addEventListener('click',clicks11);
count12.addEventListener('click',clicks12);
count13.addEventListener('click',clicks13);

count21.addEventListener('click',clicks21);
count22.addEventListener('click',clicks22);
count23.addEventListener('click',clicks23);

count31.addEventListener('click',clicks31);
count32.addEventListener('click',clicks32);
count33.addEventListener('click',clicks33);


const circle = document.querySelector('main .third-page-container .circle-wrapper');
const scc = circle.scroll({behavior:"smooth"})

const cs = () => {
    if (scrollY > circle.offsetTop) {
      circle.style.opacity = 1;
      circle.style.width = scrollY - 700 + 'px';
    } else {
      circle.style.opacity = 0;
      circle.style.width = 0 + 'px';
    }
  }
const effect =document.querySelectorAll('.effect');
const ef1 =document.querySelectorAll('.ef1');
const ef2 =document.querySelectorAll('.ef2');
const ef3 =document.querySelectorAll('.ef3');
const ef4 =document.querySelectorAll('.ef4');
const eftext = document.querySelector('main .third-page-container .text-wrapper')
const fe = () => {
  if(scrollY < 1200 || scrollY > fouro - 200) {
    effect.forEach((a)=> {
      a.style.opacity =0;
    });
    eftext.style.opacity=0;
  }else if((scrollY > 1200) && (scrollY < 1500)) {
    effect.forEach((a,idx,arr) => {
      arr[0].style.opacity=1;
    });
    eftext.style.opacity=1;
  }else if((scrollY > 1500) && (scrollY < 1800)) {
    effect.forEach((a,idx,arr) => {
      arr[1].style.opacity =1;
    });
    eftext.style.opacity=1;
  }else if((scrollY > 1800) && (scrollY < 2100)) {
    effect.forEach((a,idx,arr) => {
      arr[2].style.opacity =1;
  });
  eftext.style.opacity=1;
  }else if((scrollY > 2100) && (scrollY < 2400)) {
    effect.forEach((a,idx,arr) => {
      arr[3].style.opacity =1;
  }); 
  eftext.style.opacity=1;
  }else {
    effect.forEach((a) => {
      a.style.opacity=1;
    });
  }
}
// $(window).on('scroll', () => {
//   $('.')
// });
addEventListener('scroll',cs);
addEventListener('scroll',fe);


const swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


const fsize = document.querySelector('.footer-container').offsetTop

const log = () => {
  console.log(scrollY);
  console.log(fsize);
}
addEventListener("scroll",log);


const logo = document.querySelector('.logo');

const come = () => {
  scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
}
logo.addEventListener('click',come);