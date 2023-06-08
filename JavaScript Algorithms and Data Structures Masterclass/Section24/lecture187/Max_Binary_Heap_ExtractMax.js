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
  extractMax() {
    // fail
    const root = this.values.shift();
    const last = this.values.pop();
    this.values.unshift(last);

    let currentIndex = 0;

    let rightIndex = 2 * currentIndex + 1;
    let leftIndex = 2 * currentIndex + 2;

    while (true) {
      const current = this.values[currentIndex];
      const right = this.values[rightIndex];
      const left = this.values[leftIndex];

      if (current < right || current < left) {
        const maxIndex = Math.max(right, left);
        const max = this.values[maxIndex];

        this.values[currentIndex] = max;
        this.values[maxIndex] = current;
        currentIndex = maxIndex;
        console.log(current, left, right);
        console.log(max);
      } else {
        break;
      }
    }

    return root;
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
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
