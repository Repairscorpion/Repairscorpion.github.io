// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        navbar.style.backgroundColor = 'rgba(6, 11, 19, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'rgba(6, 11, 19, 0.85)';
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Unobserve after revealing to animate only once
            // observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Typewriter effect for mono greeting
document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.querySelector('.mono-greeting');
    if(greeting) {
        const text = ">$ whoami";
        greeting.textContent = "";
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                greeting.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 500);
    }
});

// Certificate Filtering
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.cert-card');
    const certGroups = document.querySelectorAll('.cert-group');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Filter cards
                certCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Hide empty groups
                certGroups.forEach(group => {
                    let hasVisible = false;
                    const cardsInGroup = group.querySelectorAll('.cert-card');
                    cardsInGroup.forEach(c => {
                        if (c.style.display !== 'none') {
                            hasVisible = true;
                        }
                    });

                    if (hasVisible) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                });
            });
        });
    }
});
