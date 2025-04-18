// Lottie animation for Hero Section
const animation = lottie.loadAnimation({
    container: document.getElementById('hero-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets10.lottiefiles.com/packages/lf20_y8uw9u.json' // Tech-related animation URL
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  