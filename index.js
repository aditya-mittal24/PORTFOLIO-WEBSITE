
if (!navigator.userAgent.match(/Mobile/)){
  $(window).on("scroll",function(){
    if(window.pageYOffset > 380){
      $(".navbar").slideDown();
    } else{
      $(".navbar").slideUp();
    }
  });
}

if (navigator.userAgent.match(/Mobile/)){
  $(".navbar").css("background-color", "transparent");
  $(".navbar").css("display", "block");
  $(".navbar-brand").css("display", "none");
  $(".right").attr("data-aos","false");
}


// $(".project1").hover(function(){
//   $(".project1 hr").animate({width: "100%"});
//   $(".project1 .card-text").animate({left:"0"});
// });
// $(".project2").hover(function(){
//   $(".project2 hr").animate({width: "100%"});
//   $(".project2 .card-text").animate({left:"0"});
// });
// $(".project3").hover(function(){
//   $(".project3 hr").animate({width: "100%"});
//   $(".project3 .card-text").animate({left:"0"});
// });
// $(".project4").hover(function(){
//   $(".project4 hr").animate({width: "100%"});
//   $(".project4 .card-text").animate({left:"0"});
// });

// $(".card-img-overlay").on("mouseleave",function(){
//   $("hr").css("width","100");
//   $(".card-text").css("left","80%");
// });

// $(".card").on("mouseleave",function(){
//   $(".card-img-overlay").css("visibility", "hidden");
// });