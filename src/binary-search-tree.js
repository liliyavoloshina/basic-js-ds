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

  add(data) {
    const newNode = new Node(data)

    if (this.rootNode === null) {
      this.rootNode = newNode
    } else {
      this.addCheck(this.rootNode, newNode)
    }
  }

  addCheck(node, newNode) {
    // go left
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.addCheck(node.left, newNode)
      }
    }
    // go right
    if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.addCheck(node.right, newNode)
      }
    }
  }

  has(el, node = this.rootNode) {
    if (node.data === el) {
      return true
    }

    if (el < node.data && node.left) {
      return this.has(el, node.left)
    } else if (el > node.data && node.right) {
      return this.has(el, node.right)
    } else {
      return false
    }
  }

  find(data, node = this.rootNode) {
    if (node.data === data) {
      return node
    }

    if (data < node.data && node.left) {
      return this.find(data, node.left)
    } else if (data > node.data && node.right) {
      return this.find(data, node.right)
    } else {
      return null
    }
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