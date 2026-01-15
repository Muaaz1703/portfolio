        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };

        // Check on load and scroll
        window.addEventListener('load', fadeInOnScroll);
        window.addEventListener('scroll', fadeInOnScroll);

        

        // Touch event support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - close menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }

        // Prevent zoom on double-tap for mobile
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);








const textArray = [
    "Web Designer & Developer"
   
];

let typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = textArray[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();





/* VIDEO HOVER */
document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
    });
    card.addEventListener('mouseleave', () => {
        video.pause();
    });
});

/* GALLERY DATA */
const projects = {
    taste: [
        "images/taste-1.png",
        "images/taste-2.png",
        "images/taste-3.png",
        "images/taste-4.png",

        "images/taste-5.png"
    ],
    easeshop: [
        "images/easeshop-1.png",
        "images/easeshop-2.png",
        "images/easeshop-3.png",
        "images/easeshop-4.png"
    ],
  woodora: [
        "images/woodora-1.png",
        "images/woodora-2.png",
        "images/woodora-3.png",

        "images/woodora-4.png",
        "images/woodora-5.png",
        "images/woodora-6.png"
    ],
  roastly: [
      
        "images/roastly-1.png"
    ],
  nutrapro: [
        "images/protein-1.png",
        "images/protein-2.png",
        "images/protein-3.png",
        "images/protein-4.png",
        "images/protein-5.png",
        "images/protein-6.png",
        "images/protein-7.png",


        "images/protein-8.png",
        "images/protein-9.png",
        "images/protein-10.png",
        "images/protein-11.png",
        "images/protein-12.png",
        "images/protein-13.png"

    ]
};

function openGallery(project) {
    const container = document.getElementById("galleryImages");
    container.innerHTML = "";
    projects[project].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
    });
    document.getElementById("designGallery").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    document.getElementById("designGallery").style.display = "none";
    document.body.style.overflow = "auto";
}








 document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Get the target tab ID
                    const targetTab = button.getAttribute('data-tab');
                    
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show the target tab content
                    document.getElementById(targetTab).classList.add('active');
                });
            });
            
            // Add a subtle hover effect to skill items
            const skillItems = document.querySelectorAll('.skill-list li');
            skillItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Optional: Add keyboard navigation for tabs
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    const activeTab = document.querySelector('.tab-btn.active');
                    let nextTab;
                    
                    if (e.key === 'ArrowRight') {
                        nextTab = activeTab.nextElementSibling || tabButtons[0];
                    } else if (e.key === 'ArrowLeft') {
                        nextTab = activeTab.previousElementSibling || tabButtons[tabButtons.length - 1];
                    }
                    
                    if (nextTab) {
                        nextTab.click();
                        nextTab.focus();
                    }
                }
            });
        });















const track = document.querySelector('.testimonial-track');
const cards = document.querySelectorAll('.testimonial-card');
let index = 0;

function slideTestimonials() {
    const cardWidth = cards[0].offsetWidth + 20;
    index++;

    if (index > cards.length - 1) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(slideTestimonials, 3000);


