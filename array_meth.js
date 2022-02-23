let groupOfNames = ['Kristina', 'Zak', 'Jayden', 'David', 'Kristen', 'Kevin']
groupOfNames.forEach((name)=>console.log(name[0]))
console.log(groupOfNames)

//.map() !!!!IMPORTANT, NEED TO UNDERSTAND!!!!!
let newGroup = groupOfNames.map((name)=>name[0])
console.log(newGroup)

// names that start w/k

let kNames = groupOfNames.map((name)=>{
    if (name[0].toLowerCase() == 'k'){
        return name;
    }else{
        return false;
    }
})

console.log(kNames)

//reduce fxn

const nums = [2,4,6,8, 10]
let numsSum = nums.reduce(
    (accumulator, currentNum)=>{
        return accumulator + currentNum
    }
)

console.log(numsSum)

//filter

let longNames = groupOfNames.filter(
    name => name.length > 5 
)
console.log(longNames)

// .shift (opp. of pop)
console.log(nums.shift())
console.log(nums)

// .unshift (add num back to front of list)
shiftedNumber = nums.shift()
console.log(nums)

nums.unshift(shiftedNumber)
console.log(nums)

// != == > < >= <=

// ===

console.log('1' == 1) //true.. it is checking the values to see if they are equal
console.log('1' ===1) // return false...this checks the TYPE AND THE VALUE and ensure that they are equal

//Date Function

let day = new Date(); //equivalent of creating a NEW INSTANCE of a CLASS in python 
console.log(day);
day = day.getDay();

let literalDay = new Date().toString()
console.log(literalDay);


console.log(literalDay);
console.log(literalDay.split(' '));

console.log(literalDay.split(' ')[0]);

// Switch Case Statement
day = 1
switch(day){
    case 0:
        console.log('Go To Church');
        break;
    case 1: 
        console.log("Write... It's Monday");
        // break;
    case 2:
        console.log('Testing Tuesday, test your code');
        break;
    case 3:
        console.log("Testing more code... It's hump day");
        break;
    case 4:
        console.log("Write a feature on Thursday ");
    case 5:
        console.log('Test our Feature on Feature Friday');
    case 6:
        console.log('Sleep all day!');
        break;
    default:
        console.log("That's not a day of the week")
}

//To print w/"literalDay.split(' ')[0]" --> change all the numerical indexes to: ["
//'Sun','Mon', 'Tue', etc.
