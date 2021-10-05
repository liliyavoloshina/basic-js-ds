// import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

export default function removeKFromList(l, k) {
  const indexes = getIndexes(k)
  function getIndexes(valueToFind) {
    let current = l
    let index = 0
    let indexes = []

    while (current) {
      if (current.value === valueToFind) {
        indexes.push(index)
      }
      current = current.next
      index++
    }

    return indexes
  }

  return indexes
}
