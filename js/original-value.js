let name1 = "foo";
let name2 = new String("foo");

name1.bar = 1;
name2.bar = 1;

console.log(name1.bar);
console.log(name2.bar);
console.log(typeof name1);
console.log(typeof name2);
