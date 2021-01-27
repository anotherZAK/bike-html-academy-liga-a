'use strict';

(function () {
  var anchorsList = document.querySelector('.main-nav__list');

  var handleAnchorClick = function (evt) {
    if (evt.target.classList.value === 'main-nav__link') {
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
