let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

function createNode(value) {
    return {
        value: value,
        next: null,
        prev: null
    };
}

let head = null;
let tail = null;

for (let i = 1; i <= N; i++) {
    let newNode = createNode(i);
    if (!head) {
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
    }
}

while (head !== tail) {
    head = head.next;
    head.prev = null;

    if (head !== tail) {
        tail.next = head;
        head.prev = tail;
        tail = head;
        head = head.next;
        tail.next = null;
    }
}

console.log(head.value);
