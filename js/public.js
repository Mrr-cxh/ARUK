var btn = document.querySelector("#btn");
// 滚动监听
window.onscroll = function () {
  var nav = document.querySelector("#nav");
  if (window.pageYOffset >= 10) {
    nav.style.backgroundColor = "#ebe7e7";
  } else {
    nav.style.backgroundColor = "rgb(245, 245, 245)";
  }
  if (window.pageYOffset >= 1000) {
    btn.style.bottom = "70px";
  } else {
    btn.style.bottom = "-70px";
  }
};

// 返回顶部
btn.onclick = function () {
  var time = setInterval(function () {
    var dtop = document.documentElement.scrollTop;
    var speed = Math.floor(-dtop / 10);
    document.documentElement.scrollTop = dtop + speed;
    istop = true;
    if (dtop == 0) {
      clearInterval(time);
    }
  }, 30);
};
