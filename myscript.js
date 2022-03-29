function myFunction(dots, more, btn) {
  var dotsText = document.getElementById(dots);
  var moreText = document.getElementById(more);
  var btnText = document.getElementById(btn);

  if (dotsText.style.display === "none") {
    dotsText.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
//   else if (moreText.style.display === "none"){  //not working
  else {
    dotsText.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function clickFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
