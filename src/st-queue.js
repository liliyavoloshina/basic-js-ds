// const { NotImplementedError } = require('../extensions/index.js');

import { ListNode } from '../extensions/list-node.js';

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.head = null
  }

  enqueue(value) {
    const newNode = new ListNode(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let cur = this.head

      while (cur.next !== null) {
        cur = cur.next
      }

      cur.next = newNode
    }
  }

  dequeue() {
    // store top element 
    const topElement = this.head.value
    // remove top element 
    this.head = this.head.next
    return topElement
  }

  getUnderlyingList() {
    return this.head
  }
}
