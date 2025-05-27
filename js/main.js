// Main JavaScript functionality

// DOM Elements
const downloadResumeBtn = document.getElementById('download-resume');
const contactForm = document.getElementById('contactForm');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const skillCategories = document.querySelectorAll('.category');
const skillGroups = document.querySelectorAll('.skills-group');
const scrollTopBtn = document.querySelector('.scroll-top');

// Project Filtering
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get filter value
      const filterValue = this.getAttribute('data-filter');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          if (card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
}

// Skills Tab Switching
if (skillCategories.length > 0) {
  skillCategories.forEach(category => {
    category.addEventListener('click', function() {
      // Remove active class from all categories
      skillCategories.forEach(cat => cat.classList.remove('active'));
      
      // Add active class to clicked category
      this.classList.add('active');
      
      const categoryValue = this.getAttribute('data-category');
      
      skillGroups.forEach(group => group.classList.remove('active'));
      
      document.getElementById(categoryValue).classList.add('active');
      
      const skillBars = document.querySelectorAll(`#${categoryValue} .skill-progress`);
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    });
  });
}

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.5 });

  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initSkillBars();

  const yearSpan = document.querySelector('.copyright p');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2025', currentYear);
  }

  checkAnimations();
});

function checkAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in, .scale-in');
  const windowHeight = window.innerHeight;
  
  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementPosition < windowHeight - elementVisible) {
      element.classList.add('appear');
    }
  });
}

window.addEventListener('scroll', checkAnimations);

document.querySelectorAll('.skill-item.fade-in').forEach(item => {
  item.addEventListener('mouseenter', function() {
    if (item.classList.contains('appear')) {
      item.style.transition = 'transform 0.3s';
      item.style.transform = 'translateY(-5px)';
    }
  });
  item.addEventListener('mouseleave', function() {
    if (item.classList.contains('appear')) {
      item.style.transition = 'transform 0.3s';
      item.style.transform = 'translateY(0)';
    }
  });
});