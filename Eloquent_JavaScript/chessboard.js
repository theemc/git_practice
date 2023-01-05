//Not eloquent solultion 

/*
let line1 = ' # # # # # # # #\n# # # # # # # # ';
let size = 8;
for (i = 0; i < size / 2; i++){
    console.log(line1);
}
*/

//Retry
let grid = '';
let size = 8;
for (i = 0; i < size; i++){
    for (n = 0; n < size; n++) {
        if((i + n) % 2 == 0) {
            grid += ' '
        } else {
            grid += '#'
        }
    }
    grid += "\n"
};
console.log(grid);

//Book Solution
/*
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/