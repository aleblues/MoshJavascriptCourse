// const numbers = [3, 4]
// //ADDElements
// //end
// numbers.push(5, 6);

// //Beginning
// numbers.unshift(1, 2)

// //Middle
// numbers.splice(2, 0, 10, 11)
// console.log(numbers);

// //FindElements Primitives
// var index = numbers.indexOf('e');
// console.log(index)

// var index = numbers.lastIndexOf(1);
// console.log(index)

// console.log(numbers.includes(1))

// var index2 = numbers.indexOf(1, 3);
// console.log(index2)

// //FindElements ReferenceTypes.
// const courses = [{
//         id: 1,
//         name: 'a'
//     },
//     {
//         id: 2,
//         name: 'b'
//     }
// ];
// //is false because the objects are different inside the array
// console.log(courses.includes({
//     id: 1,
//     name: 'a'
// }))

// const course = courses.find(function (course) {
//     return course.name === 'a';
// })

// console.log(course)


// const course2 = courses.findIndex(function (course) {
//     return course.name === 'a';
// })

//console.log(course2)

//arrow functions
// const course3 = courses.find(course =>
//     course.name === 'a'
// );
// console.log(course3)


//delete elements in an array
// const numbers = [1, 2, 3, 4];

// //delete from end
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// //delete from beginning
// const first = numbers.shift();
// console.log(numbers);

// //Middle
// numbers.splice(0, 1); //from index 2 and 1 element

// console.log(numbers);


//Emptying and ARRAY

//First solution
// numbers = []

//SECOND SOLUTION
// let numbers =[0,1,2,3]
// numbers.length =0;


// let numbers = [0, 1, 2, 3]
// numbers.splice(0, numbers.length)

// console.log(numbers)


//combine an array and slice arrays
// const first = [1, 2, 3]
// const second = [4, 5, 6]

// console.log(first)
// console.log(second)

// const combined = first.concat(second);
// console.log(combined)

// const slice = combined.slice(2, 4)
// console.log(slice)

// const first = [{
//     id: 1
// }]
// const second = [4, 5, 6]

// const combined = first.concat(second)
// console.log(combined)

// combined[0].id = 10;
// console.log(combined)
// console.log(first)

// //another method
// const combined2 = [...first, ...second]
// console.log(combined2)

// combined2 = [...first, 'a', ...second, 'b']

// const copy = combined.slice();
// const copy = [...combined]

//Iterating an ARRAY

// const numbers = [4, 5, 6]

// for (let number of numbers)
//     console.log(number);

// //Another WAY
// numbers.forEach(function (number) {
//     console.log(number)
// });

// numbers.forEach(number => console.log(number));

// //callback function
// numbers.forEach((number, index) => console.log(number, index));

//Join 
// const numbers = [4, 5, 6]
// const join = numbers.join(',');

// console.log(join)

// const message = 'This is my first message'
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

//Sorting Arrays and objects
// const numbers = [93, 5, 4, 5, 6]

// const sort = numbers.sort();
// console.log(sort);

// const reverse = numbers.reverse();
// console.log(reverse);

// const courses = [{
//         id: 1,
//         name: 'Node.js'
//     },
//     {
//         id: 2,
//         name: 'Javascript'
//     },
// ];

// courses.sort(function (a, b) {
//     //a<b =>-1

//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     if (a.name == b.name) return 0;

// })

// console.log(courses)

//TESTING THE ELEMENTS
// const numbers = [1, 2, 3, -5];

// // const allPositive = numbers.every(function (value) {
// //     return value >= 0
// // });

// const allPositive = numbers.every(value => value >= 0);
// console.log(allPositive)

// const atLeastOnePositive = numbers.some(value => value >= 0);
// console.log(atLeastOnePositive)

//FILTERING AN ARRAY
// const numbers = [1, -12, 3, -5];
// console.log(numbers.filter(value => value >= 0));

//MAP METHOD
// const numbers = [1, -12, 3, -5];
// const filtered = numbers.filter(value => value >= 0);
// const items = filtered.map(n => '<li>' + n + '</li>')
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html)

//MAP OBJECT
// const numbers = [1, -12, 3, -5];
// const filtered = numbers.filter(value => value >= 0);

// const items = filtered.map(n => ({
//     value: n
// }));

// console.log(items);

//CHAINING METHODS filter and map
// const numbers = [5, -12, 3, -5];
// const items = numbers.filter(value => value >= 0).map(n => ({
//     value: n
// }));

// console.log(items);
// let chain = items.filter(obj => obj.value > 1).map(obj => obj.value)
// console.log(chain);

const numbers = [1, -1, 2, 3];

// let sum = 0;
// let sumTotal = numbers.forEach(x => (sum += x));

//REDUCE ARRAY
// a= 0, c=1
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum)