document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les liens d'ancrage dans le menu
  var links = document.querySelectorAll('a[href^="#"]');

  // Parcourir chaque lien
  links.forEach(function (link) {
    // Ajouter un écouteur d'événement au clic sur chaque lien
    link.addEventListener("click", function (event) {
      // Empêcher le comportement de lien par défaut
      event.preventDefault();

      // Obtenir l'élément cible de l'ancre
      var target = document.querySelector(this.getAttribute("href"));

      // Vérifier si l'élément cible existe
      if (target) {
        // Calculer la position de l'élément cible par rapport au haut de la page
        var targetPosition = target.offsetTop;

        // Défiler jusqu'à la position de l'élément cible en douceur
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
