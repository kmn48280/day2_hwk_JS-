//Object Prototypes (ES-5)
String.prototype.pizza=()=>{console.log('pizza pizza')}
"my string".pizza()


//constructor!!!! 
function Car(make, model, year){
    this.make = make; //this == self in python 
    this.model = model;
    this.year = year;

    this.printInfo = function(wheels=0, color=0){
        console.log(`this is a ${this.year} ${this.make}, ${this.model}, 
        and has ${wheels} wheels and is color ${color}.`)
    };

};

let myCar = new Car('Toyota', 'Tundra', 2000)
console.log(myCar)
console.log(myCar.make)
console.log(myCar.something = 'something else')
console.log(myCar)
myCar.make = 'Honda'
console.log(myCar)
myCar.printInfo()
myCar.printInfo(4, 'red')
myCar.printInfo('red', 4)
myCar.printInfo('red')
myCar.drive = function(){console.log('VROOM')}
myCar.drive()

// let newCar = new Car('Mazda','CX-5',2021)
// // newCar.drive() //ERROR message stating that ".drive()" is NOT A FUNCTION b/c
// //the fxn was saved UNDER an INSTANCE of the class Car

Car.prototype.brake=()=>{console.log('SCreeeeeech!!!!'
)}
newCar.brake()
myCar.brake()

// ES6

class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    returnInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
};

let wilma = new Human('Wilma', '25', 'Female')
console.log(wilma)
wilma.returnInfo()

// INHERITANCE
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)// super()__init__ equivalent python!
        this.walking = walking; //bool
    }
    isBabyWalking(){
        if(this.walking){
            return 'baby is walking'
        }else{
            return "baby ain't walkin' yet"
        }
    };
};

let pebbles = new Baby('Pebbles', 1, 'Female', true)
console.log(pebbles)
console.log(pebbles.walking)
console.log(pebbles.isBabyWalking())
console.log(pebbles.returnInfo())

// ASync Functions


// JS Callbacks
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

function doHomework(subject, callback){
    console.log(`starting my ${subject} homework`)
    callback()
}

function myCallback(){
    console.log('I have finished my homework...Time for some...smo...Beer')
}

doHomework('python', myCallback)

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

const isEvenNumber = (num) =>{
    return new Promise(
        (resolve, reject)=>{
            if(num % 2==0){
                resolve(true)
            }else{
                reject(false)
            }
        }
    )
}

isEvenNumber(11).then(
    (result)=>{
        //if resolve/accepted
        console.log(`is Even Number is ${result}`)
    }
).catch(
    (error)=>{
        console.log(`is Even Number is ${error}`)
    }
);
console.log("hello")

//Async and await



//normal old fxn

function increaseSalary(base, increase){
    const newSalary = base + increase;
    console.log(`Your new salary is ${newSalary}`)
    return newSalary
};

console.log(increaseSalary(30000,3000))

function slowAddition(n1, n2){
    return new Promise(
        (resolve)=>{
            setTimeout(()=>resolve(n1+n2), 2000)
        }
    )
};

//IF THE ASYNC WAS WRITTEN AS AN ARROW FXN
// const newFunction = async () =>{
//     await
// }

//Async fxns need "async" and "await" written in fxn to notify computer 
async function increaseSalarySlowly(base, increase){

    const newSalary = await slowAddition(base, increase) //await--> will not return anything unless this part is completed 
    console.log(`Your new Salary is ${newSalary}`)
    return newSalary
};

console.log('before')
increaseSalarySlowly(400000,4000)
console.log('after')

