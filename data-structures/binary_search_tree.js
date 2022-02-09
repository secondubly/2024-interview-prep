class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    isLeaf() {
        return !this.left && !this.right
    }

    hasLeft() {
        return this.left;
    }

    hasRight() {
        return this.right;
    }
}

class BinarySearchTree {
    constructor(data = null)  {
        if(data) {
           this.root = new Node(data) 
        } else {
            this.root = null
        }
    }

    insert(data) {
        const newNode = new Node(data);
        if(!this.root) { 
            this.root = newNode; 
        } else {
            let current = this.root;
            while(current) {
                if(data === current.data) { 
                    return new Error('This value already exists within the tree.') 
                } else if(data < current.data) {
                    if(!current.hasLeft()) {
                        current.left = newNode;
                        current = current.left;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else { // value must be greater than current node's value
                    if(!current.hasRight()) {
                        current.right = newNode;
                        current = current.right;
                        return this; // return the node
                    } else {
                       current = current.right;
                    }
                }
            }
        }
    }

    delete(data, parent = this.root) {
        const val = parent.data;
        if (val === data) {
            if(parent.isLeaf()) {
                parent = null;
            } else if(parent.hasLeft() && !parent.hasRight()) {
                parent = parent.left;
            } else if(!parent.hasLeft() && parent.hasRight()) {
                parent = parent.right;
            } else {
                /*
                    1. Get smallest value of right subtree (you can also get the largest value of the left subtree, either way works)
                    2. Set parent to value from step 1.
                    3. Delete the duplicate child node as we no longer need it
                */
               const temp = getMin(parent.right);
               parent.data = temp;
               this.delete(temp, parent.right);
            }
        } else if(data < val) {
            this.delete(data, parent.left)
        } else {
            this.delete(data, parent.right)
        }
    }

    getMin(node = this.root) {
        if(!node.left) {
            return node.data;
        }
        this.getMin(node.left)
    }

    getMax(node = this.right) {
        if (!node.right) {
            return node.data;
        }
        this.getMax(node.right);
    }

    // preorder: node, left, right
    preOrder(node = this.root) {
        if (!node) {
            return;
        } else {
            console.log(`${node.data} `)
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder(node = this.root) {
        if(!node) {
            return;
        } else {
            this.preOrder(node.left);
            console.log(`${node.data} `)
            this.preOrder(node.right);
        }
    }

    postOrder(node = this.root) {
        if(!node) {
            return;
        } else {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(`${node.data} `)
        }
    }
}

const bst = new BinarySearchTree(52);
bst.insert(40)
bst.insert(62)
bst.insert(24)
bst.insert(32)
bst.insert(58)
bst.insert(69)
console.log(`Preorder: `)
bst.preOrder()
console.log(`Postorder: `)
bst.postOrder()
console.log(`In-Order: `)
bst.inOrder()