// implementation queue with array
var qq = [1,2,3,4,5];

// start of array => top of queue
// end of array => tail of queue
qq.push(6);  // push method [1,2,3,4,5,6]
qq.shift();  // pop method [2,3,4,5,6]

// start of array => tail of queue
// end of array => top of queue 
qq.unshift(1);  // push method [1,2,3,4,5,6]
qq.pop(6);  // pop method [1,2,3,4,5]

// implementation queue with linkedlist
function Node(value){
  this.value = value;
  this.next = null;
}

function Queue(){
  this.size = 0;
  this.first = null;
}

Queue.prototype.isEmpty = function(){
  return (this.size === 0);
}

Queue.prototype.getSize = function(){
  return this.size;
}

Queue.prototype.enqueue = function(value){
  var node = new Node(value);
  var currentNode = this.first;
  if(this.size === 0){
    this.first = node;
    this.size++;
    return node;
  }
  while(currentNode.next){
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.size++;
  return node;
}

Queue.prototype.dequeue = function(){
  var nodeToDelete = this.first;
  this.first = nodeToDelete.next;
  this.size--;
  return nodeToDelete;
}

var q = new Queue();
q.enqueue("taco");
q.enqueue("24");
console.log(q);
q.dequeue();
console.log(q);