// Fondu de la flèche au chargement de la page
window.onload = function () {
  var scrollToTop = document.getElementById("scrollToTop");
  setTimeout(function () {
    scrollToTop.classList.add("show");
  }, 500); // Ajout d'un délai pour que le fondu soit visible après le chargement de la page
};

// Fondu de la flèche lorsque l'utilisateur fait défiler la page
window.onscroll = function () {
  var scrollToTop = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
    setTimeout(function () {
      scrollToTop.style.display = "none";
    }, 300); // Ajout d'un délai avant de masquer la flèche après que l'utilisateur ait arrêté de faire défiler la page
  }
};

// Scroll doux
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Pour le scroll doux
  });
});
