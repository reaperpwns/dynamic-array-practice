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
    if (this.length + 1 > this.capacity) this.resize()
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    let val = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return val;
  }

  shift() {
    let val = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    this.data[this.length] = undefined;
    return val;
  }

  unshift(val) {
    if (this.length + 1 > this.capacity) this.resize()
    this.length++;
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;

  }

  indexOf(val) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (this.data[i] === val) return i
    }
    return -1
  }

  resize() {
    const newCapacity = this.capacity * 2;
    this.capacity = newCapacity;
    const oldData = this.data;
    this.data = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      this.data[i] = oldData[i];
    }
  }

}


module.exports = DynamicArray;
