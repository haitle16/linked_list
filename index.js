'use strict';
let LL = require('./lib/ll.js');
let fs = require('fs');



let list1 = new LL();
let initialValue = 'First One';
let initialValue2 = 'Second One';
let initialValue3 = 'Third One';
let newValue = 'Fourth One';
let anotherOne = 'Fifth One';

list1.prepend(initialValue);
list1.prepend(initialValue2);
list1.prepend(initialValue3);
list1.prepend(newValue);
list1.prepend(anotherOne);

console.log(list1.head);
// console.log(list1.head.value);
let initialValue4 = 'ORIGINAL One';
let initialValue5 = 'Last One';


// list.insertBefore(initialValue2, initialValue4);
//
// console.log(list.head);
//
// list.insertAfter(initialValue2, initialValue5);
// console.log(list.head.next.next.next.next);
// let x = list.kth_from_end(0);
// console.log(x);

let list2 = new LL();
let value1 = 1;
let value2 = 2;
let value3 = 3;
let value4 = 4;
let value5 = 5
list2.append(value1);
list2.append(value2);
list2.append(value3);
list2.append(value4);
list2.append(value5);

console.log(list2.head);
console.log(!!list2.head.next.next.next.next.next);
console.log(!!list2.head);

console.log('XXXXXXXXXXXXXX');


list1.ll_merge(list1, list2);

console.log(list1.head);
console.log(list1.head.next.next);
console.log(list1.head.next.next.next.next);
console.log(list1.head.next.next.next.next.next.next);
console.log(list1.head.next.next.next.next.next.next.next.next);
// console.log(list2);
// console.log(list1.head);









// console.log(list.head);
// console.log(list.head.next.next);
