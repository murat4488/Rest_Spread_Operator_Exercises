//In this exercise, you’ll refactor some ES5 code into ES2015.
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

//Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...nums)=> nums.filter(num => num % 2 === 0)
console.log(filterOutOdds(1,2,3,4));

//findMin
const nnnn = [1,2,3,4]
const findMin = (...nums) => Math.min(...nums);
console.log(findMin(1,3));

//mergeObjects
const mergeObjects = ({...obj1}, {...obj2}) => ({...obj1, ...obj2}); 
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}) );

//doubleAndReturnArgs
const doubleAndReturnArgs  = (args, a, b, ) => [...args, (a * 2), (b * 2)];
console.log(doubleAndReturnArgs([2],10,4));

//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */
function removeRandom(items) {
    const result = [...items];
    const randomIndex = Math.floor(Math.random() * items.length);
    const removed = result.splice(randomIndex,1);
    return result;

}
console.log(removeRandom([1,2,3,4,5,6])); 


/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
    return [...array1, ...array2];

}
const arr1 = ['a', 'b','c'];
const arr2 = ['d', 'e', 'f']; 
console.log(extend(arr1, arr2));


/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
    const newObj = obj;
    return {...newObj, ...Object.fromEntries(key.map((k, i) => [k, val[i]]))};//source: https://chat.openai.com
   
}
const obj1 = {0:0, 1:1, 2:2};
const keys = ['x', 'y','z'];
const values = [1,2,3];
console.log(addKeyVal(obj1, keys, values));


/** Return a new object with a key removed. */
function removeKey(obj, key) {
    const newObj = obj;
    let { [key]: _, ...result } = newObj; //source:https://stackoverflow.com/questions/53753276/javascript-spread-and-rest-syntax-to-remove-specific-property-from-object 
    return result
}
const obj2 = {'a':1, 'b':2, 'c':3};
console.log(removeKey(obj2, 'b'));


/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}
console.log(combine(obj1, obj2));

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    const newObj = obj;
    return {...newObj, [key]:val};
}
const obj3 = {'x':1, 'q':2, 'w':3}
console.log(update(obj3, 'w', '8'));

