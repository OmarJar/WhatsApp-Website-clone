let div = $("#popup")
function toggle() {
  div.css("display") === "block" ?
    div.css("display", "none") :
    div.css("display", "block")
}

$(window).click((e) => {
  div.css("display") === "block" ?
    e.target.className === "show-hide" ? null
      (e.target.className !== "show-hide") :
      div.css("display") === "block" ?
        div.css("display", "none") :
        div.css("display", "block")
    : null
})

function openNav() {
  $("#mySidenav").css("width", "767px")
  $("#body").css("overflow", "hidden")
  $("#body").css("height", "100%")
}

function closeNav() {
  $("#mySidenav").css("width", "0")
}

$(window).resize(() => {
  
  if (($(window).innerWidth()) > "767" && ($(window).innerWidth()) <= "1024") {
    $("#nav-img").attr("src", "images/whatsapp-nav.svg")
    $(".nav-item").css("font-size", "14px")
    
  }
  else {
    $("#nav-img").attr("src", "images/navbar.svg")
    $(".nav-item").css("font-size", "14px")
  }
})