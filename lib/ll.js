'use strict';

const Node = require('./node.js');
class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, need add to end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;

  }

  prepend(value){
    let node = new Node(value);
    console.log(node);
    if(! this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }
  reverse(){

  }

}

module.exports = LinkedList;