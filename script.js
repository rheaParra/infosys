function scrollToSection(sectionId) {
  var element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: 'smooth' });
}