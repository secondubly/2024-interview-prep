class Stack {
    constructor(size = null) {
        this.size = size;
        if(size) {
            this.arr = new Array(size);
        } else {
            this.arr = [];
        }
    }

    push(value) {
        this.arr.push(value)
    }

    pop() {
        return this.array.pop()
    }

    isEmpty() {
        return this.array.length === 0;
    }
}