
// get project name from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const service_id = urlParams.get('service_id')

// button functions
function reload(){
  document.getElementById('service').src += '';
}

function open_link(){
  window.open(services[service_id].url, "_self");
}

// create html
$(document).ready(function(){

  $("#title").append(services[service_id].name);
  $("title").append(services[service_id].name);
  $("#project").attr("src", services[service_id]);
  document.getElementById('service').src = services[service_id].url;

  // RELOAD
  $(".button.reload").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/reload.png");
    $(element).append(img);
    $(element).on("click", function(){
      document.getElementById('service').src += '';
    })
  })

  // OPEN BUTTON
  $(".button.open").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/open-link.png");
    $(element).append(img);
    $(element).on("click", function(){
      window.open(services[service_id].url, "_self");
    })
  })
})