function Node(value){
  this.value = value;
  this.next = null;
}

function singlyList(){
  this.length = 0;
  this.head = null;
}

singlyList.prototype.add = function(value){
  var node = new Node(value);
  var currentNode = this.head;
  if(this.length === 0){
    this.head = node;
    this.length++;
    return node;
  }
  while(currentNode.next){
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.length++;
  return node;
}

singlyList.prototype.searchNodeAt = function(position){
  var currentNode = this.head;
  var length = this.length;
  var count = 1;
  if((length === 0) || (position > length) || (position < 1)) return "invalid position";
  while(count < position){
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}

singlyList.prototype.remove = function(position){
  var currentNode = this.head;
  var length = this.length;
  var beforeNodeToDelete;
  var count = 1;
  if((position < 1) || (position > length)) return "invalid position"
  if(position === 1){
    this.head = currentNode.next;
    this.length--;
    return currentNode;
  }
  while(count < position){
    beforeNodeToDelete = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  beforeNodeToDelete.next = currentNode.next;
  this.length--;
  return currentNode;
}

var ll = new singlyList();
ll.add("taco");
console.log(ll);
ll.add(24);
console.log(ll);
ll.add("Taipei");
console.log(ll)
console.log(ll.searchNodeAt(3));
ll.remove(2);
console.log(ll); 