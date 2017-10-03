var a = "Taco";
var b = a;
b = "Cindy";
console.log(a);
console.log(b);

var c = true;
var d = c;
d = false;
console.log(c);
console.log(d);

var e = 10;
var f = e;
f = 20;
console.log(e);
console.log(f);

var arr1 = [1,2,3];  // literal notation for array object initialization
var arr2 = arr1;     // reference sharing
arr2.push(5);
console.log(arr1);
console.log(arr2);


var obj1 = {
  name : "Taco",
  age : 20
}                    //  literal notation for object initialization
var obj2 = obj1;     // reference sharing
obj2.age = 10;
console.log(obj1);
console.log(obj2);