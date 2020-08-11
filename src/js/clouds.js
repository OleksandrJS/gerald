/** @format */

const rightCloud = document.querySelector('.header_parallax');
const leftCloud = document.querySelector('.header_parallax-2');

window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  rightCloud.style.right = `-${scroll / 2 - 150}px`;
  rightCloud.style.top = `${scroll / 3 + 800}px`;
  leftCloud.style.top = `${scroll / 3 + 900}px`;
  leftCloud.style.left = `-${scroll / 2 - 150}px`;
});
