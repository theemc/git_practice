/* Old JS Testing
//Make an array
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

//Iterate for each item of the array
groceries.forEach(function(groceryItem) {
    console.log(' - ' + groceryItem);
});

//Iterate for each using arrow notation function syntax
groceries.forEach(groceryItem => console.log(groceryItem));

//Predefine a function and use it later in a for each iteration
function printGrocery(element) {
    console.log(element);
}
groceries.forEach(printGrocery);

*/ // End old testing
let cb = (n1, n2) => {return n1+ n2};
let hof = (func) => {
    let value = func(3,5);
    return `this function returned ${value}`;
}
console.log(hof(cb));

