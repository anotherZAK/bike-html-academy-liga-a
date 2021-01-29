'use strict';

(function () {
  var anchorsList = document.querySelector('.main-nav__list');
  var body = document.querySelector('.page-body');
  var mainNav = document.querySelector('.main-nav');

  var handleAnchorClick = function (evt) {
    if (evt.target.classList.value === 'main-nav__link') {
      body.classList.remove('page-body--fixed');
      mainNav.classList.remove('main-nav--opened');
      mainNav.classList.add('main-nav--closed');

      evt.preventDefault();
      var blockId = evt.target.hash;

      document.querySelector(blockId).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  };

  anchorsList.addEventListener('click', handleAnchorClick);
})();
