class Node {
    constructor (data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    add (data) {
        if(this.length === 0) {
            const newNode = Node(data)
            this.head = newNode;
        } else {
            let iterator = this.head;
            while (iterator.next !== null) {
                iterator = iterator.next;
            }
            const newNode = Node(data, iterator, null)
            iterator.next = newNode;
        }
        length++;
    }

    getAt (position) {
        if(this.length < position || position < 1) {
            throw new Error('Invalid position, please try again')
        }
        let iterator = this.head;
        for(let index = 1; index < position; index++) {
            iterator = iterator.next;
        }
        return iterator;
    }

    deleteAt(position) {
        if(this.length < position || position < 1) {
            throw new Error('Invalid position, please try again')
        }

        let iterator = this.head;
        for(let index = 1; index < position; index++) {
            iterator = iterator.next;
        }
        
        let prevNode = iterator.prev;
        let postNode = iterator.next;

        prevNode.next = postNode;
        postNode.prev = prevNode;
    }
}