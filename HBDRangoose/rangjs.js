alert("HAPPY BIRTHDAY RANGOOSE💗😍!!Click on the pics one by one");

document.getElementById('play').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio').play();
});

document.getElementById('touch').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('bro').play();
});

document.getElementById('dodo').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('song').play();
});
