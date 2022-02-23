//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function favoriteFood(person){
    for(let food in person){
        if (person[food][0] instanceof Object){
            console.log(`\nMy favorite ${food}'s are:`)
            for(let place in person[food][0]){
                console.log(`\n${person[food][0][place]} from ${place}`);
            };
        }
        else if (person[food] instanceof Array){
            console.log(`\nMy favorite ${food}'s are:`);
            for(let dish of person[food]){
                console.log(`\n${dish}`);
            };
        }
        else{
            console.log(`\nMy favorite ${food} is ${person[food].toLowerCase()}`);
        };          
    };
};


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    printInfo=()=>{console.log(`\n${this.name} is ${this.age} years old.`)};
    
    addAge=(years)=>{this.age+=years};
}

let kris = new Human('Kris', 20);
let matt = new Human('Matt', 23);

kris.printInfo();
matt.printInfo();

kris.addAge(3);
kris.printInfo();


// this.aging = function(age=0){
//     console.log(`${this.name} ages by 1 year, each time! Their new age is:${this.age+=1}`)
// };








// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let phrase = 'Nothing like the smell of hot garbage and roasting biceps on a summer day in January!'
function checkLength(str){
    return new Promise(
        (resolve)=>{
            str.length>10 ? resolve(true) : resolve(false);            
        }
    )
};

async function statement(str){
    const newCheck = await checkLength(str);
    newCheck ? console.log('\nBig word') : console.log('\nSmall Number');
};

statement(phrase);