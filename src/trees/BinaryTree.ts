import { JSONValue } from '../types';

type BinaryNodeChild = BinaryTreeNode | null;

class BinaryTreeNode {
  public left: BinaryNodeChild = null;
  public right: BinaryNodeChild = null;

  constructor(public value: JSONValue, public parent: BinaryNodeChild) {}

  findNode(value: JSONValue) {
    let node: BinaryTreeNode = this;

    while (node) {
      if (value === node.value) return node;
      if (value > node.value && node.right) node = node.right;
      if (value < node.value && node.left) node = node.left;
    }

    return null;
  }

  insertNode(value: JSONValue) {
    const insert = (v: JSONValue, node: BinaryTreeNode) => {
      if (v < node.value) {
        if (!node.left) {
          node.left = new BinaryTreeNode(v, node);
        } else {
          insert(v, node.left);
        }
      }
      if (v > node.value) {
        if (!node.right) {
          node.right = new BinaryTreeNode(v, node);
        } else {
          insert(v, node.right);
        }
      }
    };

    insert(value, this);
  }
}
