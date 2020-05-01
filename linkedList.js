const _Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, insertBeforeItem) {
        if (!this.head) {
            this.insertFirst(item);
        }
        else {     
        let currNode = this.head;
        if (!currNode.next) {
            this.insertLast(item);
        }
        while (currNode.next.value !== insertBeforeItem) {
                currNode = currNode.next;
            }
            currNode.next = new _Node(item, this.find(insertBeforeItem))
        }
    }

    insertAfter(item, insertAfterItem) {
        if (!this.head) {
            this.insertFirst(item);
        }
        else { 
            let currNode = this.head;
            if (!currNode.next) {
                this.insertLast(item);
            }
            while (currNode.value !== insertAfterItem) {
                currNode = currNode.next;
            }
            currNode.next = new _Node(item, currNode.next);
        }
    }

    insertAt(item, insertAtPosition) {
        if (!this.head) {
            console.log(`There is no position ${insertAtPosition}`)
        }
        let currNode = this.head;
        for ( let i = 1; i < insertAtPosition; i++ ) {
            currNode = currNode.next;
        }
        // console.log('current position', currNode);
        this.insertBefore(item, currNode.value);
    }

    find(item) {
        // start at the head
        let currNode = this.head;
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // check for the item
        while (currNode.value !== item) {
            // return null if it's the end of the list and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                // otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // found it
        return currNode;
    }

    remove(item) {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // start at the head
        let currNode = this.head;
        // keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList;