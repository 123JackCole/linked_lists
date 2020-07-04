class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    add(data) {

        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
        }

        while (current.next) {
            current = current.next;
        }

        current.next = node;

    }

}





