/** @format */

// /** @format */
// if (window.innerWidth <= 1200) {
//   for (let i = 0; i < headerNav.length; i++) {
//     headerNav[i].removeEventListener('mouseenter', handlerNav);
//     headerNav[i].removeEventListener('mouseover', handlerNav);
//   }
// }

// if (window.innerWidth > 1200) {
//   const headerNav = document.querySelectorAll('.header_nav ul li');

//   const handlerNav = (event) => {
//     const target = event.target;
//     const img = target.querySelector('img');
//     img.style.transform = 'scale3d(1, 1, 1)';
//     target.addEventListener('mouseleave', () => {
//       img.style.transform = 'scale3d(1, 0, 1)';
//     });
//   };

//   for (let i = 0; i < headerNav.length; i++) {
//     headerNav[i].addEventListener('mouseenter', handlerNav);
//     headerNav[i].addEventListener('mouseover', handlerNav);
//   }
// }

const headerBtn = document.querySelector('.header-btn');
const mobileBg = document.querySelector('.header_mobile-bg');
const headerNav = document.querySelector('.header_nav');
const headerContacts = document.querySelector('.header_contacts');
const headerWrapperNav = document.querySelector('.header_wrapper-nav');
const headerNavStickyBg = document.querySelector('.header_nav-sticky_bg');
const sticky = headerWrapperNav.offsetTop;
const headerWrapperOrder = document.querySelector('.header_wrapper-order');

headerBtn.addEventListener('click', () => {
  headerBtn.classList.toggle('on');
  mobileBg.classList.toggle('mobile-menu');
  headerNav.classList.toggle('mobile-menu');
  headerContacts.classList.toggle('mobile-menu');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= sticky) {
    headerWrapperNav.classList.add('sticky');
    headerNavStickyBg.classList.add('sticky_bg');
    headerWrapperOrder.classList.add('padding');
  } else {
    headerWrapperNav.classList.remove('sticky');
    headerNavStickyBg.classList.remove('sticky_bg');
    headerWrapperOrder.classList.remove('padding');
  }
});
