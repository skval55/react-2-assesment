class UnrollFuncs {
  currDirection = "right";
  matrix = [[]];
  newArr = [];
  totalItems = 0;

  constructor(_matrix) {
    this.totalItems = _matrix[0].length * _matrix.length;
    this.matrix = _matrix;
    this.newArr = _matrix.splice(0, 1)[0];
    this.currDirection = "right";
  }

  top() {
    this.newArr = [...this.newArr, ...this.matrix.shift()];
    this.currDirection = "right";
  }

  bottom() {
    this.newArr = [...this.newArr, ...this.matrix.pop().reverse()];
    this.currDirection = "left";
  }

  right() {
    for (let arr of this.matrix) {
      this.newArr.push(arr.pop());
    }
    this.currDirection = "bottom";
  }

  left() {
    for (let i = this.matrix.length - 1; i >= 0; i--) {
      this.newArr.push(this.matrix[i].shift());
    }
    this.currDirection = "top";
  }
  unroll() {
    while (this.newArr.length < this.totalItems) {
      this[this.currDirection]();
    }
    return this.newArr;
  }
}

function unroll(squareArray) {
  const funcs = new UnrollFuncs(squareArray);
  return funcs.unroll();
}

module.exports = unroll;
