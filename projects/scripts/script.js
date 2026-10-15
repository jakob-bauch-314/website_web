
// get project name from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('project')
const project_path = `projects_source/${project}`
const project_index_path = `${project_path}/index.html`
const project_readme_path = `${project_path}/README.md`
const project_name = project.split('_').slice(0,-1).join(' ')


// button functions
function reload(){
  document.getElementById('project').src += '';
}

function fullscreen(){
  open(`project_fullscreen_view.html?project=${project}`);
}

function exit_fullscreen(){
  open(`project_view.html?project=${project}`);
}

function open_link(){
  open(`projects_source/${project}`);
}

function back(){
  window.open("index.html");
}

// create html
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
})