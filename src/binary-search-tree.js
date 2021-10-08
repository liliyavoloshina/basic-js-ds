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
        if (value < current.data) {
          if (current.left === null) {
            current.left = newNode
            break
          } else {
            current = current.left
          }
        } else if (value > current.data) {
          if (current.right === null) {
            current.right = newNode
            break
          } else {
            current = current.right
          }
        } else {
          break
        }
      }
    }
  }

  has(value) {
    let current = this.rootNode

    while (current) {
      if (value === current.data) {
        return true
      }

      current = value > current.data ? current.right : current.left
    }

    return false
  }

  find(value) {
    let current = this.rootNode

    while (current) {
      if (value === current.data) {
        return current
      }

      current = value > current.data ? current.right : current.left
    }

    return null
  }

  remove(data) {
    if (!this.has(data)) {
      return
    }

    const helper = (data, node) => {
      if (node.data === data) {
        // if node has no children
        if (node.left === null && node.right === null) {
          // replace node with null ("delete it")
          return null
        }

        // if node has only right child
        if (node.right !== null && node.left === null) {
          // replace node with its present right child
          return node.right
        }

        // if node has only left child
        if (node.left !== null && node.right === null) {
          // replace node with its present left child
          return node.left
        }

        // if node has two children go right and find the min node and replace it
        let replaced = this.min(node.right)
        node.data = replaced.data

        // delete the most left node we replaced
        node.right = helper(replaced.data, node.right)
        return node
      }

      if (data < node.data) {
        node.left = helper(data, node.left)
        return node
      }

      if (data > node.data) {
        node.right = helper(data, node.right)
        return node
      }
    }

    helper(data, this.rootNode)
  }

  min(node = this.rootNode) {
    let min = node
    while (min.left !== null) {
      min = min.left
    }
    // return an entire node if request
    if (arguments.length > 0) {
      return min
    }
    return min.data
  }

  max() {
    let max = this.rootNode
    while (max.right !== null) {
      max = max.right
    }
    return max.data
  }
}
