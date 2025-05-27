// Navigation JavaScript functionality

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle Mobile Menu
if (hamburger && navList) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
  });
}

// Close Mobile Menu When Clicking Outside
document.addEventListener('click', function(event) {
  const isClickInsideNav = navList.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);
  
  if (navList.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
    navList.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Close Mobile Menu When Link is Clicked
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Highlight Active Section on Scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust for header height
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to corresponding link
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// Add Scroll Offset for Anchor Links
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 80);
  }
}

// Handle Initial Hash Links
window.addEventListener('DOMContentLoaded', function() {
  // If there's a hash in the URL (like #about)
  if (window.location.hash) {
    // Set timeout to ensure proper scrolling after page load
    setTimeout(function() {
      const targetId = window.location.hash;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update active navigation link
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav-link[href="${targetId}"]`).classList.add('active');
      }
    }, 100);
  }
});

// Apply offset when an anchor link is clicked
window.addEventListener('hashchange', offsetAnchor);

// Add click event to logo to scroll to top
const logo = document.querySelector('.logo a');

if (logo) {
  logo.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Handle scroll behavior for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Update URL hash without causing a page jump
      history.pushState(null, null, targetId);
    }
  });
});