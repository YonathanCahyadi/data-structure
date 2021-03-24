class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      this.insertNode(this.root, new Node(data));
    }

    this.count++;
  }

  insertNode(node, newNode) {
    if (newNode.data <= node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  display() {
    console.log(this.root.data);
    this.traverseLeafs(this.root);
  }

  traverseLeafs(node) {
    if (node === null) {
      console.log(null);
      return;
    }

    if (node.left !== null) {
      console.log("/");
      console.log(node.left.data);
      this.traverseLeafs(node.left);
    }

    if (node.right !== null) {
      console.log("\\");
      console.log(node.right.data);
      this.traverseLeafs(node.right);
    }
  }
}

function main() {
  const binaryTree = new BinaryTree();
  binaryTree.insert(3);
  binaryTree.insert(2);
  binaryTree.insert(1);
  binaryTree.insert(5);
  binaryTree.insert(10);

  for (let i = 0; i < 10; i++) binaryTree.insert((Math.random() * 10) % 10);

  binaryTree.display();
}

main();

module.exports = BinaryTree;
