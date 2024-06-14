const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0].trim());
const operations = input[1].trim().split(' ').map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.length--;
    return value;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

function findInitialCardOrder(N, operations) {
  const deck = new Deque();
  let currentCard = 1;

  for (let i = N - 1; i >= 0; i--) {
    const operation = operations[i];
    if (operation === 1) {
      deck.unshift(currentCard);
    } else if (operation === 2) {
      if (deck.length > 0) {
        const topCard = deck.shift();
        deck.unshift(currentCard);
        deck.unshift(topCard);
      } else {
        deck.unshift(currentCard);
      }
    } else if (operation === 3) {
      deck.push(currentCard);
    }
    currentCard++;
  }

  return deck.toArray();
}

const result = findInitialCardOrder(N, operations);

console.log(result.join(' '));
