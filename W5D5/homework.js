window.setTimeout(function () {
  alert('HAMMERTIME');
}, 2000);

const hammerTime = function (time) {
  window.setTimeout(function () {
    alert(`${time} is hammertime!`);
  }, time);
};

hammerTime(3000);