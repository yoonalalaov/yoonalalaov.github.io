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