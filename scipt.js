$(function() {


$("#header1").click(function () {
  console.log("came");  
  $(".nav .nav-item").find(".active").removeClass("active");
   $(this).addClass("active");
});

  $(".nav-link").on("click", function() {
    //hide all sections
    $(".content-section").hide();
    //show the section depending on which button was clicked
    $("#" + $(this).attr("data-section")).show();
  });
  
});

