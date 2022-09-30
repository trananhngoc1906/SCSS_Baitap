window.onscroll = function () {
  var pageYOffset = window.pageYOffset;
  if (pageYOffset > 300) {
    document.querySelector(".header__content").style.position = " fixed";
    document.querySelector(".header__content").style.backgroundColor = " white";
    document.querySelector(".header__content").style.height = " 60px";
    document.querySelector(".header__content").style.maxWidth = " 100%";
    document.querySelector(".header__content").style.paddingRight = "195px";
    document.querySelector(".header__left").style.opacity = "0";
  } else {
    document.querySelector(".header__content").style.position = "none";
    document.querySelector(".header__content").style.backgroundColor =
      "transparent";
    document.querySelector(".header__left").style.opacity = "1";
    document.querySelector(".header__content").style.maxWidth = "1500px";
    document.querySelector(".header__content").style.paddingRight = "0";
  }
  console.log(pageYOffset);
};
