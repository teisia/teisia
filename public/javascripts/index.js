//nav
$(document).ready(function(){
  console.log("i like the way you think! there's an easter egg on the homepage. here's a hint: snoop dogg said this in one of his songs, 'will i be the _ that i was?'");
  $(".button a").click(function(){
      $(".overlay").fadeToggle(200);
        $(this).toggleClass("btn-open").toggleClass("btn-close");
  });
});

$(".overlay").on("click", function(){
  $(".overlay").fadeToggle(200);
    $(".button a").toggleClass("btn-open").toggleClass("btn-close");
      open = false;
});
