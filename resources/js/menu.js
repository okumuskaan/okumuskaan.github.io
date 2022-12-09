var i = 0;
var greetTitleTxt = ''; /* The text */
var greetMainTxt = ""
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < greetTitleTxt.length) {
    document.getElementById("greet-title").innerHTML += greetTitleTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    if (i < greetTitleTxt.length + greetMainTxt.length) {
        document.getElementById("greet-main").innerHTML += greetMainTxt.charAt(i-greetTitleTxt.length);
        i++;
        setTimeout(typeWriter, speed);
    }
  }
}

typeWriter();