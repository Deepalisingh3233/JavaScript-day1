console.log('Welcome to JavaScript Class');
console.log('Variables-Container where data store');
console.log("Three way to define Variables - 1)var->es5 2)let 3)const");
var user1="Ashish";
let user2='Deepali';
const user3='Sumit';
user1='Ashish Shukla';
user2='Deepali Singh';
// user3='Sumit Singh'; you can't update the value
console.log(user1);
console.log(user2);
console.log(user3);

// DataTypes-
// 1)numbers
// 2)strings
// 3)boolean
// 4)objects
// 5)undefined

let age=24;
let name='deepali';
let isAlive=false;
console.log(typeof('deepa'))
        // typeof()
console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(isAlive));

        // Array
let hobby=['Book Reading','Swiming','Dancing'];
console.log(hobby);
console.log(hobby[2]);
let array1=[12,'23.6','Deepa',true ,'A'];
console.log(typeof(array1));   //Array is treated as object
console.log(array1);
console.log(array1[0]);
console.log(array1[0]);
console.log(typeof(array1[3]));

        // Object
let users={
    name:"Deepali",
    age:20,
    email:'deepalisingh3233@gmail.com',
    hobby:['Book Reading','Swiming','Dancing']
}
console.log(users);
console.log(typeof(users));
console.log(users.name);
console.log(users.email);

        // Pre Define Functions
// 1)typeof()
// 2)toUpperCase()
// 3)toLowerCase()
// 4)length()

let name1="Deepali";
console.log(name1.toUpperCase());
console.log(name1.toUpperCase());
console.log(name1.length);

        // Random()
let num = Math.random();
console.log(num);

let num1 = Math.random()*100;
console.log(num1);

let num2 = Math.floor(Math.random()*100);
console.log(num2);

        // User define Functions(block of codes)
    // (Functions are something that can perform a specific task again and again as per user need )

function demo(){
    console.log('Function Called');
}
demo();

function sqr(num){
    let sqr=num*num;
    console.log(sqr);
}
sqr(5);

function sqr1(num){
    let sqr=num*num;
    return sqr;
}
let sqr1Result = sqr1(6);
console.log(sqr1Result)


