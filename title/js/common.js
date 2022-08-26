$(function () {
  $(".mopen").on("click", function () {
    $(this).toggleClass("is-active");
    $(".gnb").toggleClass("on");
  });

  $(".slider").slick({
    arrows: false,
    autoplay: true,
  });
  $(".mainSlider").slick({
    arrows: false,
    autoplay: true,
    dots: true,
  });

  $(".left").on("click", function () {
    $(".mainSlider").slick("slickPrev");
  });
  $(".right").on("click", function () {
    $(".mainSlider").slick("slickNext");
  });

  $(".left_slider").slick({
    arrows: false,
    fade: true,
  });
  $(".right_slider").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: ".left_slider",
  });
  $(".arrows i:nth-child(1)").on("click", function () {
    $(".right_slider").slick("slickPrev");
  });
  $(".arrows i:nth-child(2)").on("click", function () {
    $(".right_slider").slick("slickNext");
  });

  $("figure").mouseover(function () {
    $(this).addClass("on");
  });

  $("figure").mouseleave(function () {
    $(this).removeClass("on");
  });

  $(".develSlick").slick({
    arrows: false,
    fade: true,
  });
  $("i:nth-child(1)").on("click", function () {
    $(".develSlick").slick("slickPrev");
  });
  $("i:nth-child(4)").on("click", function () {
    $(".develSlick").slick("slickNext");
  });
});

$(".develSlick").on("init afterChange", function (e, s, c) {
  $(".box .num").text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount);
  $(".developer .content>li").eq(c).addClass("on").siblings().removeClass("on");
});

window.addEventListener("DOMContentLoaded", () => {
  // swiper
  const MainSlider = new Swiper(".MainSlider", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
  });
});
