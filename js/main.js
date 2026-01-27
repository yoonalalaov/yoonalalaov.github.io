/*
class Scrooth {
    constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
        this.element = element;
        this.distance = strength;
        this.acceleration = acceleration;
        this.deceleration = deceleration;
        this.running = false;

        this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
        this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
        this.scroll = this.scroll.bind(this);
    }

    scrollHandler(e) {
        e.preventDefault();

        if (!this.running) {
            this.top = this.element.pageYOffset || this.element.scrollTop || 0;
            this.running = true;
            this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
            this.isDistanceAsc = true;
            this.scroll();
        } else {
            this.isDistanceAsc = false;
            this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
        }
    }

    scroll() {
        if (this.running) {
            this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
            Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
            Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

            this.top += this.currentDistance;
            this.element.scrollTo(0, this.top);
            
            requestAnimationFrame(this.scroll);
        }
    }
}

const scroll = new Scrooth({
    element: window,
    strength: 25,
    acceleration: 2,
    deceleration: 0.9,
});
*/

  // Lenis 초기화
  const lenis = new Lenis({
    duration: 1.2, // 스크롤 속도
    easing: t => t, // easing 함수 (linear)
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 앵커 링크 클릭 부드럽게 이동
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        lenis.scrollTo(target);
      }
    });
  });



const letterSwiper01 = new Swiper(
  "#projects .letter__swiper.--01 .swiper",
  {
    speed: 40000,
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  }
);

let letterSwiper02 = new Swiper(
	"#projects .letter__swiper.--02 .swiper",
	{
        speed: 45000,
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
        },
	}
);


let letterSwiper03 = new Swiper(
	"#projects .letter__swiper.--03 .swiper",
	{
        speed: 50000, // 살짝 느리게
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        autoplay: {
        delay: 0,
        disableOnInteraction: false,
        },
	}
);


let section__visual__swiper = new Swiper(
	"#main .section__visual .visual__swiper",
	{
		loop: true,
		speed: 1000,
		effect: "fade",
		autoplay: {
			delay: 2500,
		},
	}
);

let projects__swiper = new Swiper(
	"#projects .main__box.--01 .img__swiper",
	{
		loop: true,
		speed: 1000,
		effect: "fade",
		autoplay: {
			delay: 2500,
		},
	}
);


// /* ==================== resume ==================== */
// const el_resume = $("#resume");
// const tl_resume = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: "#resume",
// 		start: "-20% 50%",
// 		end: "50% 50%",
// 		scrub: 5,
// 	},
// });

// tl_resume
// .from(el_resume.find(".main__container > *"), {
//     y: 50,
//     opacity: 0,
//     stagger: 0.1,
// })



// /* ==================== contact ==================== */
// const el_contact = $("#contact");
// const tl_contacts = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: "#contact",
// 		start: "-20% 50%",
// 		end: "50% 50%",
// 		scrub: 5,
// 	},
// });

// tl_contacts
// .from(el_contact.find(".main__container > *"), {
//     y: 50,
//     opacity: 0,
//     stagger: 0.1,
// })


function goTo(to){
    $('html, body').stop().animate({scrollTop : to});
};

function goToEle(ele){
    var to = $(ele).position().top;
    goTo(to);
}