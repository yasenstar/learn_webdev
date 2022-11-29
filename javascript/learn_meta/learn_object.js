/* var user = {};

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
};

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
};

var house = {};
house.rooms = 4;
house.windows = 10;
house["roofs"] = 2;

console.log(assistantManager);
console.log(table);
console.log(table.priceUSD);
console.log(house); */

/* var fruits = [];
fruits.push("apple");
fruits.push('pear');

console.log(fruits); */

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
    return arr;
};

var simplerArr = arrayBuilder('apple', 'pear', 'plum');