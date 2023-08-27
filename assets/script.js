// Définition des diapositives avec leurs images et légendes
const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  // Attente du chargement du contenu HTML
  document.addEventListener("DOMContentLoaded", () => {
	// Sélection de la bannière
	const banner = document.querySelector("#banner");
	
	// Ajout d'un event listener pour la flèche de gauche
	banner.querySelector(".arrow_left").addEventListener("click", () => {
		console.log("Flèche gauche cliquée")
	  changeSlide(banner, -1); // Changer la diapositive vers la gauche
	});
	
	// Ajout d'un event listener pour la flèche de droite
	banner.querySelector(".arrow_right").addEventListener("click", () => {
		console.log("Flèche droite cliquée")
	  changeSlide(banner, 1); // Changer la diapositive vers la droite
	});
	
	// Sélection du conteneur des points (dots)
	const dotsContainer = banner.querySelector(".dots");
	
	// Création des points et ajout d'event listeners pour chaque point
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement("div");
	  dot.className = "dot";
	  dot.addEventListener("click", () => {
		console.log('point ${i} cliqué')
		showSlide(banner, i); // Afficher la diapositive correspondante au point
	  });
	  dotsContainer.appendChild(dot);
	}
	
	showSlide(banner, 0); // Afficher la première diapositive au chargement
  });
  
  // Fonction pour changer de diapositive
  function changeSlide(banner, direction) {
	const currentIndex = getCurrentSlideIndex(banner);
	const nextIndex = (currentIndex + direction + slides.length) % slides.length;
	console.log(('Changer de diapositive de ${currentIndex} à ${nextIndex}'))
	showSlide(banner, nextIndex); // Afficher la diapositive suivante
  }
  
  // Fonction pour afficher une diapositive spécifique
  function showSlide(banner, index) {
	const bannerImg = banner.querySelector(".banner-img");
	const tagLine = banner.querySelector("#banner p");
	const dots = banner.querySelectorAll(".dot");
	console.log(('Afficher la diapositive ${index}'))
	// Mettre à jour l'image et la légende de la diapositive
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	
	// Mettre à jour la classe dot-selected pour le point actif
	dots.forEach((dot, dotIndex) => {
	  dot.classList.toggle("dot_selected", dotIndex === index);
	});
  }
  
  // Fonction pour obtenir l'index de la diapositive active
  function getCurrentSlideIndex(banner) {
	const dots = banner.querySelectorAll(".dot");
	for (let i = 0; i < dots.length; i++) {
	  if (dots[i].classList.contains("dot_selected")) {
		return i;
	  }
	}
	return 0; // Par défaut, la première diapositive est active
  }
  