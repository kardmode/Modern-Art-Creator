window.addEventListener("load", linkButton);

function linkButton() {
  document.getElementById("button").addEventListener("click", main);
}

function main() {
  let userInput = new UserInput;
  let svg = document.getElementById("output");
  svg.setAttribute("width", userInput.canvasX);
  svg.setAttribute("height", userInput.canvasY);
  for (let path = 1; path <= userInput.numPaths; path++) {
    let randPath = new Path(userInput.seed, userInput.canvasX, 
      userInput.canvasY);
    randPath.buildPath();
    let pathElement = document.createElementNS("http://www.w3.org/2000/svg", 
      "path");
    pathElement.setAttribute("d", randPath.d);
    pathElement.setAttribute("stroke", randPath.stroke);
    pathElement.setAttribute("stroke-width", randPath.strokeWidth);
    pathElement.setAttribute("fill", randPath.fill);
    pathElement.setAttribute("opacity", randPath.opacity);
    svg.appendChild(pathElement);
  }
}