
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
})