console.log('more functions');

//Positive Numbers 
//Write a function which takes an array of numbers as input and returns a new array containing only the
//positive numbers in the given array.

var array = [-1, 6, -3, 2, -20, 54];

var newArr = array.filter(function(num){
    return num > 0;
})
console.log(newArr); 


//Even Numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the even
//numbers in the given array.

var array = [-1, 6, -3, 2, -20, 54];

var newArr = array.filter(function(num){
    return num % 2 == 0;
})
console.log(newArr);


//Square the Numbers
//Write a function which takes an array of numbers as input and returns a new array containing result of squaring
//each of the numbers in the given array by two. Equample: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var array = [1, 2, 3, 4, 5];

var newArr = array.map(function(num){
    return num * 2;
})
console.log(newArr);


//Cities 1
//Take cities and return those with temp cooler than 70 degrees

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

var coldCities = cities.filter(function(city){
    return city.temperature < 70.0;
})
console.log(coldCities);


//Cities 2
//Write a function which takes an array of city objects like the above problem as input and returns an
//array of the cities names.

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

var onlyNames = cities.map(function(city){
    return city.name;
})
console.log(onlyNames);


//Good Job!
//Given an array of people's names, print out "good Job, {{name}}! for each person's name, one on a line"

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

var congrats = people.map(function(name){
    return ("Good job, " + name + "!");
})
console.log(congrats);


//Sort an array
//Given an array of strings such the array of names given in the previous problem, sort them by 
//alphabetical order

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

console.log(people.sort());


//Sort an array, 2
//Sort the same array, but not by alphabetical order, but by how long each name is, shortest name first

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

var nameLength = people.sort(function(a, b){
    return a.length - b.length;
})
console.log(nameLength);


//Sort an array,3 
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];
//Given a array of numbers, sort the array by the sum of each inner array. For the above example,
//the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
[
    [1, 3, 4],
    [3, 6],
    [2, 4, 6, 8]
]

arr.sort(function(a, b){
    //if the sum of a's numbers is less than the sum of b's numbers
    // then a comes first. return a negative number.

    var arr = [
        [1, 3, 4],
        [2, 4, 6, 8],
        [3, 6]
    ];
      
      arr.sort(function(a,b){
    
            var sum = function(acc, item){
                return acc + item;
            }
            var aSum = a.reduce(sum, 0);
            var bSum = b.reduce(sum, 0);
    
            return aSum - bSum;
    });
        console.log(arr);

    /*
    var aSum = a.reduce(function(acc, item){
        return acc = item;
    }, 0);

    var bSum = b.reduce(function(acc, item){
        return acc + item;
    }, 0)

    //if the sum of b's numbers is less than the sum of a's numbers
    // then b comes first. Return a positive number.
});
console.log(arr);
*/


//3 times:
//Given this function: use the call3Times function to print "Hello, world!" 3 times.

/*
function call3Times(fun) {
    fun();
    fun();
    fun();
}
*/

call3Times(function(){
    console.log("Hello, world!");
})


//n times
//You will write a function callNTimes that takes two arguments: 
//times as a number, and fun as a function. It will call that function for that many times. Example:
//You are allowed to use a loop in the implementation of callNTimes.

/*
callNTimes(5, hello)
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!
*/

function callNTimes(num, fun) {
    for (var i=0; i < num.length; i++) {
        fun();
    }


//sum an array
//Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. 
// Use the reduce method to do this.

function sum(array) {
    return array.reduce(function(adding, currentValue) {
        return adding + currentValue;
    }, 0);
}


//Acronym
//Write a function acronym that takes an array of words as argument and returns the acronym 
// of the words. Use the reduce method to do this.

acronym(['very', 'important', 'person'])
'VIP'
acronym(['national', 'aeronautics', 'space', 'administration'])
'NASA'

function acronym(array) {
    return array.reduce(function(acc, item){
        return acc + item[0];
    },"");
}


//Bonus: forEach
//implement your own custom forEach function which takes two arguments: an array arr and a function fun.
//it will call fun passing from each item in arr to fun as the first argument. Example:


var array3 = [
    { name: 'Bob' },
    { name: 'Alice'},
    {name: 'Joe'}
];
/*
forEach (arr, function(person) {
    console.log('Hello, ' + person.name + '!');
})
*/


function forEach(array3, fun) {
// loop over the input array
	for (var i=0; i<array3.length; i++) {
		    fun(array3[i]);
	}
}


//Bonus: Map
//implement your own custom map function which takes two arguments an array arr and a function fun. it will return
//a new array, with each of hte results being the result of calling fun with each array element.


/*
function map(array, fun) {
//returm a new array
// each item should be the result of the callback, passing in an individual item
	var newArray = [];
	for (var i=0; i<array.length; i++) {
		var currentItem = array[i];
		newArray.push(fun(currentItem));
	}
    return newArray;
}
*/

