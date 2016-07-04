'use strict';

const BST = class BST {
  constructor(val) {
    this.left = null;
    this.right = null;
    if (val) {
      this.val = val;
    }
  }

  add(val) {
    if (!this.val) {
      this.val = val;
      return
    }

    let cur = this;
    let newTree = new BST(val);

    while (true) {
      if (newTree.val > cur.val) {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = newTree;
          return;
        }
      } else if (newTree.val < cur.val) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = newTree;
          return;
        }
      } else {
        console.error("That value already exists in the tree.");
        return;
      }
    }
  }

  contains(target) {
    if (!this.val) {
      return false;
    }

    if (target < this.val) {
      return !!this.left && this.left.contains(target);
    } else if (target > this.val) {
      return !!this.right && this.right.contains(target);
    } else {
      return true;
    }
  }

  remove(val) {
    if (!this.val) {
      return null;
    }
  }
}

module.exports = BST;
