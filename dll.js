class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail === null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  shift() {
    if (this.length === 0) return undefined;
    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail === null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }
}

const dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.pop();
console.log(dll);
