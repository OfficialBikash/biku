// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const blogs = document.querySelectorAll('.blog');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    blogs.forEach(blog => {
      if (filter === 'all' || blog.getAttribute('data-category') === filter) {
        blog.style.display = 'block';
      } else {
        blog.style.display = 'none';
      }
    });
  });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Message sent successfully!');
    contactForm.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 200,
});

