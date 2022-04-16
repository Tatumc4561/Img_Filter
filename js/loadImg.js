
$(function () {
$("#b").click(e => {
    let imageInput = $("#image-input");
    let image = $("[id=image");
    let mainImage = $('#mainimage')
    if (imageInput.val()) image.attr("src", imageInput.val());
    if (imageInput.val()) mainImage.attr("src", imageInput.val());
  });
});
