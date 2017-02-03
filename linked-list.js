function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// create a node as an instance of Node:
// var node1 = new Node(100, 'node2', null);
// console.log(node1);

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);

  // if LinkedList is not empty, 'this' refer to LinkedList
  if (this.head) {
    this.head.prev = newNode;
  } else { // LinkedList is empty
    this.tail = newNode;
  }
  // set head to newNode
  this.head = newNode;
};

// test our LinkedList
// var ll = new LinkedList();
// ll.addToHead(100);
// console.log(ll);
// ll.addToHead(200);
// console.log(ll);
// ll.addToHead(300);
// console.log(ll);

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
}

// test our LinkedList
// var myLL = new LinkedList();
// myLL.addToTail(10);
// console.log(myLL);
// myLL.addToTail(20);
// console.log(myLL);
// myLL.addToTail(30);
// console.log(myLL.tail.prev.prev); // ==> node value of 10
// myLL.addToHead(100);
// console.log(myLL);


LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
}

// test our LinkedList
// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// console.log(ll.removeHead()); // ==> 2000;

LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.tail = null;
  }
  return val;
}

// test our LinkedList
// var ll = new LinkedList();
// ll.addToHead("one");
// ll.addToHead("two");
// ll.addToHead("three");
// console.log(ll.removeTail());

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
}

// test our LinkedList
// var myLL = new LinkedList();
// myLL.addToHead(123);
// myLL.addToHead(70);
// myLL.addToHead('hello');
// myLL.addToTail(19);
// myLL.addToTail('world');
// myLL.addToTail(20);
// console.log(myLL.search(7));


LinkedList.prototype.indexOf = function(value) {
  var result = [];
  var currentNode = this.head;
  var i = 0;
  while (currentNode) {
    if (currentNode.value === value) {
      result.push(i);
    }
    currentNode = currentNode.next;
    i++;
  }
  return result;
}

// test our LinkedList
// var myLL = new LinkedList();
// myLL.addToHead(3);
// myLL.addToTail(5);
// myLL.addToTail(3);
// myLL.addToTail(8);
// console.log(myLL.indexOf(3));


// constant time O(1)
add/remove head
add/remove tail

// Linear time O(n)
search through LinkedList

// some real life example using LinkedList
online gaming
poker, board games, dominoes

// Why LinkedList is effecient?
because data doesn't have to be stored together, like the graph.
Each piece of data is stored on its own, each piece of data also
have its next pointer that reference the location of the next piece
of data. All the data are still connected, but not stored all in the
same place. LinkedListare also effecient in using space and memory.
