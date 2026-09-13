// Nova Labs — minimal progressive enhancement
(function () {
  "use strict";

  // Current year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal-on-scroll for product cards & principles
  var revealTargets = document.querySelectorAll(
    ".product, .principle, .company-inner, .contact-inner"
  );

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach(function (el) { el.style.opacity = 1; });
    return;
  }

  revealTargets.forEach(function (el) {
    el.style.opacity = 0;
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity .5s cubic-bezier(.2,0,0,1), transform .5s cubic-bezier(.2,0,0,1)";
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(function (el) { io.observe(el); });
})();
