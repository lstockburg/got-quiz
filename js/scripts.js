$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var score = parseInt($("input:radio[name=coffee-type]:checked").val()) + parseInt($("input:radio[name=pet]:checked").val()) + parseInt($("#date-type").val()) +
    parseInt($("#person-type").val());
    if (score === 4) {
      $("img").hide();
      $(".daenerys").show();
      $("#gotmatch").text("MOTHER OF DRAGONS!");
      $("#match-header").show();
    }
    else if (score >= 5 && score <= 10) {
      $("img").hide();
      $(".john-snow.").show();
      $("#gotmatch").text("YOU KNOW NOTHING!");
      $("#match-header").show();
    }
    else if (score >= 11 && score <= 15) {
      $("img").hide();
      $(".tyrion").show();
      $("#gotmatch").text("TYRION, THE HALF MAN");
      $("#match-header").show();
    }
    else if (score >= 16 && score <= 19) {
      $("img").hide();
      $(".cersei").show();
      $("#gotmatch").text("ALL YOUR CHILDREN ARE DEAD");
      $("#match-header").show();
    }
    else {
      $("img").hide();
      $(".night-king").show();
      $("#gotmatch").text("NIGHT KING!!!!!");
      $("#match-header").show();
    }
  });
});
