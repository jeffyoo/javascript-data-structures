var Node = function(val) {
  this.value = val;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(val) {
  if (val === undefined) {
    return 'please pass in a value to addToTail()';
  }

  var node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeNode = function(target) {
  if (target === undefined) {
    return 'please pass in a value to removeNode()';
  } else if (!this.head) {
    return 'there are no nodes in this linked list.';
  }

  while (this.head && this.head.val === target) {
    this.head = this.head.next;
  }

  var current = this.head;

  while (current) {
    while (current.next && current.next.val === val) {
      current.next = current.next.next;
    }

    current = current.next;
  }
}

LinkedListed.prototype.deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
