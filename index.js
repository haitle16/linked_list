'use strict';
let LL = require('./lib/ll.js');
let fs = require('fs');

let list = new LL();
let anotherOne = 'Another One';
let newValue = 'Soemthing Else';
let initialValue = 'First One';
let initialValue2 = 'Second One';
let initialValue3 = 'Third One';
list.prepend(anotherOne);
list.prepend(newValue);
list.prepend(initialValue);
list.prepend(initialValue2);
list.prepend(initialValue3);

// console.log(list);
// console.log(list.LinkedList);



// let initialValue = 'First One';
// list.prepend(initialValue);
// expect(list.head.value).toEqual(initialValue);

// let newValue = 'Soemthing Else';
// list.prepend(newValue);
// expect(list.head.value).toEqual(initialValue);

// let anotherOne = 'Another One';
// list.prepend(anotherOne);

console.log(list);
// console.log(list.head);
// console.log(list.head.next.next);
