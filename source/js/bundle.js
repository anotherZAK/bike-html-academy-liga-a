/******/ "use strict";
!function() {
/*!**********************************!*\
  !*** ./source/js/burger-menu.js ***!
  \**********************************/


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

}();
!function() {
/*!*********************************!*\
  !*** ./source/js/form-check.js ***!
  \*********************************/


(function () {
  var phonePattern = new RegExp('[\+][0-9]{11}|[0-9]{11}');
  var userTel = document.querySelector('#bike-choice-user-phone-id');

  userTel.addEventListener('input', function () {
    if (!phonePattern.test(userTel.value)) {
      userTel.setCustomValidity('Введите телефон в формате: +7XXXXXXXXXX или 8XXXXXXXXXX');
    } else {
      userTel.setCustomValidity('');
    }
  });
})();

}();
!function() {
/*!*************************************!*\
  !*** ./source/js/anchors-scroll.js ***!
  \*************************************/


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

}();
