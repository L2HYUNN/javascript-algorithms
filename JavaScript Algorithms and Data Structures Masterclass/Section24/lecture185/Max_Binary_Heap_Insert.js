class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const value = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor(currentIndex - 1 / 2);
      let parent = this.values[parentIndex];

      if (parent >= value) break;
      this.values[parentIndex] = value;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
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
