document.addEventListener('DOMContentLoaded', () => {
    const scrollDownIcon = document.querySelector('.scroll-down img');
    const goTopIcon = document.querySelector('.scroll-up img');
    const scrollDownContainer = document.querySelector('.scroll-down');
    const goTopContainer = document.querySelector('.scroll-up');
    const aboutSection = document.querySelector('#about');

    // Scroll to the "about" section
    const scrollToAbout = () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Toggle the visibility of the scroll icons based on scroll position
    const toggleIcons = () => {
        const scrollPosition = window.scrollY;
        const aboutSectionTop = aboutSection.offsetTop;

        // Hide the scroll-down icon and show the scroll-up icon once we reach the "about" section
        if (scrollPosition >= aboutSectionTop) {
            scrollDownContainer.classList.add('hidden');
            goTopContainer.classList.remove('hidden');
        } else {
            scrollDownContainer.classList.remove('hidden');
            goTopContainer.classList.add('hidden');
        }
    };

    // Attach event listeners
    scrollDownIcon.addEventListener('click', scrollToAbout);
    goTopIcon.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleIcons);

    // Initial call to toggleIcons to set correct state on page load
    toggleIcons();
});
