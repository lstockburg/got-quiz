$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var score = parseInt($("input:radio[name=coffee-type]:checked").val()) + parseInt($("input:radio[name=pet]:checked").val()) + parseInt($("#date-type").val()) +
    parseInt($("#person-type").val());
    if (score === 4) {
    }
    else if () {
    }
    else if () {
    }
    else if () {
    }
    else {

    }
  });
});
