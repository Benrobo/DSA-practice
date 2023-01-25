// linkedlist is basically a linear data structure where each element links to the next element on the list.

const { log } = console;


class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }
}

class Node {
    next = null;
    prev = null;
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    countNodes(head) {
        let count = 1;
        let curr = head;
        while (curr.next !== null) {
            curr = curr.next;
            count++;
        }
        log(count)
    }
}

const head = new Node(2)
const n2 = new Node(4)
const n3 = new Node(6)
const n4 = new Node(8)
const n5 = new Node(10)
const n6 = new Node(12)

head.next = n2;
n2.next = n3;
n3.next = n4;
// n4.next = n5;
// n5.next = n6;

head.countNodes(head)
