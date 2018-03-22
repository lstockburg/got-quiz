$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var score = parseInt($("input:radio[name=coffee-type]:checked").val()) + parseInt($("input:radio[name=pet]:checked").val()) + parseInt($("#date-type").val()) +
    parseInt($("#person-type").val());
    if (score === 4) {
      $("img").hide();
      $(".mark").show();
      $("#celebmatch").text("MARK RUFFALO, DAAAMN");
      $("#match-header").show();
    }
    else if (score >= 5 && score <= 10) {
      $("img").hide();
      $(".emma").show();
      $("#celebmatch").text("EMMA WATSON YOU LUCKY DOG");
      $("#match-header").show();
    }
    else if (score >= 11 && score <= 15) {
      $("img").hide();
      $(".will").show();
      $("#celebmatch").text(" THE FRESHEST GODDAMN PRINCE");
      $("#match-header").show();
    }
    else if (score >= 16 && score <= 19) {
      $("img").hide();
      $(".gaga").show();
      $("#celebmatch").text("LADY GAGA, OH MY GOD");
      $("#match-header").show();
    }
    else {
      $("img").hide();
      $(".andy").show();
      $("#celebmatch").text("unfortunately, you get DICK");
      $("#match-header").show();
    }
  });
});
