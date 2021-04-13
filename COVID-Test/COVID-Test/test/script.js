const $icon = $('.menu-btn');
const $menu = $('.overlay');

$icon.on('click', function(){
  if(!$menu.hasClass('active')) {
 		$menu.fadeIn().toggleClass('active');
  } else {
    $menu.fadeOut().removeClass('active');
  }
});

var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");

    var Next = document.getElementById("Next");
    var Back = document.getElementById("Back");

    Next.onclick = function(){
      Form1.style.left = "-450px";
      Form2.style.left = "40px";
    }

    Back.onclick = function(){
      Form1.style.left = "40px";
      Form2.style.left = "450px";
    }

