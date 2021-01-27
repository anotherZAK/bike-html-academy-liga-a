'use strict';

(function () {
  var phonePattern = new RegExp('[\+][0-9]{1}[\(]\[0-9]{3}[\)][0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
  var userTel = document.querySelector('#bike-choice-user-phone-id');

  userTel.addEventListener('input', function () {
    if (!phonePattern.test(userTel.value)) {
      userTel.setCustomValidity('Введите телефон в формате: +X(XXX)-XXX-XX-XX');
    } else {
      userTel.setCustomValidity('');
    }
  });
})();
