function Queue(){
  this.size = 0;
  this.first = null;
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

function Node(value){
  this.value = value;
  this.parent = null;
  this.children = [];
}

function tree(value){
  var node = new Node(value);
  this.root = node;
}

tree.prototype.traverseDF = function(callback){
  (function recurs(currentNode){
    for(let i = 0;i < currentNode.children.length;i++){
      recurs(currentNode.children[i]);
    }
    callback(currentNode);
  })(this.root);
}

tree.prototype.traverseBF = function(callback){
  var qq = new Queue();
  qq.enqueue(this.root);
  console.log(qq);
  var currentNode = qq.dequeue();
  console.log(currentNode);
  while(currentNode){
    for(let i = 0;i < currentNode.children.length;i++){
      qq.enqueue(currentNode.children[i]);
    }
    callback(currentNode);
    currentNode = qq.dequeue();
  }
}

var tree = new tree('one');

tree.root.children.push(new Node('two'));
tree.root.children[0].parent = tree.root;

// console.log(tree);
tree.root.children.push(new Node('three'));
tree.root.children[1].parent = tree.root;
// console.log(tree.root)
tree.root.children.push(new Node('four'));
tree.root.children[2].parent = tree.root;

tree.root.children[0].children.push(new Node('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];

tree.root.children[0].children.push(new Node('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];

tree.root.children[2].children.push(new Node('seven'));
tree.root.children[2].children[0].parent = tree.root.children[2];

// tree.traverseDF(function(node){
//   console.log(node.value);
// })

tree.traverseBF(function(node){
  console.log(node.value);
})