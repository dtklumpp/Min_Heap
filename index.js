//todo make generic comparison function
//so can do Max Heap or Priority Queue very easily

//todo make extract arbitrary node method
//so can combine into min stack etc

class Node {
    constructor(val=null){
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class MinHeap {
    constructor(){
        this.root = null;
        this.length = 0;
    }

    peek(){
        return this.root.val;
    }

    push(val){
        let node = new Node(val);
        this.length++;
        if(!this.root){
            this.root = node;
        } else {
            let path = this.getPath(this.length);

            let plumb = this.getBottom(path);
            plumb.head[plumb.direction] = node;
            node.parent = plumb.head;

            while(node.parent && node.val < node.parent.val){
                this.swapVals(node, node.parent);
                node = node.parent;
            }
        }
        return;
    }

    pop(){
        let popped = this.root;
        this.length--;

        let path = this.getPath(this.length + 1);
        let plumb = this.getBottom(path);
        let bottom = plumb.head[plumb.direction];
        this.swapVals(popped, bottom);

        //eliminate bottom node
        if(bottom.parent.right === bottom){
            bottom.parent.right = null;
        } else {
            bottom.parent.left = null;
        }
        bottom.parent = null;


        while((popped.left && popped.val > popped.left.val)
        || (popped.right && popped.val > popped.right.val)){
            if(popped.val > popped.left.val){
                this.swapVals(popped, popped.left);
                popped = popped.left;
            } else {
                this.swapVals(popped, popped.right);
                popped = popped.right;
            }
        }
    }

    swapVals(node1, node2){
        let temp = node1.val;
        node1.val = node2.val;
        node2.val = temp;
        return;
    }

    getPath(num){
        let path = [];
        while(num > 0){
            let digit = num % 2;
            path.push(digit);
            num = (num-digit)/2;
        }
        return path;
    }

    getBottom(path){
        path.pop();
        let head = this.root;
        let direction = null;
        while(path.length > 0){
            let choice = path.pop();
            if(choice === 1){
                direction = "right";
            } else {
                direction = "left";
            }
            if(path.length){
                head = head[direction];
            }
        }
        let output = {
            head: head,
            direction: direction,
        }
        return output;
    }
}

function log(x){
    console.log(x);
}

let heap = new MinHeap();
let out = [];

heap.push(5);
heap.push(6);

log(heap.peek())
log(heap.length)
log(heap.root.left.val)
log(heap.root.right)

heap.push(4);

log(heap.peek())

heap.pop();
log(heap.peek())

heap.push(2);
heap.push(3);
heap.push(1);
log(heap.peek())
log(heap.length)

heap.pop();
log(heap.peek())
log(heap.length)

//should all output
//5
//2
//6
//null
//4
//5
//1
//5
//2
//4

//want operatons
//push
//pop
//peek