document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPage = button.getAttribute('data-page');
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });

  // Requirement: Power logo returns user to home page
  const brandLogo = document.getElementById('brand-logo');
  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});