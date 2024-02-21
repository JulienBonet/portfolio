document.addEventListener("DOMContentLoaded", function () {
  var projects = document.querySelectorAll(".project_card");

  projects.forEach(function (project) {
    var images = project.querySelectorAll(".pb_B_stack_logo");
    var infoAlt = project.querySelector(".infoAlt");

    images.forEach(function (image) {
      image.addEventListener("mouseover", function () {
        var altText = this.alt;
        infoAlt.textContent = altText;
      });

      image.addEventListener("mouseout", function () {
        infoAlt.textContent = "";
      });
    });
  });
});
