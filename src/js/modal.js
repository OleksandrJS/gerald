/** @format */

const modalWindow = document.querySelector('.modal_overlay');
const headerContactsBtn = document.querySelector('.header_contacts-btn');

const closeModal = (event) => {
  const target = event.target;
  if (target === modalWindow || target.classList.contains('modal_close'))
    modalWindow.style.display = 'none';
};

headerContactsBtn.addEventListener('click', (event) => {
  const target = event.target;
  if (target === headerContactsBtn) {
    modalWindow.style.display = 'block';
  }
});
modalWindow.addEventListener('click', closeModal);
