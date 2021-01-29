'use strict';

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
