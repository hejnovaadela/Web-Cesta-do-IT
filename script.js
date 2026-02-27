document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta'); // Close menu on link click

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Syntax accessibility
            const isExpanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    }

    // Header Scroll Effect
    // Adjust header background on scroll
    const updateHeader = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Check on load

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay if data-delay is present
                const delay = entry.target.getAttribute('data-delay');

                if (delay) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, delay);
                } else {
                    entry.target.classList.add('in-view');
                }

                // Stop observing once animated (optional, depends on preference, keeps it cleaner)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const submitBtnText = submitBtn.querySelector('span');

            formResult.innerHTML = "Odesílám...";
            formResult.style.display = "block";
            formResult.className = "form-result loading";
            submitBtn.disabled = true;

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        formResult.innerHTML = "Zpráva byla úspěšně odeslána! Ozvu se vám co nejdříve.";
                        formResult.className = "form-result success";
                        contactForm.reset();
                    } else {
                        console.log(response);
                        formResult.innerHTML = json.message || "Něco se nepovedlo. Zkuste to prosím znovu.";
                        formResult.className = "form-result error";
                    }
                })
                .catch(error => {
                    console.log(error);
                    formResult.innerHTML = "Omlouvám se, došlo k chybě při spojení se serverem.";
                    formResult.className = "form-result error";
                })
                .then(function () {
                    submitBtn.disabled = false;
                    setTimeout(() => {
                        // formResult.style.display = "none";
                    }, 5000);
                });
        });
    }
});
