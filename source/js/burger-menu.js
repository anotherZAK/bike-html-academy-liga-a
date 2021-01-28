'use strict';

(function () {
  var burgerToggle = document.querySelector('.main-nav');
  var pageHeader = document.querySelector('.page-header');
  var bgContainer = document.querySelector('.background-container');

  burgerToggle.classList.remove('main-nav--nojs');
  bgContainer.classList.remove('background-container--nojs');
  bgContainer.classList.add('background-container--header');
  pageHeader.style.marginBottom = 70 + 'px';

  burgerToggle.addEventListener('click', function () {
    burgerToggle.classList.toggle('main-nav--opened');
    burgerToggle.classList.toggle('main-nav--closed');
  });
})();
