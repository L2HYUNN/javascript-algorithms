class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  bubbleUp() {}
  insert(value) {
    this.values.push(value);
    let currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor(currentIndex - 1 / 2);
      let parent = this.values[parentIndex];

      if (parent < value) {
        this.values[parentIndex] = value;
        this.values[currentIndex] = parent;
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
