// import { NotImplementedError } from '../extensions/index.js';

import { Node } from '../extensions/list-tree.js'

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// export default class BinarySearchTree {

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

// }

class BinarySearchTree {

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

  has(/* data */) {}

  find(/* data */) {}

  remove(/* data */) {}

  min() {}

  max() {}
}

const tree = new BinarySearchTree()
tree.add(2)
tree.add(1)
tree.add(3)
console.log(tree.root())