class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreeSearch {
  constructor(binaryTreeRoot) {
    this.root = binaryTreeRoot;
  }

  depthFirstTraversal(algorithm = "preorder", callback) {
    if (!this.root) return;

    if (algorithm === "preorder") {
      this.#depthFirstTraversalPreorder(this.root, callback);
    } else if (algorithm === "inorder") {
      this.#depthFirstTraversalInorder(this.root, callback);
    } else if (algorithm === "postorder") {
      this.#depthFirstTraversalPostorder(this.root, callback);
    }
  }

  #depthFirstTraversalPreorder = (node, callback) => {
    if (!node) return;

    if (typeof callback === "function" && callback !== undefined) callback(node.data);

    if (node.left) this.#depthFirstTraversalPreorder(node.left, callback);
    if (node.right) this.#depthFirstTraversalPreorder(node.right, callback);
  };

  #depthFirstTraversalInorder = (node, callback) => {
    if (!node) return;

    if (node.left) this.#depthFirstTraversalInorder(node.left, callback);

    if (typeof callback === "function" && callback !== undefined) callback(node.data);

    if (node.right) this.#depthFirstTraversalInorder(node.right, callback);
  };

  #depthFirstTraversalPostorder = (node, callback) => {
    if (!node) return;

    if (node.left) this.#depthFirstTraversalPostorder(node.left, callback);
    if (node.right) this.#depthFirstTraversalPostorder(node.right, callback);

    if (typeof callback === "function" && callback !== undefined) callback(node.data);
  };
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

  display({ method = "dfs", config: { algorithm = "preorder" } }) {
    const binaryTreeSearch = new BinaryTreeSearch(this.root);

    if (method === "bfs") return;
    else if (method === "dfs") binaryTreeSearch.depthFirstTraversal(algorithm, console.log);
  }
}

function main() {
  const binaryTree = new BinaryTree();
  binaryTree.insert(20);
  binaryTree.insert(15);
  binaryTree.insert(18);
  binaryTree.insert(13);
  binaryTree.insert(25);
  binaryTree.insert(30);

  binaryTree.display({ method: "dfs", config: { algorithm: "preorder" } });
  console.log();
  binaryTree.display({ method: "dfs", config: { algorithm: "inorder" } });
  console.log();
  binaryTree.display({ method: "dfs", config: { algorithm: "postorder" } });
}

main();

module.exports = BinaryTree;
