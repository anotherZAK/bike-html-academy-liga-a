/******/ "use strict";
!function() {
/*!**********************************!*\
  !*** ./source/js/burger-menu.js ***!
  \**********************************/


(function () {
  var body = document.querySelector('.page-body');
  var burgerToggle = document.querySelector('.burger');
  var mainNav = document.querySelector('.main-nav');
  var mainNavList = mainNav.querySelector('.main-nav__list');
  var pageHeader = document.querySelector('.page-header');
  var bgContainer = document.querySelector('.background-container');
  var offsetTop = 100;

  mainNav.classList.remove('main-nav--nojs');
  bgContainer.classList.remove('background-container--nojs');
  bgContainer.classList.add('background-container--header');
  pageHeader.classList.add('page-header--js');


  burgerToggle.addEventListener('click', function () {
    body.classList.toggle('page-body--fixed');
    mainNav.classList.toggle('main-nav--opened');
    mainNav.classList.toggle('main-nav--closed');

    var bodyHeight = mainNavList.offsetHeight;
    body.style.setProperty('--element-height', bodyHeight + offsetTop + 'px');
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

}();
