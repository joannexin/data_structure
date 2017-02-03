function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
}

// test
// var bst = new BST(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
// console.log(bst.right.left.left); // ===> 59


BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

// test
// var bst = new BST(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
// console.log(bst.contains(10)); // ===> true


BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') {
    iteratorFunc(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order);
  }
  if (order === 'in-order') {
    iteratorFunc(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc, order);
  }
  if (order === 'post-order') {
    iteratorFunc(this.value);
  }
}

// test
// var bst = new BST(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
//
// bst.depthFirstTraversal(log, 'post-order');
//
// function log(value) {
//   console.log(value);
// }


BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
}

// test
// var bst = new BST(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
//
// bst.breadthFirstTraversal(log);
//
// function log(node) {
//   console.log(node.value);
// }

BST.prototype.getMinVal = function() {
  if (!this.left) {
    return this.value;
  } else {
    return this.left.getMinVal();
  }
}

BST.prototype.getMaxVal = function() {
  if (!this.right) {
    return this.value;
  } else {
    return this.right.getMaxVal();
  }
}

// test
// var bst = new BST(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
//
// console.log(bst.getMinVal());
// console.log(bst.getMaxVal());


// runtime O(log n) only when it is balanced
// real life example
dictionary
phone book
Users
