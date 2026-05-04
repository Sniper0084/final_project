const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach((link) => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

const filterButtons = document.querySelectorAll('.filter-button');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    productCards.forEach((card) => {
      const matchesFilter = filter === 'all' || card.dataset.category === filter;
      card.style.display = matchesFilter ? 'flex' : 'none';
    });
  });
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thanks! This demo form does not send email, but your message was received on the page.';
    contactForm.reset();
  });
}
