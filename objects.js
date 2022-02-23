let eryn = {
    name: 'Eryn',
    age: 21,
    noOfKids: 100,
    favColor: 'red'
};

console.log(eryn);
console.log(eryn['name']);
console.log(eryn.name);

let myKey = 'name'

// BELOW METHOD WILL NOT WORK!!!!
console.log(eryn.myKey);

//THIS IS THE WAY TO DO IT!
console.log(eryn[myKey]);

eryn.confused=true;
console.log(eryn);

//NEXT EX
let person2 = {
    name: "Max",
    age:31,
    prog_languages:['JavaScript','Python','C++', 'Java'],
    fav_color: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
};

//IN CLASS EXAMPLE...

//print 'Blue'
console.log(person2['fav_color']); //console.log(person2.fav_color)

//print c++
console.log(person2['prog_languages'][2]); //console.log(person2.prog_languages[2])

//print LA Rams
console.log(person2['teams'][1]['football']); //console.log(person2.teams[1].football)

// //print Chicago Fire 
console.log(person2['teams'][0]['soccer'][0]); //console.log(person2.teams[0].soccer[0])

console.log(Object.keys(person2));
console.log(Object.values(person2));

//Loop through an object...OLD UGLY WAY!!!

for (let i=0; i<Object.keys(person2).length; i++){
    console.log(
        Object.keys(person2)[i]
    )
    console.log(
        person2[Object.keys(person2)[i]]
    )
};

//for of loop is like python's for in loop-->DO IT THIS WAY!
//in JS for in loop!!

for (let key in person2){
    console.log(key)
    // console.log(person2.key) //will treat 'key' as a VARIABLE instead of a "key" string
    console.log(person2[key])
};

//USE THIS FOR HWK

let testArr = [1,2,3,4]

console.log(typeof testArr) //object
console.log(testArr instanceof Array) //true --> boolean
console.log(Array.isArray(testArr)) //true --> boolean
console.log(testArr instanceof Object) //true --> boolean
console.log(typeof 'hello') //string
console.log('hello' instanceof Object) //false
console.log(null instanceof Object) //false
console.log({} instanceof Object) //true
console.log({key:1} instanceof Object) //true


