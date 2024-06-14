$(document).ready(function () {
  $(".close").click(function () {
    $(".modal").css("display", "none");
  });
  $("#email").keyup(function () {
    if (
      $("#email").val().length < 5 ||
      $("#email").val().indexOf("@") == -1 ||
      $("#email").val().indexOf(".") == -1
    ) {
      $(".email-er").html("Неверно заполнено поле Email");
      $(".email-er").css("display", "flex");
      $(this).css("border", "3px solid red");
      emailer = 1;
    } else {
      $(this).css("border", "3px solid green");
      $(".email-er").css("display", "none");
      emailer = 0;
    }
  });
})
$(".btn").click(function () {
  errors = 0;
  if (!$("#contract").is(":checked")) {
    $(".contract-er").html("Не заполнено поле пользовательское соглашение");
    $(".contract-er").css("display", "flex");
    errors++;
  } else {
    $(".contract-er").css("display", "none");
  }
  if (errors == 0 && emailer == 0 ) {
    $(".modal").css("display", "flex");
  }
});

$(".PR").on("mouseover", function () {
  $(this).css("background", "rgba(207, 207, 207, 0.3)");
  $(this).css("border-color", "rgb(255, 255, 255)");
});
$(".PR").on("mouseout", function () {
  $(this).css("background", "rgb(255, 255, 255)");
  $(this).css("border", "solid 2px black");
});