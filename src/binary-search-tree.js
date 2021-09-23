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
    if (this.rootNode === null) {
      this.rootNode = new Node(data)
    }
  }

  has(/* data */) {}

  find(/* data */) {}

  remove(/* data */) {}

  min() {}

  max() {}
}

const tree = new BinarySearchTree()
tree.add(1)
console.log(tree.root().data)