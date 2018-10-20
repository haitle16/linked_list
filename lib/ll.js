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

  insertBefore(value, newVal){
    let node = new Node(newVal);
    if(! this.head) {
        this.head = node;
        return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      if(currentNode.next.value === value){
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value,newVal){
    let node = new Node(newVal);
    if(! this.head) {
        this.head = node;
        return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      if(currentNode.value === value){
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
      currentNode = currentNode.next;
    }
  }

  kth_from_end(k){
    const arr= [];
    let currentNode = this.head;
    while(currentNode.next){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    arr.push(currentNode.value);
    if (k > arr.length-1) {return 'Exception'}
    return arr[(arr.length-1) - k];
  }

  ll_merge(list1, list2){
  let currentOne = list1.head;
  let currentTwo = list2.head;
  let currentPosition = list1.head;
  // console.log(currentOne.value, currentTwo.value);
  // while(!!currentOne || !!currentTwo){ // keep going until currentOne or currentTwo is null
  //   if(currentPosition == currentTwo){
  //     currentPosition.next = currentOne.next;
  //     currentTwo = currentTwo.next;
  //
  //
  //     // currentOne.next = currentTwo;
  //     // currentTwo = currentTwo.next;//move head to next val
  //     // currentOne = currentOne.next;
  //   }else if(!!currentPosition){
  //   currentPosition = currentPosition.next;
  //
  //   }
    console.log(currentTwo);
      // if(!currentOne.next){
    //   currentOne.next = currentTwo.head;
    //   return list1;
    // }else if(!currentTwo) {
    //   currentTwo.next = currentOne.next;
    //   currentOne.next = currentTwo;
    //   return list1;
    // }
  // }

  }
}

module.exports = LinkedList;