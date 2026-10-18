
// CARDS

function open_card(card_id){
  window.open(cards[card_id].url, "_self");
}

cards={
  silly_projects: {
    name: "Silly Projects",
    description: "silly little projects i made myself (:",
    url: "projects/"
  },
    useful_services: {
    name: "Useful Services",
    description: "collection of services",
    url: "services/"
  },
}

// button functions

states = []

$(document).ready(function(){

  // ADD CARDS
  for (const [card_id, card] of Object.entries(cards)) {
    $("#cards").append(
      `<div class='card' onclick='open_card("${card_id}")'>
        <div class='name'>${card.name}</div>
        <div class='description'>${card.description}</div>
      </div>`
    );
  }

  // HOME BUTTON
  $(".button.home").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/home.png");
    $(element).append(img);
    $(element).on("click", function(){
      window.open("/index.html","_self");
    })
  })

  // BACK BUTTON
  $(".button.back").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/up-arrow.png");
    $(element).append(img);
    $(element).on("click", function(){
      window.open("../index.html","_self");
    })
  })

  // TRUMPET
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
})