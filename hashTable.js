function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// log an instance of HashTable
// var myHT = new HashTable(30);
// console.log(myHT);

// console.log('hello world'.charCodeAt(4));
HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}

// test hash function
// var myHT = new HashTable(30);
// console.log(myHT.hash('Becca'));

HashTable.prototype.insert = function(key, value) {
  // hash key to figure out which bucket to put in
  var index = this.hash(key);
  // if bucket is empty
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  }
  // if bucket is not empty, this it is the first node in this bucket
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  // if bucket is not empty, travel though the bucket, add as the last one
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      // update if already exits
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}

// test
// var myHT = new HashTable(30);
// myHT.insert('Dean', 'dean@gmail.com');
// myHT.insert('Megan', 'magan@gmail.com');
// myHT.insert('Dane', 'dane@gmail.com');
// myHT.insert('Dean', 'deanmachine@gmail.com');
// myHT.insert('Megan', 'magansmile@gmail.com');
// console.log(myHT.buckets);

HashTable.prototype.get = function(key) {
  // hash key into number
  var index = this.hash(key);
  // if bucket is empty return null, otherwise travel through the bucket
  if (!this.buckets[index]) {
    return null;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

// test
// var myHT = new HashTable(30);
// myHT.insert('Dean', 'dean@gmail.com');
// myHT.insert('Megan', 'magan@gmail.com');
// myHT.insert('Dane', 'dane@gmail.com');
// myHT.insert('Dean', 'deanmachine@gmail.com');
// myHT.insert('Megan', 'magansmile@gmail.com');
// console.log(myHT.get('Dean'));

HashTable.prototype.retrieveAll = function() {
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
}

// test
// var myHT = new HashTable(30);
// myHT.insert('Dean', 'dean@gmail.com');
// myHT.insert('Megan', 'magan@gmail.com');
// myHT.insert('Dane', 'dane@gmail.com');
// myHT.insert('Dean', 'deanmachine@gmail.com');
// myHT.insert('Megan', 'magansmile@gmail.com');
// myHT.insert('Joe', 'joe@gmail.com');
// myHT.insert('Samantha', 'sammy@gmail.com');
// console.log(myHT.retrieveAll());

// runtime
constant time insertion and lookup O(1)
// real life examples
email provider storing addessess
Users of an application
// cons
data doesn't store references to other pirces of data in the data structure
