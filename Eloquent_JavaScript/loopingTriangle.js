//My Solution
let triangle = '';
for (i = 0; i < 7; i++) {
    triangle += '#';
    console.log(triangle);
}

//Book Solution
for (line = '#'; line.length < 8; line += '#') {
    console.log(line);
}