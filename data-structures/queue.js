class Queue{
    constructor(size = undefined) {
        this.size = size;
        if (size) {
            this.arr = new Array(size);
        } else {
            this.arr = [];
        }
    }

    push(value) {
        if(this.size && this.arr.length === this.size) {
            throw new Error('The queue is full.')
        }

        this.arr.push(value)
    }

    pop() {
        this.arr.shift();
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}
