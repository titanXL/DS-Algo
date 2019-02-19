class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        const node = new Node(val)
        if(this.size === 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return ++this.size
    }

    dequeue() {
       if(!this.first) return null
       let temp = this.first
       if(this.first === this.last) {
           this.last = null
       }
       this.first = this.first.next
       this.size--
       return temp.value
    }
}