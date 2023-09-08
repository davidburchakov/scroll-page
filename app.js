const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
// END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// Set up ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Text Animation
const textAnim = gsap.fromTo(text, { opacity: 1 }, { opacity: 0, duration: 3 });

ScrollTrigger.create({
  animation: textAnim,
  trigger: intro,
  start: "top top",
  end: "bottom top",
  scrub: true, // This enables the animation to follow the scroll position
});

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

gsap.to(intro, {
  scrollTrigger: {
    trigger: intro,
    start: "1px 1px",
    end: "bottom+=1000px top",
    markers: true,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      scrollpos = self.progress*10;
    },
  },
  onUpdate: () => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);
    video.currentTime = delay;
  },
});