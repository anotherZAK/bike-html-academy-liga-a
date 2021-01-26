'use strict';

(function () {
  var burgerToggle = document.querySelector('.main-nav');

  burgerToggle.classList.remove('main-nav--nojs');

  burgerToggle.addEventListener('click', function () {
    burgerToggle.classList.toggle('main-nav--opened');
    burgerToggle.classList.toggle('main-nav--closed');
  });
})();
