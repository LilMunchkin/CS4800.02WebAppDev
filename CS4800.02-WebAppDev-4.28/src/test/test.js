const $icon = $('.menu-btn');
const $menu = $('.overlay');
const $data = $('.container2');

$icon.on('click', function(){
  if(!$menu.hasClass('active')) {
 		$menu.fadeIn().toggleClass('active');
    $data.fadeOut().removeClass('active');
  } else {
    $menu.fadeOut().removeClass('active');
    $data.fadeIn().removeClass('active');
  }
});

var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");

var Next = document.getElementById("Next");
var Back = document.getElementById("Back");

var progress = document.getElementById("progress");
var confirm = document.getElementById("Submit");

Next.onclick = function(){
  Form1.style.left = "-450px";
  Form2.style.left = "40px";
  progress.style.width = "266.66px";
      
}

Back.onclick = function(){
  Form1.style.left = "40px";
  Form2.style.left = "450px";
  progress.style.width = "133.33px";
}

confirm.onclick = function(){
  progress.style.width = "400px";
}
