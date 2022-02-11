var obj = { singer: 'song chong', age: 12 }
var info = { base: obj, country: 'china' }
var info2 = { base: obj, country: 'asia' }

console.log(info);
info.base.singer = 'diso disco'
console.log(obj);
console.log(info);
console.log(info2);






// var arr = [1, 2, 3, 4, 5]
// var brr = [...arr]


// console.log(arr);
// console.log(brr);

// brr.push(23);

// console.log(arr);
// console.log(brr);