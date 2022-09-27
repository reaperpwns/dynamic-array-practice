class DynamicArray {

  constructor(capacity = 4) {
    this.capacity = capacity;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
