document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".content-container");

    const revealOnScroll = () => {
        containers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                container.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();
});