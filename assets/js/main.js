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
        const isOpen = mobileMenu.classList.toggle("menu-open");
        mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
        if (isOpen) {
            menuIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden");
        } else {
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        }
    }
  
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
  
    // Close menu when link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
             mobileMenu.classList.remove("menu-open");
             mobileMenuButton.setAttribute("aria-expanded", "false");
             menuIcon.classList.remove("hidden");
             closeIcon.classList.add("hidden");
        });
    });

    const copyrightYear = document.getElementById("copyright-year");
    if (copyrightYear) {
        copyrightYear.textContent = String(new Date().getFullYear());
    }

    const projectGrid = document.getElementById("selected-project-grid");
    const projectFilters = document.getElementById("project-filters");
    const projectCount = document.getElementById("project-count");
    const projectTotal = document.getElementById("project-total");
    const loadMoreButton = document.getElementById("project-load-more");

    if (projectGrid && projectFilters && projectCount && projectTotal && loadMoreButton) {
        const projects = [
            {
                name: "Jetlia Logistics & Transport",
                meta: "Inventory & accounting · Mobile app · 2026",
                description: "Unified inventory and accounting for logistics and warehouses, with approval workflows, audit logging, analytics, and a Flutter app using the same backend APIs.",
                tech: ["Laravel", "Vue.js", "Pinia", "Flutter"],
                category: "Enterprise",
                image: "./assets/portfolio/imesh-inventory/jetlia-inventory.png",
                link: "https://requisition.ratanproducts.com/"
            },
            {
                name: "Mesh Ledger",
                meta: "Accounting management · 2026",
                description: "Multi-company accounting with role-based access, approval workflows, Firebase push notifications, dashboards, reports, and audit trails.",
                tech: ["Laravel", "Vue.js", "Pinia", "Firebase"],
                category: "Accounting",
                image: "./assets/portfolio/imesh-banking/banking.png",
                link: "https://account.imeshltd.com/dashboard"
            },
            {
                name: "Rain Hill Restaurant",
                meta: "Offline-first POS · 2026",
                description: "An offline-first POS that queues orders for background sync and prints invoices from local data to keep restaurant operations running.",
                tech: ["Laravel", "Vue.js", "REST APIs"],
                category: "POS",
                image: "./assets/portfolio/restaurent/restaurants.imeshltd.com_.png",
                link: "https://pos.rainhillrestaurant.com/"
            },
            {
                name: "United Group HRMS (UGERP)",
                meta: "Human resource management · 2026",
                description: "HR operations for M. Hossain Cotton Spinning Mills, including employee management, attendance, payroll, payslips, ID cards, and PDF/Excel exports.",
                tech: ["Laravel", "Vue.js", "MySQL", "Linux VPS"],
                category: "HRMS",
                link: "https://ugerp.com/login"
            },
            {
                name: "Ratan Group HRMS",
                meta: "Human resource management · 2026",
                description: "Upgraded attendance, payroll, payslips, employee profiles, and HR reports, with DigitalOcean deployment and zero-downtime CI/CD releases.",
                tech: ["Laravel", "MySQL", "DigitalOcean", "GitHub Actions"],
                category: "HRMS",
                link: "https://hrms.ratangroupbd.com/"
            },
            {
                name: "Proptinize Lead CRM",
                meta: "Real estate CRM · 2025",
                description: "Property sales and rental workflows for bookings, lead tracking, agent assignment, and feedback, plus a property management module.",
                tech: ["Laravel", "Vue.js", "MySQL"],
                category: "CRM",
                image: "./assets/portfolio/proptinize-lead-crm/admin-dashboard-crm.jpg",
                link: "https://www.proptinize.tech/"
            },
            {
                name: "UnboundBD",
                meta: "Travel & tour platform · 2025",
                description: "System architecture, database schema, and admin workflows for tour orders, approvals, and secure payments across standard and custom packages.",
                tech: ["Laravel", "MySQL", "Payments"],
                category: "E-commerce",
                image: "./assets/portfolio/travel-and-tour/tour-font.jpg",
                link: "https://www.bangladeshunbound.com/"
            },
            {
                name: "T-Ranz",
                meta: "Vehicle rental platform · Australia · 2024",
                description: "A responsive vehicle rental platform for bookings, fleet management, customer tracking, and streamlined reservation workflows.",
                tech: ["Laravel", "Tailwind CSS", "MySQL"],
                category: "Fleet",
                image: "./assets/portfolio/tranz/tranz.png",
                link: "https://www.t-ranz.com.au/"
            },
            {
                name: "Sodai",
                meta: "POS & inventory management · 2026",
                description: "Retail billing, purchasing, stock validation, customer dues, barcode invoices, sales reports, and shop-level inventory access.",
                tech: ["Laravel", "Vue.js", "Pinia"],
                category: "POS",
                link: "https://pos.sodaids.com/pos"
            },
            {
                name: "Production Target Management",
                meta: "Manufacturing planning · 2026",
                description: "Production target creation, updates, closure workflows, and progress reports with role-based access and geolocation login validation.",
                tech: ["Laravel", "Vue.js", "REST APIs"],
                category: "Manufacturing",
                link: "https://production.ratanproducts.com/login"
            },
            {
                name: "Mustard-oil",
                meta: "Inventory & dealer distribution · 2026",
                description: "Inventory and distribution workflows for warehouses, product variants, dealer payments, dashboards, and audit logging.",
                tech: ["Laravel", "Vue.js", "Pinia"],
                category: "Inventory",
                link: "https://mustard-oil.imeshltd.com/dashboard"
            },
            {
                name: "Ratan Group VMS",
                meta: "Fleet & vehicle management · 2026",
                description: "Fleet management application with production deployment and ongoing infrastructure maintenance.",
                tech: ["NestJS", "Prisma", "PostgreSQL", "PM2"],
                category: "Fleet",
                link: "https://vms.jetliatl.com/"
            },
            {
                name: "RCCTLBD",
                meta: "Inventory management · 2026",
                description: "Raw-material and product-variant workflows covering packaging, stock validation, transactions, sales, dashboards, and reports.",
                tech: ["Laravel", "Vue.js", "Pinia", "REST APIs"],
                category: "Inventory",
                link: "https://rcctlbd.imeshltd.com/dashboard"
            },
            {
                name: "Millennium Specialized Hospital",
                meta: "Healthcare website · 2026",
                description: "A dynamic hospital website with an admin panel and database-driven content management.",
                tech: ["Laravel", "MySQL"],
                category: "Website",
                image: "./assets/portfolio/mshlbd/mshlbd.png",
                link: "http://mshlbd.com/"
            },
            {
                name: "Kikinben",
                meta: "E-commerce · 2025",
                description: "E-commerce platform improvements, bug fixes, server maintenance, and production deployments.",
                tech: ["PHP", "MySQL", "Bootstrap"],
                category: "E-commerce",
                image: "./assets/portfolio/kikinben/kikinben.com_.png",
                link: "https://kikinben.com/"
            },
            {
                name: "Secure CRM",
                meta: "Banking · Debt management · 2024",
                description: "A banking debt-settlement and debt-management system with end-to-end business workflows.",
                tech: ["Laravel", "MySQL"],
                category: "CRM",
                image: "./assets/portfolio/securecrm/secure-crm-square.png"
            },
            {
                name: "Fire Recruitment Australia",
                meta: "e-Learning platform · 2024",
                description: "Large-dataset reporting and administration workflows for an e-learning platform.",
                tech: ["Laravel", "Filament PHP", "DOMPDF"],
                category: "Platform",
                image: "./assets/portfolio/fra/fra.png",
                link: "https://firerecruitmentaustralia.com.au/"
            },
            {
                name: "BooksBD",
                meta: "E-commerce · 2023",
                description: "Order and transaction management, mPDF report design, requirements analysis, and database design.",
                tech: ["PHP", "MySQL", "mPDF"],
                category: "E-commerce",
                image: "./assets/portfolio/booksbd/booksbd.png",
                link: "https://bdbooks.net/"
            },
            {
                name: "VMS (BSRM)",
                meta: "Inventory & VAT · 2022",
                description: "Inventory and VAT features, MS SQL database design, mPDF reports, API testing, and documentation.",
                tech: ["PHP", "MS SQL", "mPDF", "REST APIs"],
                category: "Enterprise",
                link: "https://bsrm.com/"
            },
            {
                name: "SCV",
                meta: "Revenue-management ERP · 2022",
                description: "Custom ERP with core financial workflows, housekeeping modules, and operational reports.",
                tech: ["PHP", "MySQL"],
                category: "Enterprise",
                link: "https://scb.gov.bd/"
            },
            {
                name: "PathEdits24",
                meta: "Visualisation & photo-editing · 2022",
                description: "An end-to-end creative services platform with secure bulk uploads, payments, and automated delivery.",
                tech: ["Laravel", "MySQL", "Payments"],
                category: "E-commerce",
                image: "./assets/portfolio/pathedits24/pathedits24.com.png",
                link: "https://pathedits24.com/"
            },
            {
                name: "Zayan Tech",
                meta: "Corporate website · 2022",
                description: "A corporate promotional website for a technology company.",
                tech: ["PHP", "Bootstrap"],
                category: "Website",
                image: "./assets/portfolio/zayantech/zayan-tech.com.png",
                link: "https://www.zayan-tech.com/"
            }
        ];

        const categories = ["All", ...new Set(projects.map(project => project.category))];
        const escapeHTML = value => value.replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
        let activeCategory = "All";
        let visibleProjects = 9;

        projectTotal.textContent = String(projects.length);
        projectFilters.innerHTML = categories.map((category, index) =>
            `<button class="project-filter${index === 0 ? " is-active" : ""}" type="button" data-category="${escapeHTML(category)}" aria-pressed="${index === 0}">${escapeHTML(category)}<span>${category === "All" ? projects.length : projects.filter(project => project.category === category).length}</span></button>`
        ).join("");

        const renderProjects = () => {
            const matchingProjects = projects.filter(project =>
                activeCategory === "All" || project.category === activeCategory
            );
            const shownProjects = matchingProjects.slice(0, visibleProjects);

            projectGrid.innerHTML = shownProjects.map(project => {
                const initials = project.name.split(/\s+/).slice(0, 2).map(word => word[0]).join("");
                const visual = project.image
                    ? `<img class="selected-project-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.name)} project preview" loading="lazy" width="640" height="400"><span class="project-initials" aria-hidden="true">${escapeHTML(initials)}</span>`
                    : `<span class="project-initials">${escapeHTML(initials)}</span>`;
                const technologies = project.tech.map(technology =>
                    `<span>${escapeHTML(technology)}</span>`
                ).join("");
                const projectLink = project.link
                    ? `<a class="selected-project-link" href="${escapeHTML(project.link)}" target="_blank" rel="noopener noreferrer">Explore project <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>`
                    : `<span class="selected-project-link project-link-private">Private project <i class="bi bi-lock" aria-hidden="true"></i></span>`;

                return `<article class="selected-project-card">
                    <div class="selected-project-visual${project.image ? "" : " has-no-image"}">${visual}
                        <span class="selected-project-number">${String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                        <span class="selected-project-category">${escapeHTML(project.category)}</span>
                        ${projectLink}
                    </div>
                    <div class="selected-project-copy">
                        <p class="selected-project-meta">${escapeHTML(project.meta)}</p>
                        <h3>${escapeHTML(project.name)}</h3>
                        <p class="selected-project-description">${escapeHTML(project.description)}</p>
                        <div class="selected-project-tech">${technologies}</div>
                    </div>
                </article>`;
            }).join("");

            projectGrid.querySelectorAll(".selected-project-image").forEach(image => {
                image.addEventListener("error", () => {
                    image.closest(".selected-project-visual").classList.add("has-no-image");
                }, { once: true });
            });

            projectCount.textContent = `Showing ${shownProjects.length} of ${matchingProjects.length} projects`;
            loadMoreButton.hidden = shownProjects.length >= matchingProjects.length;
            loadMoreButton.innerHTML = `Load more projects <i class="bi bi-arrow-down" aria-hidden="true"></i>`;
        };

        projectFilters.addEventListener("click", event => {
            const button = event.target.closest("button[data-category]");
            if (!button) return;

            activeCategory = button.dataset.category;
            visibleProjects = 9;
            projectFilters.querySelectorAll(".project-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("is-active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });
            renderProjects();
        });

        loadMoreButton.addEventListener("click", () => {
            visibleProjects += 9;
            renderProjects();
        });

        renderProjects();
    }
  
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
