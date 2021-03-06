// Cliquez sur une image pour l'agrandir et déplacez le texte du haut et du bas de l'image.
// Après avoir cliqué sur l'image agrandie, l'image est réduite et le texte en haut et en bas de l'image
// est compressé.
// Dans les styles CSS correspondants, la durée de l'animation et d'autres caractéristiques ont été
// définies.


const panels = document.querySelector('.panels');

function toggleOpen(){

  event.preventDefault();
  const clickedChildNode = event.target.nodeName == "DIV" ? event.target : event.target.parentNode;
  clickedChildNode.classList.toggle('open');

  setTimeout(function(){
    clickedChildNode.classList.toggle('open-active');
  }, 500);
}

panels.addEventListener("click", toggleOpen);