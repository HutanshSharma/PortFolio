// Animation-specific JavaScript

// Header Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Typing Effect for Hero Section
function createTypingEffect() {
  const descriptionElement = document.querySelector('.description');
  
  if (descriptionElement) {
    const originalText = descriptionElement.textContent;
    descriptionElement.textContent = '';
    descriptionElement.classList.add('typewriter');
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        descriptionElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1500);
  }
}

// Parallax Effect for Hero Section
function addParallaxEffect() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
  }
}

// Smooth Reveal Animation for Timeline Items
function animateTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// Animated Counter for Skills
function animateCounters() {
  const counters = document.querySelectorAll('.skill-percentage');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    let count = 0;
    const speed = 2000 / target; // Adjusts speed based on target value
    
    const updateCounter = () => {
      if (count < target) {
        count++;
        counter.textContent = count + '%';
        setTimeout(updateCounter, speed);
      } else {
        counter.textContent = target + '%';
      }
    };
    
    // Start counter when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// Tilt Effect for Project Cards
function addTiltEffect() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      // Calculate tilt values (smaller values for subtle effect)
      const tiltX = (mouseY / cardRect.height) * 10;
      const tiltY = -(mouseX / cardRect.width) * 10;
      
      // Apply transform
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
      // Reset transform
      card.style.transform = 'translateY(-8px)';
    });
  });
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link, .footer-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Close mobile menu if open
        const navList = document.querySelector('.nav-list');
        const hamburger = document.querySelector('.hamburger');
        
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
          hamburger.classList.remove('active');
        }
        
        // Scroll to section
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
}

// Update Active Navigation Link on Scroll
function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
  createTypingEffect();
  addParallaxEffect();
  animateTimelineItems();
  animateCounters();
  addTiltEffect();
  setupSmoothScroll();
  updateActiveLink();
});