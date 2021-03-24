class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  deleteFirst() {
    if (this.head === null) return;

    this.head = this.head.next;
    this.count--;
  }

  deleteLast() {
    if (this.head === null) return;

    let currentNode = this.head;
    for (; currentNode.next.next !== null; currentNode = currentNode.next);

    currentNode.next = null;
    this.count--;
  }

  addFirst(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.count++;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      for (; currentNode.next !== null; currentNode = currentNode.next);

      currentNode.next = newNode;
    }

    this.count++;
  }

  toString() {
    if (this.head === null) return null;

    let string = "";
    for (let currentNode = this.head; currentNode !== null; currentNode = currentNode.next) {
      string += currentNode.data + " -> ";
    }

    string += null;

    return string;
  }

  display(config = {}) {
    if (config.count) console.log("Count: " + this.count);

    console.log(this.toString());
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}

module.exports = LinkedList;
