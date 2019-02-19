class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        const node = new Node(val)
        if(this.size === 0) {
            this.first = node
            this.last = node
        } else {
            const temp = this.first
            this.first = node
            this.first.next = temp
        }

        return ++this.size
    }

    pop() {
        if(this.size === 0) return null
        const node = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return node.value
    }
}