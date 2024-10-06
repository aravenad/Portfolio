document.addEventListener('DOMContentLoaded', () => {
    const scrollDownIcon = document.querySelector('.scroll-down img');
    const goTopIcon = document.querySelector('.scroll-up img');
    const aboutSection = document.querySelector('#about');
    const scrollDownContainer = document.querySelector('.scroll-down');
    const goTopContainer = document.querySelector('.scroll-up');

    // Event handlers
    const scrollToAbout = () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleIcons = () => {
        const scrollPosition = window.scrollY;
        const aboutHeight = aboutSection.offsetHeight;

        if (scrollPosition >= aboutHeight) {
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
});
