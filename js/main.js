// document.addEventListener("DOMContentLoaded", function() {
//     // const $second = document.querySelector('.second')
//     const $hero = document.querySelector('.hero__body')

//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   if (isInViewport($hero)) {
//     $hero.classList.add('visible');
//   }
//   // Функция для обработки скролла
//   // function handleScroll(elem) {
    
//   //   // Проверяем, виден ли первый блок в видимой области окна
//   //   if (isInViewport($second)) {
        
//   //     // Добавляем класс для анимации появления, когда блок виден
//   //     $second.classList.add('visible');
//   //     // Удаляем обработчик события скролла после появления блока, если нужно
//   //   //   window.removeEventListener('scroll', handleScroll);
//   //   } else {
//   //       $second.classList.remove('visible');
//   //   }
//   // }

//   // Добавляем обработчик события скролла
  
//   // window.addEventListener('scroll', handleScroll);
// })

document.addEventListener('scroll', function() {
  const $header = document.querySelector('.header');
  if (window.scrollY > 0) {
      $header.classList.add('overlay-visible');
  } else {
      $header.classList.remove('overlay-visible');
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  effect: "flip",
  grabCursor: true,
  speed: 800
})