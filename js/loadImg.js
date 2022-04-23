
$(function () {
$(".button1").click(e => {
    let imageInput = $("#image-input");
    let image = $("[id=image");
    let mainImage = $('#mainimage')
    if (imageInput.val()) image.attr("src", imageInput.val());
    if (imageInput.val()) mainImage.attr("src", imageInput.val());
  });
});

$(function () {
  $(".button2").click(e => {
      let image = $("[id=image");
      let mainImage = $('#mainimage')
      image.attr("src", "https://picsum.photos/500/700");
      mainImage.attr("src", "https://picsum.photos/500/700")
 
  });
});
  
