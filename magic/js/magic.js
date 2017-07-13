window.onscroll =  function showHeadline() {
  var headline = "Phil La Porta <br />The Modern Alchemist"
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("head").innerHTML = headline;
    }
}

function showDiv() {
  var showIt = document.getElementById("philosophy-text").classList;
  if (showIt.contains("hide")) {
    showIt.remove("hide");
 }
}

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 6);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
