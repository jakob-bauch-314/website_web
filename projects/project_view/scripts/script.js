
// get project name from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('project')
const project_path = `/projects/projects_source/${project}`
const project_index_path = `${project_path}/index.html`
const project_readme_path = `${project_path}/README.md`
const project_name = project.split('_').slice(0,-1).join(' ')

$(document).ready(function(){

  // parse readme
  fetch(project_readme_path)
    .then(response => response.text())
    .then(markdown => {$("#readme").append(marked.parse(markdown));})
    .catch(error => console.error('Error loading Markdown:', error));

    $("#title").append(project_name);
    $("title").append(project_name);
    $("#project").attr("src", project_index_path);
    document.getElementById('project').src += '';

  // RELOAD
  $(".button.reload").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/reload.png");
    $(element).append(img);
    $(element).on("click", function(){
      document.getElementById('project').src += '';
    })
  })

  // FULLSCREEN BUTTON
  $(".button.fullscreen").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/fullscreen.png");
    $(element).append(img);
    $(element).on("click", function(){
      window.open(`large.html?project=${project}`, "_self");
    })
  })

  // EXIT-FULLSCREEN BUTTON
  $(".button.exit-fullscreen").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/exit-fullscreen.png");
    $(element).append(img);
    $(element).on("click", function(){
      window.open(`small.html?project=${project}`, "_self");
    })
  })

  // OPEN BUTTON
  $(".button.open").each(function(index, element){
    img = $(document.createElement('img'));
    img.attr('src', "/assets/icons/open-link.png");
    $(element).append(img);
    $(element).on("click", function(){
      window.open(`/projects/projects_source/${project}/index.html`, "_self");
    })
  })

})