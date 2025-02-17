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
    const projectBars = document.querySelectorAll(".project-bar");

    if (projectBars.length > 0) {
        const projectObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.dataset.width;
                    observer.unobserve(entry.target); // Stop observing this bar after animating
                }
            });
        }, { threshold: 0.3 });

        projectBars.forEach(bar => projectObserver.observe(bar));
    }
});
