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
        return this.left !== null;
    }

    hasRight() {
        return this.right !== null;
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

    /**
     * Insert a node into Binary Search Tree
     * Runtime: O(log(n)) → where n is the size of the binary tree
     * Space Complexity: O(1) → we only create one node for the insertion
     * @param {Number} data 
     * @returns 
     */
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

    /**
     * Delete a node from the binary search tree
     * Runtime: O(log(n)) → we split the tree in half on each subsequent search
     * Space Complexity: O(1) → We don't add anything to the tree, we simply delete a node
     * @param {Number} data 
     * @param {Node} parent 
     */
    delete(data, parent = this.root) {
        if(!parent) {
            return parent;
        } else {
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
                        3. Delete the duplicate child node as we no longer need it, and set the result as the new right node
                    */
                   const temp = this.getMin(parent.right);
                   parent.data = temp;
                   parent.right = this.delete(temp, parent.right);
                }
            } else if(data < val) {
                this.delete(data, parent.left)
            } else {
                this.delete(data, parent.right)
            }
        }
        return parent;
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
bst.delete(62)
console.log(`Preorder (After Delete): `)
bst.preOrder()
