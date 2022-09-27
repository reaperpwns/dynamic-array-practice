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
    let val = this.data[this.length - 1];
    this.data[this.length -1] = undefined;
    this.length--;
    return val;
  }

  shift() {


  }

  unshift(val) {
    this.length++;
    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;

  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
