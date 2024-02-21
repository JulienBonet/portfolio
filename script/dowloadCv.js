document.getElementById("download_cv").addEventListener("click", function () {
  var link = document.createElement("a");
  link.download = "Julien_Bonet_CV.pdf";
  link.href = "../documents/Julien_Bonet_CV.pdf";
  link.click();
});
