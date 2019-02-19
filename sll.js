class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const node = new Node(val)
        if(!this.head) {
            this.tail = this.head = node
        } else {
            this.tail.next=  node
            this.tail = node
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) {
            return null
        }
        let prev = this.head
        let temp = prev
        while(temp.next) {
            prev = temp
            temp = temp.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.tail = this.head = null
        }
        return temp
    }
    shift() {
        if(this.length === 0) return null
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        return currentHead
    }
    unshift(val) {
        const node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = this.head
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return null
        }
        let node = this.head
        let count = 0
        while(count !==index) {
            node = node.next
            count++
        }
        return node
    }
    set(index, value) {
        const node = this.get(index)
        if(!node) {
            return false
        }
        node.val = value
        return true
    }
    insert(index, value) {
        if(index < 0 || index > this.length) {
            return false
        }
        if(index === this.length) {
            this.length++
            return !!this.push(value)
        }
        if(index === 0) {
            this.length++
            return !!this.unshift(value)
        }
        this.length++
        const node = new Node(value)
        const prevNode = this.get(index - 1)
        node.next = prevNode.next
        prevNode.next = node
        return true
    }
    remove(index) {
        if(index < 0 || index >= this.length) {
            return false
        }
        if(index === this.length - 1) {
            return this.pop()
        }
        if(index === 0) {
            return this.shift()
        }
        this.length--
        const prev = this.get(index - 1)
        const current = prev.next
        prev.next = current.next

        return current
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next = null
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev

            prev = node
            node = next
        }
        return this
    }
}

const list = new SinglyLinkedList()

list.push('A')
list.push('B')
list.push('C')
list.push('D')
list.push('Y')
list.reverse()
console.log(list)