var text = "Get Fit Today!";

for (var i in text) {
  if (text[i] === " ") {
    $(".wave").append($("<span>").html("&nbsp;"));
  } else {
    $(".wave").append($("<span>").text(text[i]));
  }
}
