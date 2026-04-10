document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .hero-content");

  sections.forEach(section => {
    section.classList.add("reveal");
  });

  const revealOnScroll = () => {
    sections.forEach(section => {
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const revealPoint = 100;

      if (sectionTop < windowHeight - revealPoint) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});