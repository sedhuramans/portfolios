// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // If nav menu is not displayed, show it with animation
            if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'white';
                navMenu.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
                navMenu.style.padding = '20px 0';
                
                // Animate each menu item
                const navItems = navMenu.querySelectorAll('li');
                navItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.style.margin = '15px 0';
                    item.style.textAlign = 'center';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                // Hide the menu
                const navItems = navMenu.querySelectorAll('li');
                navItems.forEach((item) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                });
                
                setTimeout(() => {
                    navMenu.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                item.classList.toggle('active');
            });
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just log it and show an alert
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! In a real application, this would be sent to a server.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Hamburger Animation
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Scroll Animation for Sections
    const sections = document.querySelectorAll('section');
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            }
        });
    }
    
    // Add initial styles for sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Define the 'show' class in JavaScript
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            section.show {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
    
    // Check sections on initial load
    window.addEventListener('load', checkSections);
    // Check sections on scroll
    window.addEventListener('scroll', checkSections);
    
    // Responsive Navigation
    function handleResponsiveNav() {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.position = 'static';
            navMenu.style.boxShadow = 'none';
            navMenu.style.padding = '0';
            
            const navItems = navMenu.querySelectorAll('li');
            navItems.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.margin = '0';
                item.style.marginLeft = '30px';
                item.style.textAlign = 'left';
            });
            
            // Reset hamburger
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        } else if (hamburger && !hamburger.classList.contains('active')) {
            navMenu.style.display = 'none';
        }
    }
    
    // Handle responsive navigation on window resize
    window.addEventListener('resize', handleResponsiveNav);
    // Initialize responsive navigation
    handleResponsiveNav();
});