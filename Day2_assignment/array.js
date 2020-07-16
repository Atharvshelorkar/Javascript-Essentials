console.log("Array Method");

let arr = ['1','2','3','4','5'];
let arr2 = ['jay','ananny','jaydeep'];

console.log(arr);


console.log(Array.isArray(arr)); 
console.log(arr.reverse());
console.log(arr.concat(arr2));

arr2.unshift('jaydeep');
console.log(arr2);


arr2.push('shree');
console.log(arr2);

arr.splice(2,0,'6','7');
console.log(arr);

console.log("End with Array Method.")

