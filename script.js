
"use strict";

const revealSections = document.querySelectorAll(
    ".reveal-section"
);

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


if (reducedMotion) {

    revealSections.forEach((section) => {
        section.classList.add("is-visible");
    });

} else {

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                } else {

                    entry.target.classList.remove("is-visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealSections.forEach((section) => {
        revealObserver.observe(section);
    });

}
