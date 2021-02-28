# Min_Heap

A basic javascript implementation of a binary Min Heap.  Allows order log(n) insert/extract operations, as well as O(1) peek to get the minimum item.


## Usage

```
let heap = new MinHeap();
heap.push(5);
heap.push(6);
heap.push(4);
heap.pop();
heap.peek(); // returns 5
heap.push(2);
heap.push(3);
heap.push(1);
heap.peek(); // returns 1
heap.length; // returns 5
heap.pop();
heap.peek(); // returns 2
heap.length; // returns 4
```