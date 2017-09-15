function showHeadline() {
  var headline = "The Modern Alchemist"
  document.getElementById("head").innerHTML = headline;
}

window.onscroll = function() {myFunction()};

function showHeadline() {
  var headline = "The Modern Alchemist"

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("head").innerHTML = headline;
    }
}
