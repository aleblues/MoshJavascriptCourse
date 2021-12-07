// //OOP
// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     isVisible:true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();// Method

//Factory or Constructor Functions
//Factory

// function createCircle(radius,location,isVisible){
//  return {
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     }; 
// }

// const circle1= createCircle(1)
// const circle2= createCircle(2)

// function Circle (radius){
// this.radius = radius;
// this.test ='1';

// this.draw = function (){
// console.log('draw');
// }

// };

// const circle = new Circle(1);
// circle.color = 'yellow';

// console.log(circle)

// let x = {};

// new String();
// new Boolean();

// const Circle1 = new Function('radius','')
// Constructor in javascript

// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

// const another = new Circle(1);

// console.log (another.constructor)

// console.log (circle.constructor)

//ENUMERATE PROPERTIES OF AN OBJECT

// for (let key in circle) {
//     console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle))
//     console.log(key);

// for (let entries of Object.entries(circle))
//     console.log(entries);

// if ('radius' in circle) console.log('yes')

// //Cloning an Object
// const another = {}

// for (key in circle)
//     another[key] = circle[key]

// //modern javascript

// const another2 = Object.assign({}, circle);
// const another3 = Object.assign({
//     color: 'yellow',
// }, circle);

// console.log(another3)

// const another4 = {
//     ...circle
// };

// console.log(another4)


// //Math Object
// Math.random()

// //String primitive
// const message = 'This is my first message';
// //String object
// const another = new String('hi');

// console.log(message.includes)

//Template Literals

// const another = `This is my 
// 'first' message`;
// console.log(another)

// const name = 'John';
// const message = 'Hi ' + name + ',\n';

// const another2 =
//     `Hi ${name}, 
// my name is Alessio`

// console.log(another2)

//Date Object
// const date1 = new Date();
// const date2 = new Date('May 11 2000 09:10');

// const date3 = new Date(2018, 4, 11, 9, 10);

// console.log(date2);
// console.log(date3);

// console.log(date1.getDay())

//************************************** */
//Ex1.

//street, city, zipCode
//showAddress

// EX 1
// const address = {
//     street: 'via 1',
//     city: 'Firenze',
//     zipcode: '50124'
// };

// // function Showaddress(address) {
// //     for (let entry of Object.entries(address))
// //         console.log(entry)
// // }

// // let x = new Showaddress(address)

// function showAddress(address) {

//     for (let entry of Object.entries(address))
//         console.log(entry)

// }

//showAddress(address);
//***************************************

//*******************EX2
//FACTORY function
// function createAddress(street, city, zipcode) {

//     return {
//         street,
//         city,
//         zipcode
//     }
// };

// let address1 = new createAddress('Via', 'Firenze', 50124);
// let address2 = new createAddress('Via', 'Firenze', 50124);

// console.log(address1)

// //Constructor Function
// function Address(street, city, zip) {
//     this.street = street;
//     this.city = city;
//     this.zip = zip
// };

// var address3 = new Address('Via', 'Firenze', 50124);
// console.log(address3);
// //***************************** */

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//         address1.zipcode === address2.zipcode &&
//         address1.city === address2.city;
// }

// function areSame(address1, address2) {
//     return address1 === address2;;
// };

// var address3 = address1;
// console.log(areEqual(address1, address3))
// console.log(areSame(address1, address3))

//*****************EX4

// title
// body
// author
// views
// comments //(author, body)
// isLive

// function Post() {
//     this.title = '',
//         this.body = '',
//         this.author = '',
//         this.views = 10,
//         this.comments = [{
//             author: '',
//             body: ''
//         }],
//         this.isLive = true
// }

// const post = new Post();
// post.title = 'a'
// post.body = 'b'
// post.author = 'c'
// post.views = 'd'
// post.comments = [{
//     author: 'e',
//     body: 'f'
// }]
// post.isLive = true

// console.log(post)

// let post2 = new PostnotPublished('a', 'b', 'c')
// console.log(post2)

// function PostnotPublished(title, body, author) {
//     this.title = title,
//         this.body = body,
//         this.author = author,
//         this.views = 0,
//         this.comments = [],
//         this.isLive = false;
// }

function CheckPrizeRange(prize) {


    if (prize < 0) return 'prize showd not a negative number!'
    if (prize < 10) return 'cheap'
    else if (prize > 10 && prize << 20) return 'moderate'
    else return expensive

};

prizeRanges = [{
        label: '$',
        tooltip: 'Inexpensive',
        minperPerson: 0,
        maxperPerson: 10
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minperPerson: 10,
        maxperPerson: 20
    },
    {
        label: '$$',
        tooltip: 'Expensive',
        minperPerson: 21,
        maxperPerson: 50
    }
];

let restaurants = [{
    averagePerPerson: 5
}]

let checkPrize = CheckPrizeRange(5)
console.log(checkPrize)