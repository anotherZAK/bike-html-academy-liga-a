'use strict';

(function () {
  var phonePattern = new RegExp('\\+[0-9]{11}');
  var userTel = document.querySelector('#bike-choice-user-phone-id');

  userTel.addEventListener('invalid', function () {
    if (!phonePattern.test(userTel.value)) {
      userTel.setCustomValidity('Введите телефон в формате: +X(XXX)-XXX-XX-XX');
    } else {
      userTel.setCustomValidity('');
    }
  });
})();

