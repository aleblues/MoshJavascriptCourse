// // // // let cat = 'Lea'
// // // // let enter;

// // // // function checkCat(catName) 
// // // // {
// // // //     if (cat == 'Lea')
// // // //         return true; 
// // // // }

// // // // if (checkCat(cat)  == true)
// // // //     enter= true
// // // // else if (checkCat(cat)  == 'Orazio')
// // // //     enter = false
// // // // else
// // // //     enter = false

// // // // console.log(enter)


// // // // let hour = 1;

// // // // if (hour >=6 && hour < 12)
// // // //     console.log('Good Morning')
// // // // else if (hour >12 && hour < 18)
// // // //     console.log('Godd Afternoon')
// // // // else
// // // //     console.log ('Good Evening')


// // // // //switch - case

// // // // let role;

// // // // role = 'guest';

// // // // switch (role){
// // // //     case 'guest':
// // // //         console.log('Guest User');
// // // //         break;
// // // //     case 'moderator':
// // // //         console.log('Moderator User')
// // // //         break;
    
// // // //     default:
// // // //         console.log('Unknown User');
// // // // }


// // // // //LOOPS
// // // // for (let i = 0; i<=5; i++)
// // // // {
// // // //     if (i%2 !== 0) console.log(i)
// // // //     //console.log('Hello World', i);
// // // // }
// // // // console.log('/n')

// // // // //LOOPS in reverse orders
// // // // for (let i = 5; i>=1; i--)
// // // // {
// // // //     if (i%2 !== 0) console.log(i)
// // // //     //console.log('Hello World', i);
// // // // }

// // // console.log('/n')
// // // //While
// // // let i = 0
// // // do {
// // //     if (i%2 !== 0) console.log(i)
// // // i++;
// // // } while(i <=5);
// // // console.log('/n')

// // // // do-while loops
// // // let x = 100;
// // // do{
// // //     console.log(x)
// // // } while(x <=0);

// // // //for in loop
// // // const person = {
// // //     name:'Mosh',
// // //     age: 30
// // // }

// // // for (let key in person)
// // //     console.log(key, person[key])

// // // for (let key in person)
// // //     console.log(key)

// // // const colors = ['red','green','blue'];
// // // for (let index in colors)
// // // console.log(index);

// // // for (let index in colors)
// // // console.log(index, colors[index]);

// // // //for-of loop

// // // for (let color of colors)
// // // console.log(color);

// // //break and continue

// // let i =0;
// // while (i<=10){
// //     //if (i===5) break;
// //     console.log(i%2)

// //     // if (i%2 ==2) 
// //     // {
// //     //     console.log(i%2)
// //     //     i++;
// //     //     continue;
// //     // }
// //     // console.log(i);
// //     i++;
// // }

// //Exercise

// //write a function that takes two numbers
// //and returns the max of the two

// function findMax (a,b)
// {
//     // if (a>b)
//     // console.log('the max is',a)
//     // else if (b>a) console.log('the max is',b)
//     // else console.log('variables are equal!')

//     return (a>b) ? a : b;

// }

// let number = findMax (5,10);
// console.log(number)

// let width = 1000;
// let heigth = 500;

// function isLandScape(width,heigth){
//     return (width>heigth);
// }

// console.log(isLandScape(width,heigth))

// //Divisible by 3 => Fizz
// //divisible by 5 =>Buzz
// //Divisible by both 3 and 5 => FizzBuzz
// //Not divisible by 3 and 5
// //Not a number => 'not a number'

// console.log (typeof(5))

// function fizzBuzz(input) {
//     if (typeof(input)!='number')
//         return console.log('Not a number')
//     if (input%3 == 0 && input%5 == 0)
//         return console.log('FizzBuzz');
//     if (input%3 == 0)
//         return console.log ('Fizz');
//     if (input%5 == 0)
//         return console.log ('Buzz');
//     if (input%5 != 0 && input %3 !=0 && typeof(input)=='number')
//         return console.log('Not divisible by 3 and 5')

// }

// console.log (fizzBuzz(false))

// console.log (fizzBuzz(3))
// console.log (fizzBuzz(5))
// console.log (fizzBuzz(15))
// console.log (fizzBuzz(1))
// console.log (fizzBuzz("test"))

// Speed Limit = 70
// 5 -> 1 point
//Math.floor 
// 12 points suspended

function checkSpeed(speed){

    let points = (Math.floor((speed - 70)/5))
    
    if (points<1)
        return 'OK'
    if(points>=13)
        return 'suspended'
    if (speed <= 70)
        return 'OK'
    if (points>=1)
        return points;
    }
speed = 130;
console.log (checkSpeed(speed));