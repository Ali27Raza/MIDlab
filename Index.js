

const faqElements = document.querySelectorAll('.faq');


faqElements.forEach((faq) => {
  const toggleButton = faq.querySelector('.faq-toggle');
  const inputField = faq.querySelector('.faq-input');
  const answerElement = faq.querySelector('.faq-answer');

  toggleButton.addEventListener('click', () => {
    if (faq.classList.contains('active')) {
      faq.classList.remove('active');
      toggleButton.classList.toggle('active');
      inputField.value = '';
      answerElement.textContent = '';
    } else {
      faq.classList.add('active');
      toggleButton.classList.toggle('active');
    }
  });
  const closeButton = toggleButton.querySelector('.fa-times');
  closeButton.addEventListener('click', () => {
    faq.remove(); 
  });
});

