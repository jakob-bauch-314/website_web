

// button functions

function back(){
  window.open("../index.html","_self");
}

states = []

$(document).ready(function(){

  $(".trumpet").each(function(index, element){
    states[index] = true;
    $(element).attr("src", "/assets/images/trumpet.png");
    $(element).on("click", function(){
      if (states[index]){
        states[index] = false;
        $(element).attr("src", "/assets/images/trumpet.gif");
        setTimeout(function(){
          states[index] = true;
          $(element).attr("src", "/assets/images/trumpet.png");
        }, 2250)
        new Audio("assets/music/honk.mp3").play();
      }
    })
  });

  /*
  $(".panel").each(function(index, element){
    $(element).on("click", function(){
      new Audio("music/select.mp3").play();
    })
  })
  */
})