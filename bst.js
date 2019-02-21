class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
            return this
        }
        let current = this.root
        while(true) {
            if(value === current.value) return false
            if(value < current.value) {
                if(!current.left) {
                    current.left = node
                    return this
                }
                current = current.left
            } else {
                if(!current.right) {
                    current.right = node
                    return this
                }
                current = current.right
            }
        }
    }
    search(value) {
        let current = this.root
        if(!current) return null
        while(current) {
            if(value == current.value) {
                return current
            }
            if(value > current.value) {
                current = current.right
            } else {
                current = current.left
            }
        }
        
        return null
    }
}

const tree = new BST()