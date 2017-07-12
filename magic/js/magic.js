window.onscroll =  function showHeadline() {
  var headline = "Phil La Porta <br />The Modern Alchemist"
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("head").innerHTML = headline;
    }
}

function showPhilosophy() {
  document.getElementById("philosophy-text").className = "visible";
}
window.onmouseover = function() {
  document.getElementById("philosophy-text").addEventListener( 'onmouseover', showPhilosophy);
 }
