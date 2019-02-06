function makeQueue() {
    const queue = []
    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length -1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

const q = makeQueue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.peek())
console.log(q.isEmpty())
console.log(q.length)
q.dequeue()
console.log(q.peek())
