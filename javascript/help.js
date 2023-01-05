const sentence = ['sense.','make', 'all', 'will', 'This'];
let i = 0;

const reverseArray = (array) => {
    array.forEach(element => {
        array[element] = (array.length - i) + 1;
        i++
    });
}

console.log(reverseArray(sentence));


const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            let number = arr[i];
            while (number <= number)
            console.log(number)
      }
}
smallestPowerOfTwo(numbers)
           /* while (number <= a) {
                  j = i * 2;
            }
            results.push(j);
      }
      return results */

//console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]


// Write function below

// Write function below
const groceries = (array) => {
  let list ='';
  if (array.length > 2) {
    for(let i = 0; i < array.length - 2; i++){ 
      list += `${array[i].item}, `;
    }
    list += `${array[array.length-2].item} and ${array[array.length-1].item}`
  } else if (array.length === 2) {
      list += `${array[array.length-2].item} and ${array[array.length-1].item}`;
  } else {
    list += array[0].item;
  }
  return console.log(list);
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'


/* OLD
// Write function below
const groceries = (array) => {
  let list ='';
  for(let i = 0; i < array.length - 2; i++){ 
    list += `${array[i].item}, `;
  }
  list += `${array[array.length-2].item} and ${array[array.length-1].item}`
return console.log(list);
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

*/