document.addEventListener("DOMContentLoaded", function () {
    // --- Preloader Logic ---
    document.getElementById('loadButton').addEventListener('click', () => {
        const preloader = document.getElementById('preloader');
        const circleClip = document.getElementById('circle-clip');
        const preloaderContent = document.getElementById('preloader-content');

        // Apply the sweep-up animation and fade out the preloader content
        preloader.classList.add('sweep-up');
        preloaderContent.style.opacity = '0';
        circleClip.style.opacity = '0';

        // After 1.3 seconds, hide the preloader elements and re-enable scrolling
        setTimeout(() => {
            preloader.style.display = 'none';
            circleClip.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 1300);
    });

    // --- Projects Section Animation ---
    const projectSection = document.getElementById("projects");
    const projectBars = document.querySelectorAll(".project-bar");
    const expandingDot = document.querySelector(".expanding-dot");

    // Create an IntersectionObserver to watch the projects section
    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Expand the dot by adding the "expand" class
                if (expandingDot) {
                    expandingDot.classList.add("expand");
                }
                // Animate each project bar by setting its width from its data-width attribute
                projectBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
                // Unobserve the section so the animation fires only once
                observer.unobserve(projectSection);
            }
        });
    }, { threshold: 0.3 }); // Adjust threshold as needed

    projectObserver.observe(projectSection);
});
