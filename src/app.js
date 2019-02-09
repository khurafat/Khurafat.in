import "./main.css"

import $ from "jquery"
window.jQuery = $
window.$ = $

require("jquery.easing")
require("../lib/jquery.singlefull")

$(document).ready(function () {
  $("#single").singlefull({
    speed: 200,
    loopScroll: true,
    loopTop: false,
    loopBottom: false
  })

  $(".menu-icon").click(function () {
    $(".burger-menu").addClass("nav-open")
  })
  $(".menu-close").click(function () {
    $(".burger-menu").removeClass("nav-open")
  })
  $(".navbar li a").click(function () {
    $(".burger-menu").removeClass("nav-open")
  })
  let s = $("#wwd")
  let pos = s.position()
  $(window).scroll(function () {
    let windowpos = $(window).scrollTop() + 60

    if (windowpos >= pos.top) {
      $(".navbar-side, .header").addClass("forwhite")
    } else {
      $(".navbar-side, .header").removeClass("forwhite")
    }
  })
  $("html, body").animate({ scrollTop: 0 }, 200)
})
