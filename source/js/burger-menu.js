'use strict';

(function () {
  var body = document.querySelector('.page-body');
  var burgerToggle = document.querySelector('.burger');
  var mainNav = document.querySelector('.main-nav');
  var pageHeader = document.querySelector('.page-header');
  var bgContainer = document.querySelector('.background-container');

  mainNav.classList.remove('main-nav--nojs');
  bgContainer.classList.remove('background-container--nojs');
  bgContainer.classList.add('background-container--header');
  pageHeader.style.marginBottom = 70 + 'px';

  burgerToggle.addEventListener('click', function () {
    body.classList.toggle('page-body--fixed');
    mainNav.classList.toggle('main-nav--opened');
    mainNav.classList.toggle('main-nav--closed');
  });
})();
