$(document).ready(function(){
  var $card = $(".card").not(".cat-card");
  var $points;

  $card.on("click", function(){
    var $this = $(this);
    var $other = $card.not($this).not(".played");
    var $disabled = $this.hasClass("disabled");
    var $question = $this.children().filter(".question");
    var $answer = $this.children().filter(".answer");
    var $value = $this.children().filter(".value");

    if (!$disabled && $value.attr("style") == null) {
      $this.addClass("chosen");
      $other.addClass("disabled");
      $value.attr("style", "display: none");
      $question.attr("style", "display: block");
      $("button").removeClass("disabled");
      $points = $value.text();
    } else if (!$disabled && $question.attr("style") == "display: block") {
      $question.attr("style", "display: none");
      $answer.attr("style", "display: block");
    } else if (!$disabled && $answer.attr("style") == "display: block") {
      $this.addClass("played");
      $answer.attr("style", "display: none");
      $other.removeClass("disabled");
      $button.addClass("disabled");
    };
  });

  $(".score button").on("click", function(){
    var $this = $(this);
    var $score = $this.siblings("h2");
    if (!($this.hasClass("disabled"))) {
      if ($this.hasClass("up")) {
        $score.text(Number($score.text()) + Number($points));
        $("button").addClass("disabled");
      } else {
        $score.text(Number($score.text()) - Number($points));
        $this.prev().addClass("disabled");
        $this.addClass("disabled");
      };
    };
  });

});
