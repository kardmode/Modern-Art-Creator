class UserInput {
  constructor() {
    this.canvasX = parseInt(document.getElementById("canvas-x").value, 10);
    this.canvasY = parseInt(document.getElementById("canvas-y").value, 10);
    this.numPaths = parseInt(document.getElementById("path-count").value, 10);
    let seed = document.getElementById("seed").value;
    this.seed = this.stringToInt(seed);
  }
  stringToInt(seed) {
    let running_sum = 0;
    for (let index = 0; index < seed.length; index++) {
      running_sum += seed.charCodeAt(index);
    }
    return running_sum;
  }
}