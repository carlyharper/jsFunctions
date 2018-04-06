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

var arrSort = arr.sort(function(a, b){
    return sum(a) < sum(b);
})
console.log(arrSort);



