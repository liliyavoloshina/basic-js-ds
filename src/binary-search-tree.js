// import { NotImplementedError } from '../extensions/index.js';

import { Node } from '../extensions/list-tree.js'

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

export default class BinarySearchTree {
  // class BinarySearchTree {

  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(value) {
    const newNode = new Node(value)

    if (this.rootNode === null) {
      this.rootNode = newNode
    } else {
      let current = this.rootNode

      while (current) {
        if (value > current.data) {
          if (current.right === null) {
            current.right = newNode
            break
          }
          current = current.right
        } else if (value < current.data) {
          if (current.left === null) {
            current.left = newNode
            break
          }
          current = current.left
        }
      }
    }
  }

  has(value) {
    let current = this.rootNode

    while (current !== null) {
      if (value === current.data) {
        return true
      } else {
        if (value > current.data) {
          current = current.right
        } else if (value < current.data) {
          current = current.left
        }
      }
    }

    return false
  }

  find(value) {
    let current = this.rootNode

    while (current !== null) {
      if (current.data === value) {
        return current
      } else {
        if (value > current.data) {
          current = current.right
        } else if (value < current.data) {
          current = current.left
        }
      }
    }

    return null
  }

  remove(value) {
    let nodeToRemove = this.rootNode,
      prev = null

    // find node we need to remove and its previous node 
    while (nodeToRemove !== null) {
      if (value === nodeToRemove.data) {
        break
      }

      if (value > nodeToRemove.data) {
        prev = nodeToRemove
        nodeToRemove = nodeToRemove.right
      } else if (value < nodeToRemove.data) {
        prev = nodeToRemove
        nodeToRemove = nodeToRemove.left
      }
    }

    // maxNode is the node we replace with removing 
    let maxNode = null

    // case 1: removing node has two children
    if (nodeToRemove.right !== null && nodeToRemove.left !== null) {
      let prevMaxNode = nodeToRemove
      maxNode = nodeToRemove.left
      while (maxNode.right !== null) {
        prevMaxNode = maxNode
        maxNode = maxNode.right
      }

      // copy left subtree from removing node to replacement
      maxNode.right = nodeToRemove.right

      if (prevMaxNode !== nodeToRemove) {
        // remove replacement node from its current position 
        prevMaxNode.right = null

        // copy right subtree to replacement 
        maxNode.left = nodeToRemove.left
      }
      // case 2: removing node has only right child 
    } else if (nodeToRemove.right !== null) {
      maxNode = nodeToRemove.right
      // case 3: removing node has only left child 
    } else if (nodeToRemove.left !== null) {
      maxNode = nodeToRemove.left
    }

    // replace removing node with its max node
    if (nodeToRemove === this.rootNode) {
      this.rootNode = maxNode
    } else if (nodeToRemove.data > prev.data) {
      prev.right = maxNode
    } else if (nodeToRemove.data < prev.data) {
      prev.left = maxNode
    }
  }

  max() {
    let current = this.rootNode

    while (current.right !== null) {
      current = current.right
    }

    return current.data
  }

  min() {
    let current = this.rootNode

    while (current.left !== null) {
      current = current.left
    }

    return current.data
  }
}
