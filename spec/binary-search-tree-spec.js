'use strict';

const BST = require('../binary-search-tree/solution');

describe("Binary Search Tree", () => {

  it("should be able to add nodes", () => {

    let a = new BST(3);
    a.add(2);
    a.add(4);

    expect(a.val).toBe(3);
    expect(a.left.val).toBe(2);
    expect(a.right.val).toBe(4);
  });

  it("should be able to check if a value exists in a tree", () => {

    let a = new BST(3);
    a.add(2);
    a.add(4);

    expect(a.contains(2)).toBe(true);
    expect(a.contains(3)).toBe(true);
    expect(a.contains(4)).toBe(true);
    expect(a.contains(5)).toBe(false);
    expect(a.contains(1)).toBe(false);
  });

  it("should not be able to find a node if no nodes exists", () => {

    let a = new BST();

    expect(a.contains(3)).toBe(false);
  })
})
