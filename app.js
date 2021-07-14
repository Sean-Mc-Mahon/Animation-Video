const intro = document.querySelector(".intro");
const video = document.querySelector("video");
const text = intro.querySelector("h1");
//End Section
const section = document.querySelector("section");
const end = section.querySelector("h1");

//Scroll Magic
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
  duration: 400,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);
console.log(video.duration);

//Video Animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //   console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.3);
