const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 55,
  onComplete: (self) => {
    document.querySelector(".typed-cursor").classList.add("d-none");
    document.querySelector(".quote").classList.remove("hidden");
  },

});

window.onload = function() {
  Particles.init({
    selector: '.background',
    color: "#FFFFFF",
    connectParticles: true,
    maxParticles: 70,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 20,
        }
      }
    ]
  });
};

AOS.init();

