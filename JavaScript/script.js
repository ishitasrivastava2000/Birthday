$(document).ready(function() {
    var txt = $("h1");

    $(".candles").click(function() {
        txt.hide().html("Your wish will come true..").delay(750).fadeIn(300);
      $(".flame").animate({"opacity": 0}, "slow");
      $(".flame2").animate({"opacity": 0}, "slow");
      $(".flame3").animate({"opacity": 0}, "slow");
      $(".text").animate({"top": -90, "opacity": 1}, "slow");
    });
});