cards={
  a_star_web: {
    name: "A-Star",
    description: "pathfinding",
  },
  plotter_web: {
    name: "Plotter",
    description: "Function Plotter",
  },
  snake_ai_web: {
    name: "Snake ai",
    description: "solves snake by itself",
  },
  venn_diagram_web: {
    name: "Venn Diagram",
    description: "Venn Diagrams",
  },
}

function open_card(card_id){
  window.open(`project_view/small.html?project=${card_id}`, "_self");
}