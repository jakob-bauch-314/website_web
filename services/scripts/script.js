
function open_service(service_id){
  window.open(`service_view/index.html?service_id=${service_id}`,"_self");
}

$(document).ready(function(){

  for (const [service_id, service] of Object.entries(services)) {
    $("#entries").append(
      `<div onclick='open_service("${service_id}")'>${service.name}</div>`
    );
  }

})