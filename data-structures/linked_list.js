class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * Adds a node to the linked list - you could make this O(1) time complexity by adding to the front of the list
     * and constantly updating the head, but I didn't 🙂
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     * @param {*} data 
     * @returns 
     */
    add(data) {
        if (this.length === 0) {
            this.head = new Node(data);
        } else {
            let pointer = this.head;
            while (pointer.next !== null) {
                pointer = pointer.next;
            }
            let newNode = new Node(data);
            pointer.next = newNode;
        }
        this.length++;
        return;
    }

    /**
     * Deletes the node with the specified data and returns it - if the node is not found
     * we throw an error
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     * @param {*} data 
     * @returns the deleted node
     */
    delete(data) {
        let prevPointer = null;
        let pointer = this.head;
        while (pointer !== null) {
            if (pointer.data === data) {
                if(this.pointer === this.head) {
                    // if we're deleting the head node, we need to update it
                    this.head = pointer.next;
                    this.length--;
                    return pointer.data;
                }
                prevPointer.next = pointer.next;
                this.length--;
                return pointer.data;
            }
            prevPointer = pointer;
            pointer = pointer.next;
        }

        throw new Error('Value not found, please check your input.')
    }

    /**
     * Returns the node at the specified non-zero based index - if the index is invalid, throws an error
     * @param {number} index 
     */
    getAt(index) {
        const adjustedIndex = --index; // --index is NOT the same as index--, one happens before the assignment and one happens after!
        if (adjustedIndex > this.length || adjustedIndex < 0) {
            throw new Error('Invalid index provided')
        }

        let result = this.head;
        for(let counter = 0; counter < adjustedIndex; counter++) {
            result = result.next; // move to the next item
        }
        return result;
    }

    /**
     * Prints the linked list - this isn't really a requirement for linked list implementations,
     * but it's nice for testing
     * @returns 
     */
    print() {
        let pointer = this.head;
        while (pointer !== null) {
            process.stdout.write(`${pointer.data} `)
            pointer = pointer.next;
        }
        return;
    }
}

const singlyLinkedList = new LinkedList()
singlyLinkedList.add(492)
singlyLinkedList.add(183)
singlyLinkedList.print()