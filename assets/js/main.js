document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("icon-sun");
    const moonIcon = document.getElementById("icon-moon");
    const htmlElement = document.documentElement;
  
    // Check for saved theme preference or use default
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        htmlElement.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
  
    themeToggle.addEventListener("click", () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.theme = 'light';
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            htmlElement.classList.add('dark');
            localStorage.theme = 'dark';
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    });
  
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  
    function toggleMobileMenu() {
        if (mobileMenu.classList.contains("translate-y-0")) {
            // Close
            mobileMenu.classList.remove("translate-y-0");
            mobileMenu.classList.add("-translate-y-full");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        } else {
            // Open
            mobileMenu.classList.remove("-translate-y-full");
            mobileMenu.classList.add("translate-y-0");
            menuIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden");
        }
    }
  
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
  
    // Close menu when link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
             // Close
             mobileMenu.classList.remove("translate-y-0");
             mobileMenu.classList.add("-translate-y-full");
             menuIcon.classList.remove("hidden");
             closeIcon.classList.add("hidden");
        });
    });
  
    // Typed.js Animation (if library loaded)
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: ['Laravel Developer', 'Vue.js Developer', 'PHP Expert', 'Full-Stack Engineer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500
        });
    }

    // Scroll Animation (IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                entry.target.classList.remove('opacity-0');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('opacity-0'); // hide initially
        observer.observe(el);
    });

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 100,
            duration: 800,
        });
    }

    // Scroll Spy / Active Menu Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Click Handler for manual active state
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
             navLinks.forEach(l => {
                 l.classList.remove("active", "text-teal-600", "bg-teal-50", "dark:text-teal-400", "dark:bg-teal-900/10");
                 l.classList.add("text-gray-700", "dark:text-gray-300");
             });
             link.classList.remove("text-gray-700", "dark:text-gray-300");
             link.classList.add("active", "text-teal-600", "bg-teal-50", "dark:text-teal-400", "dark:bg-teal-900/10");
        });
    });

    const scrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    navLinks.forEach((link) => {
                        link.classList.remove("active", "text-teal-600", "bg-teal-50", "dark:text-teal-400", "dark:bg-teal-900/10");
                        link.classList.add("text-gray-700", "dark:text-gray-300");
                    });

                    // Add active class to the current link
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.remove("text-gray-700", "dark:text-gray-300");
                        activeLink.classList.add("active", "text-teal-600", "bg-teal-50", "dark:text-teal-400", "dark:bg-teal-900/10");
                    }
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

    sections.forEach((section) => {
        scrollObserver.observe(section);
    });

    // Portfolio Modal logic
window.openImage = function(src, title, description) {
    const fullView = document.getElementById("fullView");
    const fullImage = document.getElementById("fullImage");
    const fullTitle = document.getElementById("fullTitle");
    const fullDescription = document.getElementById("fullDescription");

    fullView.classList.remove("hidden");
    // Add entering animation
    fullView.classList.add("animate-fadeIn");
    
    fullImage.src = src;
    fullTitle.innerText = title;
    fullDescription.innerText = description;
}

window.closeImage = function() {
    const fullView = document.getElementById("fullView");
    fullView.classList.add("hidden");
    fullView.classList.remove("animate-fadeIn");
}
});
