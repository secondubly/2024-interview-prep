class Stack {
    constructor(size = undefined) {
        this.size = size;
        if(size) {
            this.arr = new Array(size);
        } else {
            this.arr = [];
        }
    }

    push(value) {
        if(this.size && this.arr[this.size - 1] != null) {
            throw new Error("The stack is full.")
        }
        this.arr.push(value);
    }

    pop() {
        return this.array.pop()
    }

    isEmpty() {
        return this.array.length === 0;
    }
}