//Apparition des éléments
const sr = ScrollReveal();
sr.reveal('animation-droite', {
    origin: 'right',
    distance: '-450px',
    duration: 3000,
    delay: 1000
});
sr.reveal('.animation-gauche', {
    origin: 'left',
    distance: '-450px',
    duration: 3000,
    delay: 1000
});
sr.reveal('.animation-gauche2', {
  origin: 'left',
  distance: '-450px',
  duration: 4000,
  delay: 2000
});
sr.reveal('.animation-gauche3', {
  origin: 'left',
  distance: '-450px',
  duration: 4000,
  delay: 2500
});

const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry){
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      } 
    })
  }
  
  const observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(document.querySelector('.reveal'));