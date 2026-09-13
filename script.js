if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

  const revealEls = document.querySelectorAll("[data-reveal]");

  revealEls.forEach((el) => el.classList.add("reveal-pending"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => observer.observe(el));

}
