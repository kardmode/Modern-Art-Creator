class Path {
  constructor(seed, canvasX, canvasY) {
    this.seed = seed;
    // maximum number of points on the svg path
    this.maxPoints = 10;
    // x and y coordinates of the desired svg canvas size
    this.maxX = canvasX;
    this.maxY = canvasY;
    // maximum stroke width on the svg path
    this.maxWidth = 10;
  }
  random() {
    let rand = Math.sin(this.seed++) * 100000;
    return (rand - Math.floor(rand));
  }
  randInt(max) {
    // returns an integer between 0 and max
    return Math.floor(this.random() * max + 1);
  }
  randLineType() {
    let line_type = this.randInt(2);
    if (line_type == 0) {
      return 'L';
    }
    else if (line_type == 1) {
      return 'Q';
    }
    else if (line_type == 2) {
      return 'C';
    }
    else {
      return 'L';
    }
  }
  randLine() {
    let lineType = this.randLineType();
    let line = lineType + ' ';
    line += this.randPoint() + ' ';
    if (lineType == 'Q') {
      line += this.randPoint() + ' ';
    }
    else if (lineType == 'C') {
      line += this.randPoint() + ' ';
      line += this.randPoint() + ' ';
    }
    return line;
  }
  randNumPoints() {
    return this.randInt(this.maxPoints);
  }
  randPoint() {
    let x = this.randInt(this.maxX);
    let y = this.randInt(this.maxY);
    return (x + ',' + y);
  }
  randColor() {
    let r = this.randInt(255);
    let g = this.randInt(255);
    let b = this.randInt(255);
    return ("rgb(" + r + ',' + g + ',' + b + ')');
  }
  randWidth() {
    return this.randInt(this.maxWidth);
  }
  randPathType() {
    let choice = this.randInt(1);
    if (choice == 1) {
      return 'z';
    }
    else {
      return '';
    }
  }
  randOpacity() {
    let opacity = this.randInt(100);
    return opacity / 100;
  }
  buildPath() {
    this.d = "M " + this.randPoint() + ' ';
    this.numPoints = this.randNumPoints();
    for (let line = 1; line <= this.numPoints; line++) {
      this.d += this.randLine();
    }
    this.d += this.randPathType();
    this.stroke = this.randColor();
    this.strokeWidth = this.randWidth();
    this.fill = this.randColor();
    this.opacity = this.randOpacity();
  }
}